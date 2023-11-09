import {
  BoxIcon,
  ButtonComponent,
  FormTextInput,
  FormTextInputCpf,
  Screen,
  StatusScreen,
} from '@components';
import {useForm} from '@hooks';
import {schemas} from '@utils';
import {Keyboard, Pressable} from 'react-native';
import {ScrollView} from 'react-native';

export function RecoveryPasswordScreen() {
  const formik = useForm({
    initialValues: {
      email: '',
      password: '',
      checkPass: '',
    },
    onSubmit: () => console.log(formik.values),
    validationSchema: schemas.recoveryPass,
  });

  return (
    <Screen>
      <StatusScreen loading={false} status={201} />
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
        <ButtonComponent type="save" text="Solicitar recuperação" />
      </Pressable>
    </Screen>
  );
}
