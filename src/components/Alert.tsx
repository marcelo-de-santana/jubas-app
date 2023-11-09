import {Alert as AlertRN} from 'react-native';

interface AlertProps {
  type: 'alert' | 'decision';
  message?: undefined | string;
  onPress?: () => void;
}

export function Alert({type = 'alert', message, onPress}: AlertProps) {
  message = message ?? 'Ocorreu um erro. Tente novamente mais tarde!';
  let component = AlertRN.alert('', message);

  if (type === 'decision') {
    message = message ?? 'Deseja prosseguir?';
    component = AlertRN.alert('', message, [
      {
        text: 'CANCELAR',
        style: 'cancel',
      },
      {
        text: 'SIM',
        style: 'default',
        onPress: onPress,
      },
    ]);
  }
  return component;
}
