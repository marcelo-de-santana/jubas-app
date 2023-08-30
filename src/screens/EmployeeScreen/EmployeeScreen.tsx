import {useState} from 'react';
import {
  DarkBlueButton,
  ModalForm,
  ModalFormProps,
  ModalScreen,
  Screen,
} from '@components';
import {EmployeeList} from './components/EmployeeList';
import {createBarberRepo} from '@repositories';
import {UserList} from './components/UserList';
import {CreateEmployeePage} from './components/CreateEmployeePage';

export function EmployeeScreen() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const [modalData, setModalData] = useState({
    name: '',
    email: '',
    user: {id: ''},
  });

  function handleFormData(key: string, value: string) {
    setModalData(prev => ({...prev, [key]: value}));
  }

  function openModalForUpdate() {
    setModalData(prev => ({...prev}));
    handleVisibility();
  }

  function handleVisibility() {
    setModalIsVisible(!modalIsVisible);
  }

  async function registerBarber() {
    await createBarberRepo({
      name: modalData.name,
      user: {
        id: modalData.user.id,
      },
    });
    handleVisibility();
  }
  return (
    <Screen>
      <EmployeeList />

      <DarkBlueButton title="Cadastrar" onPress={handleVisibility} />

      <ModalScreen
        transparent={true}
        visible={modalIsVisible}
        handleVisibility={handleVisibility}>
        <CreateEmployeePage
          formData={modalData}
          handleFormData={handleFormData}
          handleVisibility={handleVisibility}
        />
      </ModalScreen>
    </Screen>
  );
}
