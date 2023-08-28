import {theme} from '@styles';
import {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {DarkBlueButton, ModalEmployee, ModalRegisterEmployee, Screen} from '@components';
import {EmployeeList} from './components/EmployeeList';

export function EmployeeScreen() {
  const [modalParams, setModalParams] = useState({
    visible: false,
    data: {
      name: '',
      email: '',
    },
  });

  function openModalRegister() {
    setModalParams(prev => ({
      ...prev,
      visible: true,
    }));
  }

  return (
    <Screen>
      <EmployeeList />

      <DarkBlueButton 
      title='Cadastrar'
      onPress={openModalRegister}
      />
      
      <ModalRegisterEmployee
        modalParams={modalParams}
        setModalParams={setModalParams}
      />
    </Screen>
  );
}
