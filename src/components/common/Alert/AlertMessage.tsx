import {Alert as RNAlert} from 'react-native';

interface AlertMessageProps {
  message?: string;
  onPress?: () => void;
}

export function AlertMessage({message, onPress}: AlertMessageProps) {
  message = message ?? 'Ocorreu um erro. Tente novamente mais tarde!';
  RNAlert.alert('', message);
}
