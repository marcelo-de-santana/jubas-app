import {ButtonComponent, Screen, Text, TextInput} from '@components';
import {useFormik} from 'formik';
import {Keyboard, Pressable, ScrollView} from 'react-native';
import {createUserFormSchema} from '@utils';
import {AuthStackProps} from '@routes';
import {createUser} from '@domain';

export function SignUpScreen({navigation}: AuthStackProps) {
  const {handleChange, handleSubmit, values, errors} = useFormik({
    validationSchema: createUserFormSchema,
    initialValues: {
      email: '',
      password: '',
      checkPass: '',
    },
    onSubmit: sendUserForm,
  });

  async function sendUserForm() {
    const userCreated = await createUser({
      email: values.email,
      password: values.password,
      userPermissionId: 3,
    });
    if (userCreated) {
      navigation.goBack();
    }
  }

  function handleTextInput(key: string, value: string) {
    handleChange({target: {name: [key], value: value}});
  }

  return (
    <Screen>
      <ScrollView>
        <Pressable onPress={Keyboard.dismiss}>
          <Text align="left">E-mail</Text>
          <TextInput
            placeholder="jubasdeleao@exemplo.com"
            maxLength={50}
            value={values.email}
            onChangeText={text => handleTextInput('email', text)}
          />
          <Text align="justify" color="red" size="XS">
            {errors.email && errors.email}
          </Text>

          <Text align="left">Senha</Text>
          <TextInput
            placeholder="********"
            maxLength={20}
            secureTextEntry={true}
            onChangeText={handleChange('password')}
          />
          <Text align="justify" color="red" size="XS">
            {errors.password && errors.password}
          </Text>

          <Text align="left">Confirmar Senha</Text>
          <TextInput
            placeholder="********"
            maxLength={20}
            secureTextEntry={true}
            onChangeText={handleChange('checkPass')}
          />
          <Text align="justify" color="red" size="XS">
            {errors.checkPass && errors.checkPass}
          </Text>
          <ButtonComponent
            type="save"
            text="Cadastrar-me"
            onPress={() => handleSubmit()}
          />
        </Pressable>
      </ScrollView>
    </Screen>
  );
}
