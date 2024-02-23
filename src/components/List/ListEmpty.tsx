import {Loader} from './Loader';
import {Text} from '../Text/Text';
import {ButtonCentral} from '../Buttons';
import {Box} from '../Box';

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
    <Text variant="paragraphMedium" color="primaryContrast" textAlign="center">
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
        <Text color="primaryContrast">Não foi possível carregar 😢</Text>
      </>
    );
  }

  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      {component}
    </Box>
  );
}
