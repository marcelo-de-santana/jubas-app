import {
  AlertMessageType,
  Box,
  BoxItem,
  ButtonDangerOutline,
  ButtonSuccess,
  ModalDelete,
  ModalStatus,
  Screen,
} from '@components';
import {useCategoryRemove} from '@domain';
import {useModalVisibility} from '@hooks';
import {CatalogStackProps} from '@routes';

export function CategoryDeleteScreen({
  navigation,
  route,
}: Readonly<CatalogStackProps<'CategoryDeleteScreen'>>) {
  const {category} = route.params;

  const {mutate, isPending, isSuccess, isError} = useCategoryRemove();

  const {isVisible, handleVisibility} = useModalVisibility();

  const sendToDelete = () => {
    mutate(category.id);
  };

  const popTwoScreens = () => {
    navigation.pop();
    navigation.pop();
  };

  const customStatus: AlertMessageType = {
    success: 'Excluído com sucesso.',
  };

  return (
    <Screen flex={1} justifyContent="center">
      <ModalStatus
        customMessage={customStatus}
        isSuccess={isSuccess}
        isError={isError}
        successAction={popTwoScreens}
        errorAction={popTwoScreens}
      />
      <ModalDelete
        loading={isPending}
        isVisible={isVisible}
        onPressToCancel={handleVisibility}
        onPressToConfirm={sendToDelete}>
        <BoxItem
          backgroundColor="secondary"
          padding="s10"
          borderRadius="s6"
          textProps={{
            variant: 'paragraphMedium',
            color: 'primary',
            textAlign: 'justify',
          }}
          label={'Categoria: ' + category.name}
        />
      </ModalDelete>
      <Box justifyContent="space-between">
        <ButtonDangerOutline
          flex={0}
          marginBottom="s20"
          textProps={{
            variant: 'paragraphMedium',
            fontWeight: '600',
            color: 'red',
          }}
          onPress={handleVisibility}
          title="Excluir categoria"
        />
        <ButtonSuccess
          flex={0}
          backgroundColor="primaryContrast"
          textProps={{
            variant: 'paragraphMedium',
            fontWeight: '600',
            color: 'primary',
          }}
          onPress={navigation.goBack}
          title="Voltar"
        />
      </Box>
    </Screen>
  );
}
