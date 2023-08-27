import {LoadingScreen, Screen} from '@components';
import {MinimalUserResponseDTO, getAllUsersRepo} from '@repositories';
import {useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {ModalScreen} from './components/ModalScreen';
import {UserList} from './components/UserList';
import {Form} from './components/Form';
import {theme} from '@styles';

export function UsersScreen() {
  const [createModalIsVisible, setCreateModalIsVisible] = useState(false);
  const [alterModalIsVisible, setAlterModalIsVisible] = useState(false);

  const [modalData, setModalData] = useState<MinimalUserResponseDTO>({
    id: '',
    email: '',
    password: '',
    userPermission: {
      id: 3,
      type: '',
    },
  });

  function handleCreateModalVisibility() {
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
      <>
        <TouchableOpacity
          style={theme.blueButton}
          onPress={handleCreateModalVisibility}>
          <Text style={theme.textButton}>Cadastrar</Text>
        </TouchableOpacity>
      </>

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
