import {AlertMessageType, BoxDelete, Text} from '@components';
import {useCategoryRemove} from '@domain';
import {CatalogStackProps} from '@routes';

export function CategoryDeleteScreen({
  navigation,
  route,
}: Readonly<CatalogStackProps<'CategoryDeleteScreen'>>) {
  const {category} = route.params;

  const {mutate, isPending, isSuccess, isError} = useCategoryRemove();

  const sendToDelete = () => {
    mutate(category.id);
  };

  const popTwoScreens = () => {
    navigation.pop();
    navigation.pop();
  };

  const customMessage: AlertMessageType = {
    success: 'Excluído com sucesso',
  };

  return (
    <BoxDelete
      isLoading={isPending}
      modalStatusProps={{
        customMessage,
        isError,
        isSuccess,
        successAction: popTwoScreens,
        errorAction: popTwoScreens,
      }}
      buttonProps={{
        cancelButtonProps: {onPress: navigation.goBack},
        confirmButtonProps: {onPress: sendToDelete},
      }}>
      <Text variant="paragraphMedium" color="primary" textAlign="justify">
        {'Categoria: ' + category.name}
      </Text>
    </BoxDelete>
  );
}
