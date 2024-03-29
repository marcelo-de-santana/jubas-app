import {
  AlertStatusType,
  Box,
  ButtonDangerOutline,
  ButtonSuccess,
  ModalStatus,
  Screen,
} from '@components';
import {BusinessManagementStackProps} from '@routes';
import {useState} from 'react';
import {Modal} from './components/Modal';
import {specialtyUseCases} from '@domain';

export function SpecialtyDeleteScreen({
  navigation,
  route,
}: Readonly<BusinessManagementStackProps<'SpecialtyDeleteScreen'>>) {
  const {fetch, isLoading, status} = specialtyUseCases.remove();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const sendToDelete = () => {
    fetch(route.params.specialty.id);
  };

  const openModal = () => {
    setIsVisible(true);
  };
  const closeModal = () => {
    setIsVisible(false);
  };

  const popTwoScreens = () => {
    navigation.pop();
    navigation.pop();
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
      <Modal
        loading={isLoading}
        isVisible={isVisible}
        route={route}
        onPressToCancel={closeModal}
        onPressToConfirm={sendToDelete}
      />
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
          title="Excluir especialidade"
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
