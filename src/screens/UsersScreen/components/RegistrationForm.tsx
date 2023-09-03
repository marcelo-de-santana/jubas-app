import {BlueButton, ModalForm, ModalScreen, SwitchButtons} from '@components';
import {useState} from 'react';
import {theme} from '@styles';
import {saveUserRepo} from '@repositories';

export function RegistrationForm() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [userPermission, setUserPermission] = useState(3);

  function handleVisibility() {
    setModalIsVisible(!modalIsVisible);
  }

  function handleFormData(key: string, value: string) {
    setFormData(prev => ({...prev, [key]: value}));
  }

  function changeSwitchValue(value: number | string) {
    setUserPermission(Number(value));
  }

  async function sendForm() {
    await saveUserRepo(formData.email, formData.password, userPermission);
  }

  return (
    <>
      <BlueButton title="Cadastrar" onPress={handleVisibility} />
      <ModalScreen
        transparent={true}
        visible={modalIsVisible}
        handleVisibility={handleVisibility}>
        <ModalForm
          formData={formData}
          handleFormData={handleFormData}
          inputOptions={[
            {
              label: 'email',
              inputProps: {placeholder: 'E-mail', maxLength: 50},
            },
            {
              label: 'password',
              inputProps: {
                maxLength: 16,
                placeholder: 'Senha',
                secureTextEntry: true,
              },
            },
          ]}>
          <SwitchButtons
            style={theme.boxFlexRow}
            switchOptions={[
              {title: 'ADMIN', index: 1},
              {title: 'BARBEIRO', index: 2},
              {title: 'CLIENTE', index: 3},
            ]}
            switchValue={userPermission}
            changeSwitchValue={changeSwitchValue}
          />
          <BlueButton title="Confirmar" onPress={sendForm} />
        </ModalForm>
      </ModalScreen>
    </>
  );
}
