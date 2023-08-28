import {DarkBlueButton, DecisionAlert} from '@components';
import {MinimalUserResponseDTO, saveUserRepo} from '@repositories';
import {modal, placeHolderColorTextInput} from '@styles';
import {useState} from 'react';
import {Switch, Text, TextInput, View} from 'react-native';

export type ModalUserProps = {
  children?: React.JSX.Element;
  formData: MinimalUserResponseDTO;
  handleFormData: (key: string, value: string) => void;
  handleVisibility?: () => void;
};

export function Form({formData, handleFormData}: ModalUserProps) {
  const [userPermissionValue, setUserPermissionValue] = useState(
    formData.userPermission.id,
  );

  function confirmSend() {
    DecisionAlert({onPress: sendForm});

    async function sendForm() {
      await saveUserRepo(
        formData.email,
        formData.password,
        userPermissionValue,
      );
    }
  }

  return (
    <View style={modal.boxItems}>
      <View style={modal.boxForm}>
        <TextInput
          style={modal.input}
          autoCapitalize="none"
          placeholder="Digite seu e-mail"
          keyboardType="email-address"
          placeholderTextColor={placeHolderColorTextInput}
          maxLength={50}
          value={formData.email}
          onChangeText={text => handleFormData('email', text)}
        />

        <TextInput
          style={modal.input}
          autoCapitalize="none"
          placeholder="********"
          keyboardType="default"
          placeholderTextColor={placeHolderColorTextInput}
          maxLength={16}
          secureTextEntry={true}
          value={formData.password}
          onChangeText={text => handleFormData('password', text)}
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

        <DarkBlueButton onPress={confirmSend} title="Salvar" />
      </View>
    </View>
  );
}
