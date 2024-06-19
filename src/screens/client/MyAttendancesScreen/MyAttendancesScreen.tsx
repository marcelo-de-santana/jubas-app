import {
  AppointmentDescription,
  FlatList,
  ListSeparator,
  Screen,
  TouchableOpacity,
} from '@components';
import {
  AppointmentResponse,
  useAppointmentGetByUserId,
  useMercadoPagoGetAccessToken,
} from '@domain';
import {ClientStackProps} from '@routes';
import {
  api,
  apiMercadoPago,
  registerMercadoPagoToken,
  useAuthStore,
} from '@services';
import {useMutation} from '@tanstack/react-query';
import {mask} from '@utils';
import {Linking, ListRenderItemInfo} from 'react-native';

export function MyAttendancesScreen({
  navigation,
  route: {
    params: {userId},
  },
}: ClientStackProps<'MyAttendancesScreen'>) {
  const {
    data: appointments,
    isLoading,
    isError,
    refetch,
  } = useAppointmentGetByUserId(userId);

  return (
    <Screen flex={1}>
      <FlatList
        data={appointments}
        loading={isLoading}
        error={isError}
        renderItem={prop => (
          <AppointmentListItem navigation={navigation} {...prop} />
        )}
        refetch={refetch}
        ItemSeparatorComponent={() => <ListSeparator my="s12" />}
        listEmptyTitle="Nenhum atendimento foi encontrado"
      />
    </Screen>
  );
}

function AppointmentListItem({
  item: appointment,
  navigation: {navigate},
}: ListRenderItemInfo<AppointmentResponse> &
  Pick<ClientStackProps<'MyAttendancesScreen'>, 'navigation'>) {
  const {user} = useAuthStore();

  const {mutate: createPreferenceMutate} = useMercadoPagoCreatePreference();
  const {mutate: updatePaymentMutate} = usePaymentUpdateStatus();
  const {mutate: getAccessTokenMutate} = useMercadoPagoGetAccessToken();

  const onPress = () => {
    if (appointment.status === 'FINALIZADO') {
      // Função para criar a preferência de pagamento
      const createPreference = async () => {
        const description = `${appointment.specialty.name} com ${
          appointment.employee.name
        } em ${mask.date(new Date(appointment.scheduling.date))} às ${
          appointment.scheduling.startTime
        }h`;

        createPreferenceMutate({
          item: {
            id: appointment.id,
            title: appointment.specialty.name,
            description,
            quantity: 1,
            unit_price: appointment.specialty.price,
          },
          payer: {
            name: appointment.client.name,
            email: user?.email,
          },
        });
      };

      // Função para solicitar o ID do agendamento e atualizar o pagamento
      const requestAppointmentId = async () => {
        updatePaymentMutate(
          {appointmentId: appointment.id},
          {
            onSuccess: () => {
              createPreference();
            },
          },
        );
      };

      // Solicitação de token de acesso do MercadoPago
      getAccessTokenMutate(undefined, {
        onSuccess: ({accessToken}) => {
          registerMercadoPagoToken(accessToken);
          requestAppointmentId();
        },
      });
    }
    if (appointment.status === 'PAGO' || appointment.status === 'AVALIADO') {
      return navigate('MyFeedbackScreen', {
        appointmentId: appointment.id,
        status: appointment.status,
      });
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={
        appointment.status === 'CANCELADO' ||
        appointment.status === 'MARCADO' ||
        appointment.status === 'EM_ATENDIMENTO'
      }
      onPress={onPress}>
      <AppointmentDescription appointment={appointment} />
    </TouchableOpacity>
  );
}

type PreferenceRequest = {
  item: {
    id: string;
    title: string;
    description: string;
    quantity: number;
    unit_price: number;
  };
  payer?: {name: string; email?: string};
  auto_return?: 'all' | 'approved';
};

async function updatePaymentStatus({appointmentId}: {appointmentId: string}) {
  const {data} = await api.patch('/payments/' + appointmentId);
  return data;
}

async function createPreference(request: PreferenceRequest) {
  const {data} = await apiMercadoPago.post('/checkout/preferences', {
    items: [request.item],
    payer: {name: request.payer?.name, email: request.payer?.email},
    payment_methods: {
      installments: 1,
      excluded_payment_types: [
        {
          id: 'ticket',
        },
      ],
    },
    auto_return: 'approved',
    back_urls: {
      success: 'jubas://payment-success',
    },
  });
  return data;
}

const mercadoPagoApi = {createPreference};

function usePaymentUpdateStatus() {
  return useMutation({mutationFn: updatePaymentStatus});
}

function useMercadoPagoCreatePreference() {
  return useMutation({
    mutationFn: mercadoPagoApi.createPreference,
    onSuccess: ({init_point}) => {
      openLink(init_point);
    },
    onError: data => {
      console.log(data);
    },
  });
}

const openLink = (link: string) => {
  Linking.openURL(link);
};
