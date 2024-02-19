import {
  IconBox,
  Button,
  FormTextInput,
  FormTextInputCpf,
  Screen,
  ModalStatus,
} from '@components';
import {profileUseCases} from '@domain';
import {useForm, useNavigation} from '@hooks';
import {AlertStatusType} from '@styles';
import {mask, schemas} from '@utils';
import {ScrollView} from 'react-native';

export function RecoveryPasswordScreen() {
  const $customStatus: AlertStatusType = {
    204: {type: 'success', message: 'Senha alterada com sucesso.'},
    404: {type: 'danger', message: 'Usuário não localizado.'},
  };

  const {isLoading, status, fetch} = profileUseCases.recoveryPassword();
  const {goBack} = useNavigation();
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
        successAction={goBack}
        errorAction={goBack}
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
        <Button
          type="inline"
          loading={isLoading}
          backgroundColor="steelBlue"
          style={{marginTop: 20}}
          title="Enviar solicitação"
          textProps={{color: 'white', size: 'L'}}
          onPress={formik.handleSubmit}
        />
      </ScrollView>
    </Screen>
  );
}
