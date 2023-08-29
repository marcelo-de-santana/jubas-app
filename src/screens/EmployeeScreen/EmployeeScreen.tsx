import {useState} from 'react';
import {DarkBlueButton, ModalForm, ModalScreen, Screen} from '@components';
import {EmployeeList} from './components/EmployeeList';
import {createBarberRepo} from '@repositories';

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

      <ModalScreen visible={modalIsVisible} handleVisibility={handleVisibility}>
        <ModalForm
          formData={modalData}
          handleFormData={handleFormData}
          inputOptions={[
            {label: 'name', inputProps: {placeholder: 'Digite o nome'}},
            {label: 'email', inputProps: {placeholder: 'Digite o e-mail'}},
          ]}>
          <DarkBlueButton title="Salvar" onPress={handleVisibility} />
        </ModalForm>
      </ModalScreen>
    </Screen>
  );
}
