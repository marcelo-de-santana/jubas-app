import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {loader} from '@styles';

export function LoadingView() {
  return (
    <View style={loader.container}>
      <ActivityIndicator color="#3c4659" size="large" />
      <Text style={loader.text}>Carregando...</Text>
    </View>
  );
}
