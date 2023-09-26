import {Alert} from 'react-native';

export function DefaultErroAlert() {
  Alert.alert('', 'Ocorreu um erro. Tente novamente mais tarde!');
}

export function SuccessAlert({
  message = 'Operação bem sucedida!',
}: {
  message: string;
}) {
  Alert.alert('', message);
}

type DecisionAlertProp = {
  message?: string;
  onPress: () => void;
};

export function DecisionAlert({
  message = 'Deseja prosseguir?',
  onPress,
}: DecisionAlertProp) {
  Alert.alert('', message, [
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
