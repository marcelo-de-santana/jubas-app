import {Alert as AlertRN} from 'react-native';

interface AlertProps {
  type: 'alert' | 'decision';
  message?: string;
  onPress?: () => void;
}

export function Alert({type, message, onPress}: AlertProps) {
  message = message ?? 'Ocorreu um erro. Tente novamente mais tarde!';

  if (type === 'decision') {
    message = message ?? 'Deseja prosseguir?';
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
  if (type === 'alert') {
    AlertRN.alert('', message);
  }
}
