import {DarkBlueButton, Screen} from '@components';
import {MinimalUserResponseDTO} from '@repositories';
import {useState} from 'react';
import {ModalScreen} from '@components';
import {UserList} from './components/UserList';
import {Form} from './components/Form';

export function UsersScreen() {
  const [createModalIsVisible, setCreateModalIsVisible] = useState(false);
  const [alterModalIsVisible, setAlterModalIsVisible] = useState(false);

  const [modalData, setModalData] = useState<MinimalUserResponseDTO>({
    email: '',
    password: '',
    userPermission: {
      id: 3,
    },
  });

  function handleCreateModalVisibility() {
    setModalData({
      email: '',
      password: '',
      userPermission: {
        id: 3,
      },
    });
    setCreateModalIsVisible(!createModalIsVisible);
  }

  function handleAlterModalVisibility() {
    setAlterModalIsVisible(!alterModalIsVisible);
  }

  function handleFormData(key: string, value: string) {
    setModalData(prev => ({...prev, [key]: value}));
  }

  function openModalAlterUser(userData: MinimalUserResponseDTO) {
    setModalData({...userData});
    handleAlterModalVisibility();
  }

  return (
    <Screen>
      <UserList openModalAlterUser={openModalAlterUser} />
      <DarkBlueButton onPress={handleCreateModalVisibility} title="Cadastrar" />

      <ModalScreen
        handleVisibility={handleAlterModalVisibility}
        visible={alterModalIsVisible}>
        <Form formData={modalData} handleFormData={handleFormData} />
      </ModalScreen>

      <ModalScreen
        handleVisibility={handleCreateModalVisibility}
        visible={createModalIsVisible}>
        <Form formData={modalData} handleFormData={handleFormData} />
      </ModalScreen>
    </Screen>
  );
}
