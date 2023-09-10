import {Alert} from 'react-native';

export function DefaultErroAlert() {
  Alert.alert('', 'Ocorreu um erro. Tente novamente mais tarde!');
}

export function SuccessAlert(message: string) {
  Alert.alert('', message);
}

type DecisionAlertProp = {
  message?: string;
  onPress: () => void;
};

export function DecisionAlert({message, onPress}: DecisionAlertProp) {
  Alert.alert('', message ?? 'Deseja prosseguir?', [
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
