import {
  AlertStatusType,
  Box,
  BoxItem,
  ButtonDangerOutline,
  ButtonSuccess,
  ModalDelete,
  ModalStatus,
  Screen,
} from '@components';
import {categoryUseCases} from '@domain';
import {BusinessManagementStackProps} from '@routes';
import {useState} from 'react';

export function CategoryDeleteScreen({
  navigation,
  route,
}: Readonly<BusinessManagementStackProps<'CategoryDeleteScreen'>>) {
  const {category} = route.params;

  const {fetch, isLoading, status} = categoryUseCases.remove();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const sendToDelete = () => {
    fetch(category.id);
  };

  const openModal = () => {
    setIsVisible(true);
  };
  const closeModal = () => {
    setIsVisible(false);
  };

  const popTwoScreens = () => {
    navigation.pop(), navigation.pop();
  };

  const customStatus: AlertStatusType = {
    204: ['SUCCESS', 'Excluído com sucesso.'],
  };

  return (
    <Screen flex={1} justifyContent="center">
      <ModalStatus
        customStatus={customStatus}
        status={status}
        successAction={popTwoScreens}
        errorAction={popTwoScreens}
      />
      <ModalDelete
        loading={isLoading}
        isVisible={isVisible}
        onPressToCancel={closeModal}
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
          onPress={openModal}
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
