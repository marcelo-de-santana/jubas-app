import {Screen} from '@components';
import {Text, StyleSheet, Image} from 'react-native';

export function UnderConstruction() {
  return (
    <Screen>
      <Text style={styles.title}>Essa página está em construção</Text>
      <Image
        source={require('../../assets/images/app-em-construcao.gif')}
        style={styles.image}
      />
      <Text style={styles.description}>
        Desculpe pelo transtorno, estamos trabalhando para melhorar sua
        experiência.
      </Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    height: "40%",
    width: 'auto',
  },
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
