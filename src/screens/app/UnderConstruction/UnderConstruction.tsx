import {Screen, ConstructionImage} from '@components';
import {Text, StyleSheet} from 'react-native';

export function UnderConstruction() {
  return (
    <Screen>
      <Text style={styles.title}>Essa página está em construção</Text>
      <ConstructionImage />
      <Text style={styles.description}>
        Desculpe pelo transtorno, estamos trabalhando para melhorar sua
        experiência.
      </Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    margin: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    margin: 10,
    color: 'black',
    textAlign: 'justify',
  },
});
