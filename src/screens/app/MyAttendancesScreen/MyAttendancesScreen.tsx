import {
  AppointmentDescription,
  FlatList,
  ListSeparator,
  Screen,
  TouchableOpacity,
} from '@components';
import {AppointmentResponse, useAppointmentGetByUserId} from '@domain';
import {AppStackProps} from '@routes';
import {ListRenderItemInfo} from 'react-native';

export function MyAttendancesScreen({
  navigation,
  route: {
    params: {userId},
  },
}: AppStackProps<'MyAttendancesScreen'>) {
  const {
    data: appointments,
    isLoading,
    isError,
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
        ItemSeparatorComponent={() => <ListSeparator my="s12" />}
      />
    </Screen>
  );
}

function AppointmentListItem({
  item: appointment,
  navigation: {navigate},
}: ListRenderItemInfo<AppointmentResponse> &
  Pick<AppStackProps<'MyAttendancesScreen'>, 'navigation'>) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={
        !(
          appointment.status === 'FINALIZADO' ||
          appointment.status === 'AVALIADO'
        )
      }
      onPress={() =>
        navigate('MyFeedbackScreen', {
          appointmentId: appointment.id,
          status: appointment.status,
        })
      }>
      <AppointmentDescription appointment={appointment} />
    </TouchableOpacity>
  );
}
