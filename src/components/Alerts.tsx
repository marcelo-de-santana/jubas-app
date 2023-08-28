import {Alert} from 'react-native';

export function DefaultErroAlert() {
  Alert.alert('', 'Ocorreu um erro, Tente Novamente mais Tarde');
}

export function SuccessAlert(message: string) {
  Alert.alert('', message);
}

export function DecisionAlert({onPress}: {onPress: () => void}) {
  Alert.alert('', 'Deseja prosseguir?', [
    {
      style: 'cancel',
      text: 'CANCELAR',
    },
    {
      text: 'SIM',
      onPress: onPress,
    },
  ]);
}
