import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

export function LoadingScreen() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="#161C26" size="large" />
      <Text style={styles.text}>Carregando...</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 100,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#161C26',
  },
});
