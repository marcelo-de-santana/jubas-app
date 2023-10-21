import {Alert as AlertRN} from 'react-native';

interface AlertProps {
  type: 'alert' | 'decision';
  message?: undefined | string;
  onPress?: () => void;
}

export function Alert({type, message, onPress}: AlertProps) {
  if (type === 'alert') {
    if (!message) message = 'Ocorreu um erro. Tente novamente mais tarde!';
    AlertRN.alert('', message);
  }

  if (type === 'decision') {
    if (!message) message = 'Deseja prosseguir?';
    AlertRN.alert('', message, [
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
}
