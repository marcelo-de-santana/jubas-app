import {theme} from '@styles';
import {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ModalEmployee, ModalRegisterEmployee} from '@components';
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
    <View style={theme.container}>
      <ModalRegisterEmployee
        modalParams={modalParams}
        setModalParams={setModalParams}
      />
      <View style={{flex: 1}}>
        <Text style={theme.textHeaderMiddle}>Barbeiros</Text>
        <EmployeeList />
      </View>

      <TouchableOpacity
        style={theme.blueButton}
        onPress={() => openModalRegister()}>
        <Text style={theme.textButton}>Cadastrar barbeiro</Text>
      </TouchableOpacity>
    </View>
  );
}
