import {
  Button,
  FormTextInput,
  Screen,
  StatusScreen,
  BoxIcon,
} from '@components';
import {Keyboard, Pressable, ScrollView} from 'react-native';
import {schemas, useNavigation} from '@utils';
import {AuthStackProps} from '@routes';
import {useUserCreate} from '@domain';
import {AlertStatusType} from '@styles';
import {useForm} from '@hooks';

export function SignUpScreen({navigation}: AuthStackProps) {
  const $customStatus: AlertStatusType = {
    201: {type: 'success', message: 'Usuário criado com sucesso.'},
    401: {type: 'danger', message: 'Você já possui cadastrado.'},
  };

  const {fetchData, isLoading, status} = useUserCreate();
  const {navigateBack} = useNavigation();
  const formik = useForm({
    validationSchema: schemas.signUp,
    initialValues: {
      email: '',
      password: '',
      checkPass: '',
    },
    onSubmit: values =>
      fetchData({
        email: values.email,
        password: values.password,
        permissionId: 3,
      }),
  });

  return (
    <Screen>
      <StatusScreen
        loading={isLoading}
        status={status}
        customStatus={$customStatus}
        successAction={navigateBack}
      />
      <Pressable style={{flex: 1}} onPress={Keyboard.dismiss}>
        <ScrollView>
          <BoxIcon name="PersonIcon" />
          <FormTextInput
            formik={formik}
            name="email"
            label="E-mail"
            keyboardType="email-address"
            placeholder="jubasdeleao@exemplo.com"
            maxLength={50}
          />
          <FormTextInput
            formik={formik}
            name="password"
            label="Senha"
            placeholder="********"
            maxLength={20}
            secureTextEntry
          />
          <FormTextInput
            formik={formik}
            name="checkPass"
            label="Confirmar senha"
            placeholder="********"
            maxLength={20}
            secureTextEntry
          />
        </ScrollView>
      </Pressable>
      <Button
        type="inline"
        backgroundColor="steelBlue"
        text="Cadastrar"
        textProps={{color: 'white', size: 'L'}}
        onPress={formik.handleSubmit}
      />
    </Screen>
  );
}
