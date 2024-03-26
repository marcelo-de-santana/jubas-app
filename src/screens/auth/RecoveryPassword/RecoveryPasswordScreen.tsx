import {
  IconBox,
  Button,
  FormTextInput,
  FormTextInputCpf,
  Screen,
  ModalStatus,
  AlertStatusType,
  ButtonSuccess,
} from '@components';
import {profileUseCases} from '@domain';
import {useForm} from '@hooks';
import {AuthStackProps} from '@routes';
import {mask, schemas} from '@utils';
import {ScrollView} from 'react-native';

export function RecoveryPasswordScreen({
  navigation,
}: Readonly<AuthStackProps<'RecoveryPasswordScreen'>>) {
  const $customStatus: AlertStatusType = {
    204: ['SUCCESS', 'Senha alterada com sucesso.'],
    404: ['DANGER', 'Usuário não localizado.'],
  };

  const {isLoading, status, fetch} = profileUseCases.recoveryPassword();
  const formik = useForm({
    validationSchema: schemas.recoveryPass,
    initialValues: {
      email: '',
      cpf: '',
      password: '',
      checkPass: '',
    },
    onSubmit: () =>
      fetch({
        email: formik.values.email,
        password: formik.values.password,
        cpf: mask.removeCpf(formik.values.cpf),
      }),
  });

  return (
    <Screen>
      <ModalStatus
        status={status}
        customStatus={$customStatus}
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
          loading={isLoading}
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
