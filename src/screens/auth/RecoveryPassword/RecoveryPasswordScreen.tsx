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
import {AlertStatusType} from '@styles';
import {mask, schemas, useNavigation} from '@utils';
import {ScrollView} from 'react-native';

export function RecoveryPasswordScreen() {
  const $customStatus: AlertStatusType = {
    200: {type: 'danger', message: 'Senha alterada com sucesso.'},
    404: {type: 'danger', message: 'Usuário não localizado.'},
  };

  const {isLoading, status, recoveryPass} = useProfileRecoveryPassword();
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
        cpf: mask.removeCpf(formik.values.cpf),
      }),
  });

  return (
    <Screen>
      <StatusScreen
        status={status}
        customStatus={$customStatus}
        successAction={navigateBack}
        errorAction={navigateBack}
      />
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
