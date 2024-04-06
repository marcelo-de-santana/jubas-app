import {
  IconBox,
  FormTextInput,
  FormTextInputCpf,
  Screen,
  ModalStatus,
  AlertMessageType,
  ButtonSuccess,
} from '@components';
import {useProfileRecoveryPassword} from '@domain';
import {useForm} from '@hooks';
import {AuthStackProps} from '@routes';
import {mask, schemas} from '@utils';
import {ScrollView} from 'react-native';

export function RecoveryPasswordScreen({
  navigation,
}: Readonly<AuthStackProps<'RecoveryPasswordScreen'>>) {
  const {isPending, isError, isSuccess, mutate} = useProfileRecoveryPassword();
  const formik = useForm({
    validationSchema: schemas.recoveryPass,
    initialValues: {
      email: '',
      cpf: '',
      password: '',
      checkPass: '',
    },
    onSubmit: () =>
      mutate({
        email: formik.values.email,
        password: formik.values.password,
        cpf: mask.removeCpf(formik.values.cpf),
      }),
  });

  return (
    <Screen>
      <ModalStatus
        isError={isError}
        isSuccess={isSuccess}
        customMessage={$customMessage}
        successAction={navigation.goBack}
        errorAction={navigation.goBack}
      />
      <ScrollView>
        <IconBox name="LockIcon" />
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
        <ButtonSuccess
          loading={isPending}
          backgroundColor="primaryContrast"
          style={{marginTop: 20}}
          title="Enviar solicitação"
          textProps={{color: 'primary', variant: 'paragraphLarge'}}
          onPress={formik.handleSubmit}
        />
      </ScrollView>
    </Screen>
  );
}

const $customMessage: AlertMessageType = {
  success: 'Senha alterada com sucesso.',
  error: 'Usuário não localizado.',
};
