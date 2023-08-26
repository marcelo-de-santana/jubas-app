import {createNewUserRepo} from '@repositories';
import {modal, placeHolderColorTextInput} from '@styles';
import {useState} from 'react';
import {
  Alert,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export function FormModal() {
  const [modalData, setModalData] = useState({
    data: {
      email: '',
      password: '',
    },
  });
  const [userPermissionValue, setUserPermissionValue] = useState(3);
  function handleTextInput(key: string, value: string) {
    setModalData(prev => ({
      data: {
        ...prev.data,
        [key]: value,
      },
    }));
  }

  function confirmSend() {
    Alert.alert('', 'Deseja prosseguir?', [
      {
        style: 'cancel',
        text: 'CANCELAR',
      },
      {
        text: 'SIM',
        onPress: sendForm,
      },
    ]);

    async function sendForm() {
      const {email, password} = modalData.data;
      const response = await createNewUserRepo(
        email,
        password,
        userPermissionValue,
      );
      Alert.alert('', `${response} criado com sucesso!`);
    }
  }

  return (
    <>
      <TextInput
        style={modal.input}
        autoCapitalize="none"
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
        placeholderTextColor={placeHolderColorTextInput}
        maxLength={50}
        onChangeText={text => handleTextInput('email', text)}
      />

      <TextInput
        style={modal.input}
        autoCapitalize="none"
        placeholder="********"
        keyboardType="default"
        placeholderTextColor={placeHolderColorTextInput}
        maxLength={16}
        secureTextEntry={true}
        onChangeText={text => handleTextInput('password', text)}
      />

      <View style={modal.switchBoxBetween}>
        <Text style={modal.darkBlueTextSmall}>ADMIN</Text>
        <Switch
          value={userPermissionValue === 1}
          onChange={() => setUserPermissionValue(1)}
        />

        <Text style={modal.darkBlueTextSmall}>BARBEIRO</Text>
        <Switch
          value={userPermissionValue === 2}
          onChange={() => setUserPermissionValue(2)}
        />

        <Text style={modal.darkBlueTextSmall}>CLIENTE</Text>
        <Switch
          value={userPermissionValue === 3}
          onChange={() => setUserPermissionValue(3)}
        />
      </View>

      <TouchableOpacity style={modal.blueButton} onPress={confirmSend}>
        <Text style={modal.whiteTextButton}>Salvar</Text>
      </TouchableOpacity>
    </>
  );
}
