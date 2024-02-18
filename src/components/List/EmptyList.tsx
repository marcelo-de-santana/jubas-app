import {View} from 'react-native';
import {Loader} from '../Loader/Loader';
import {Text} from '../Text/Text';
import {Button} from '../Buttons/Button';

export interface EmptyListProps {
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
}: Readonly<EmptyListProps>) {
  let component = (
    <Text size="M" color="steelBlue" align="center">
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
        <Button
          type="center"
          title="Recarregar"
          backgroundColor="steelBlue"
          textProps={{color: 'white'}}
          onPress={refetch}
        />
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
