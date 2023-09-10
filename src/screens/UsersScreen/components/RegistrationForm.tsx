import {
  BlueButton,
  DecisionAlert,
  ModalForm,
  ModalScreen,
  SwitchButtons,
} from '@components';
import {useState} from 'react';
import {theme} from '@styles';
import {saveUser} from '@repositories';

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

  function confirmSend() {
    DecisionAlert({onPress: sendForm});

    async function sendForm() {
      await saveUser(formData.email, formData.password, userPermission);
    }
  }

  return (
    <>
      <BlueButton title="Cadastrar" onPress={handleVisibility} />
      <ModalScreen visible={modalIsVisible} handleVisibility={handleVisibility}>
        <ModalForm
          inputProps={[
            {
              value: formData.email,
              onChangeText: text => handleFormData('email', text),
              placeholder: 'E-mail',
              maxLength: 50,
            },
            {
              value: formData.password,
              onChangeText: text => handleFormData('password', text),
              placeholder: 'Senha',
              maxLength: 16,
              secureTextEntry: true,
            },
          ]}>
          <SwitchButtons
            style={theme.boxFlexRow}
            switchOptions={[
              {
                title: 'ADMIN',
                switchProps: {
                  onValueChange: () => changeSwitchValue(1),
                  value: userPermission === 1,
                },
              },
              {
                title: 'BARBEIRO',
                switchProps: {
                  onValueChange: () => changeSwitchValue(2),
                  value: userPermission === 2,
                },
              },
              {
                title: 'CLIENTE',
                switchProps: {
                  onValueChange: () => changeSwitchValue(3),
                  value: userPermission === 3,
                },
              },
            ]}
          />
          <BlueButton title="Confirmar" onPress={confirmSend} />
        </ModalForm>
      </ModalScreen>
    </>
  );
}
