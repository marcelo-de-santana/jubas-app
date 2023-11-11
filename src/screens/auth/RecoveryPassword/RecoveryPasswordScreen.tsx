import {
  BoxIcon,
  Button,
  FormTextInput,
  FormTextInputCpf,
  Screen,
  StatusScreen,
} from '@components';
import {useProfileRecoveryPassword} from '@domain';
import {useForm} from '@hooks';
import {schemas, useNavigation} from '@utils';
import {Keyboard, Pressable} from 'react-native';
import {ScrollView} from 'react-native';

export function RecoveryPasswordScreen() {
  const {data, isLoading, status, recoveryPass} = useProfileRecoveryPassword();
  const {navigateBack} = useNavigation();
  const formik = useForm({
    validationSchema: schemas.recoveryPass,
    initialValues: {
      email: '',
      cpf: '',
      password: '',
      checkPass: '',
    },
    onSubmit: () =>
      recoveryPass({
        email: formik.values.email,
        password: formik.values.password,
        cpf: formik.values.cpf,
      }),
  });

  return (
    <Screen>
      <StatusScreen
        loading={isLoading}
        status={status}
        errorAction={navigateBack}
      />
      <Pressable style={{flex: 1}} onPress={Keyboard.dismiss}>
        <ScrollView>
          <BoxIcon name="LockIcon" />
          <FormTextInput
            formik={formik}
            name="email"
            label="Digite seu e-mail"
            keyboardType="email-address"
            placeholder="joao@exemplo.com"
            maxLength={50}
          />
          <FormTextInputCpf formik={formik} name="cpf" />
          <FormTextInput
            formik={formik}
            name="password"
            label="Digite a nova senha"
            placeholder="********"
            maxLength={20}
            secureTextEntry
          />
          <FormTextInput
            formik={formik}
            name="checkPass"
            label="Confirmar nova senha"
            placeholder="********"
            maxLength={20}
            secureTextEntry
          />
        </ScrollView>
        <Button
          type="inline"
          backgroundColor="steelBlue"
          text="Enviar solicitação"
          textProps={{color: 'white', size: 'L'}}
          onPress={formik.handleSubmit}
        />
      </Pressable>
    </Screen>
  );
}
