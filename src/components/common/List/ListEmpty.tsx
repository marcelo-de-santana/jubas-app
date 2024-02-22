import {View} from 'react-native';
import {Loader} from './Loader';
import {Text} from '../Text/Text';
import {ButtonCentral} from '../Buttons';

export interface ListEmptyProps {
  title?: string;
  loading?: boolean;
  error?: unknown;
  refetch?: () => void;
}

export function ListEmpty({
  title = 'Lista vazia',
  loading,
  error,
  refetch,
}: Readonly<ListEmptyProps>) {
  let component = (
    <Text fontSize="M" color="steelBlue" textAlign="center">
      {title}
    </Text>
  );

  if (loading) {
    component = <Loader />;
  }

  if (error) {
    component = (
      <>
        <ButtonCentral title="Recarregar" onPress={refetch} />
        <Text color="backgroundContrast">Não foi possível carregar 😢</Text>
      </>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {component}
    </View>
  );
}
