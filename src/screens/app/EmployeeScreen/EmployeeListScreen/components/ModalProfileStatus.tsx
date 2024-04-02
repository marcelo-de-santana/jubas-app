import {
  ButtonTwoOptions,
  IconCheckBox,
  ModalStatus,
  Screen,
  Text,
} from '@components';
import {EmployeeResponse, profileUseCases} from '@domain';
import {useModalVisibility} from '@hooks';
import {Modal as RNModal} from 'react-native';

export type ModalProfileStatusProps = {
  employee: EmployeeResponse;
};

export function ModalProfileStatus({
  employee,
}: Readonly<ModalProfileStatusProps>) {
  const {id, statusProfile} = employee;
  const {isVisible, closeModal, openModal} = useModalVisibility();
  const {fetch, status, isLoading} = profileUseCases.update();
  const updateProfileStatus = () => {
    fetch({id, statusProfile: !statusProfile});
  };
  return (
    <>
      <IconCheckBox
        label={`Perfil ${statusProfile ? 'ativo' : 'inativo'}`}
        textProps={{color: 'primary'}}
        iconProps={{color: statusProfile ? 'lightGreen' : 'red'}}
        value={statusProfile}
        onPress={openModal}
      />
      <ModalConfirmUpdate
        isVisible={isVisible}
        isLoading={isLoading}
        closeModal={closeModal}
        employee={employee}
        updateProfileStatus={updateProfileStatus}
      />
      <ModalStatus
        status={status}
        errorAction={closeModal}
        successAction={closeModal}
      />
    </>
  );
}

type ModalConfirmUpdateProps = {
  isVisible: boolean;
  isLoading: boolean;
  employee: EmployeeResponse;
  closeModal: () => void;
  updateProfileStatus: () => void;
};

function ModalConfirmUpdate({
  isVisible,
  isLoading,
  employee,
  closeModal,
  updateProfileStatus,
}: Readonly<ModalConfirmUpdateProps>) {
  const {name, statusProfile} = employee;

  return (
    <RNModal
      visible={isVisible}
      animationType="fade"
      onRequestClose={closeModal}>
      <Screen flex={1} justifyContent="center">
        <Text
          variant="paragraphLarge"
          color="primaryContrast"
          marginBottom="s10">
          {statusProfile ? 'Inativar' : 'Ativar'} perfil de {name}?
        </Text>
        <Text variant="paragraphMedium" color="red">
          {statusProfile
            ? 'O funcionário ficará indisponível para novos agendamentos.'
            : 'O funcionário ficará disponível para agendamentos'}
        </Text>
        <ButtonTwoOptions
          cancelButtonProps={{loading: isLoading, onPress: closeModal}}
          confirmButtonProps={{
            loading: isLoading,
            onPress: updateProfileStatus,
          }}
        />
      </Screen>
    </RNModal>
  );
}
