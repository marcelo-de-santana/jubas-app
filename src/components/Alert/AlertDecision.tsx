import {Alert} from 'react-native';

interface AlertDecisionProps {
  message?: string;
  onPress?: () => void;
}

export function AlertDecision({message, onPress}: AlertDecisionProps) {
  message = message ?? 'Ocorreu um erro. Tente novamente mais tarde!';

  message = message ?? 'Deseja prosseguir?';
  Alert.alert('', message, [
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
