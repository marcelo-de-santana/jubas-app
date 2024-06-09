import {
  AppointmentDescription,
  FlatList,
  ListSeparator,
  Screen,
  TouchableOpacity,
} from '@components';
import {AppointmentResponse, useAppointmentGetByUserId} from '@domain';
import {ClientStackProps} from '@routes';
import {api, apiMercadoPago, useAuthStore} from '@services';
import {useMutation} from '@tanstack/react-query';
import {mask} from '@utils';
import axios from 'axios';
import {Linking, ListRenderItemInfo} from 'react-native';
import {string} from 'yup';

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
  const createPreference = useMercadoPagoCreatePreference();
  const paymentUpdate = usePaymentUpdateStatus();

  const onPress = () => {
    if (appointment.status === 'FINALIZADO') {
      paymentUpdate.mutate(
        {appointmentId: appointment.id},
        {
          onSuccess: () => {
            createPreferenceMutate();
          },
        },
      );
      // return navigate('PaymentScreen', {appointmentId: appointment.id});
      // return openLink();
      const createPreferenceMutate = () => {
        const description =
          appointment.specialty.name +
          ' com ' +
          appointment.employee.name +
          ' em ' +
          mask.date(new Date(appointment.scheduling.date)) +
          ' às ' +
          appointment.scheduling.startTime +
          'h';

        createPreference.mutate({
          item: {
            id: appointment.id,
            title: appointment.specialty.name,
            description,
            quantity: 1,
            unit_price: appointment.specialty.price,
          },
          payer: {name: appointment.client.name, email: user?.email},
        });
      };
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
    // notification_url: "http://192.168.1.16:8080/payments_by_checkout_pro"
    // auto_return: 'approved',
    // back_url: {
    //   success: 'https://google.com',
    //   pending: 'https://google.com',
    //   failure: 'https://google.com',
    // },
  });
  return data;
}
// 5031 4332 1540 6351
// 4235 6477 2802 5682
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
