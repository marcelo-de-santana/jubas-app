import {AlertMessageType, BoxDelete, Text} from '@components';
import {CatalogStackProps} from '@routes';
import {useSpecialtyRemove} from '@domain';
import {mask} from '@utils';

export function SpecialtyDeleteScreen({
  navigation,
  route,
}: Readonly<CatalogStackProps<'SpecialtyDeleteScreen'>>) {
  const {category, specialty} = route.params;
  const {mutate, isPending, isError, isSuccess} = useSpecialtyRemove();

  const sendToDelete = () => {
    mutate(route.params.specialty.id);
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
      <Text variant="paragraphMedium" color="primary" textAlign="justify">
        {'Serviço: ' + specialty.name}
      </Text>
      <Text variant="paragraphMedium" color="primary" textAlign="justify">
        {'Preço: ' + mask.money(specialty.price)}
      </Text>
      <Text variant="paragraphMedium" color="primary" textAlign="justify">
        {'Duração: ' + specialty.timeDuration}
      </Text>
    </BoxDelete>
  );
}
