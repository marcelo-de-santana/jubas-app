import {Screen, TextAlertError} from '@components';
import {placeHolderColorTextInput, theme} from '@styles';
import {useFormik} from 'formik';
import {
  Alert,
  Keyboard,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {createUserFormSchema} from '@utils';
import {createUserClient} from '@repositories';
import {PropsNativeStack} from '@routes';

export function SignUpScreen({navigation}: PropsNativeStack) {
  const {handleChange, handleSubmit, values, errors} = useFormik({
    validationSchema: createUserFormSchema,
    initialValues: {
      email: '',
      password: '',
      checkPass: '',
    },
    onSubmit: () => sendUserForm(),
  });

  async function sendUserForm() {
    Alert.alert('', await createUserClient(values));
    navigation.goBack();
  }

  function handleTextInput(key: string, value: string) {
    handleChange({target: {name: [key], value: value}});
  }

  return (
    <Screen>
      <View style={{flex: 1}}>
        <Pressable style={theme.horizontalMargins} onPress={Keyboard.dismiss}>
          <Text style={theme.label}>E-mail</Text>
          <TextInput
            style={theme.input}
            keyboardType="email-address"
            placeholder="jubasdeleao@exemplo.com"
            placeholderTextColor={placeHolderColorTextInput}
            maxLength={50}
            value={values.email}
            onChangeText={text => handleTextInput('email', text)}
          />
          {errors.email && <TextAlertError errorMessage={errors.email} />}

          <Text style={theme.label}>Senha</Text>
          <TextInput
            style={theme.input}
            keyboardType="default"
            placeholder="********"
            placeholderTextColor={placeHolderColorTextInput}
            maxLength={20}
            secureTextEntry={true}
            onChangeText={handleChange('password')}
          />
          {errors.password && <TextAlertError errorMessage={errors.password} />}

          <Text style={theme.label}>Confirmar Senha</Text>
          <TextInput
            style={theme.input}
            keyboardType="default"
            placeholder="********"
            placeholderTextColor={placeHolderColorTextInput}
            maxLength={20}
            secureTextEntry={true}
            onChangeText={handleChange('checkPass')}
          />
          {errors.checkPass && (
            <TextAlertError errorMessage={errors.checkPass} />
          )}
        </Pressable>
      </View>
      <View style={{marginTop: 30}}>
        <TouchableOpacity style={theme.blueButton} onPress={() => handleSubmit()}>
          <Text style={theme.textButton}>Cadastrar-me</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}
