import {Alert} from 'react-native';

export function DefaultErroAlert() {
  Alert.alert('', 'Ocorreu um erro, Tente Novamente mais Tarde');
}

export function SuccessAlert(message: string) {
  Alert.alert('', 'gravado com sucesso!');
}
