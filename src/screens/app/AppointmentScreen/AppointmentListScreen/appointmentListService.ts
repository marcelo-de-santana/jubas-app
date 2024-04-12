import {BusinessManagementStackProps} from '@routes';
import {Alert} from 'react-native';

type NavigateToAppointmentScreenProps = {
  isAvailable: boolean;
  appointmentId?: string;
} & Pick<BusinessManagementStackProps<'AppointmentListScreen'>, 'navigation'>;

export const navigateToAppointmentScreen = ({
  isAvailable,
  appointmentId,
  navigation,
}: NavigateToAppointmentScreenProps) => {
  if (!isAvailable && appointmentId) {
    return navigation.navigate('AppointmentDescriptionScreen', {appointmentId});
  }
  if (!isAvailable) {
    return Alert.alert('Horário de intervalo');
  }
  return navigation.navigate('AppointmentCreateScreen', {date: '', time: ''});
};
