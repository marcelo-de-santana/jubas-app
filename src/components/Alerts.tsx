import {Alert} from 'react-native';

type AlertProps = {
  message?: string;
  onPress?: () => void;
  cancelButton?: () => void;
};

export function AlertComponent({
  message = 'Ocorreu um erro. Tente novamente mais tarde!',
}: AlertProps) {
  Alert.alert('', message);
}

export function DecisionAlert({
  message = 'Deseja prosseguir?',
  onPress,
  cancelButton,
}: AlertProps) {
  Alert.alert('', message, [
    {
      style: 'cancel',
      text: 'CANCELAR',
      onPress: cancelButton,
    },
    {
      text: 'SIM',
      onPress: onPress,
    },
  ]);
}
