import {ColorName, colorRegistry, fontSizeRegistry} from '@styles';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

export function LoadingScreen({color = 'midnight-blue'}: {color?: ColorName}) {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={colorRegistry[color]} size="large" />
      <Text style={[styles.text, {color: colorRegistry[color]}]}>
        Carregando...
      </Text>
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
    fontWeight: 'bold',
    fontSize: fontSizeRegistry['M'],
  },
});
