import {View} from 'react-native';
import {Loader} from '../Loaders/Loader';
import {Text} from '../Text';
import {ButtonComponent} from '../Buttons';

interface EmptyListProps {
  title?: string;
  loading?: boolean;
  error?: unknown;
  refetch?: () => void;
}

export function EmptyList({
  title = 'Lista vazia',
  loading,
  error,
  refetch,
}: EmptyListProps) {
  let component = (
    <Text size="M" color="steel-blue" align="center">
      {title}
    </Text>
  );

  if (loading) {
    component = <Loader />;
  }

  if (error) {
    component = (
      <>
        <Text>Não foi possível carregar 😢</Text>
        <ButtonComponent text="Recarregar" type="reload" onPress={refetch} />
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
