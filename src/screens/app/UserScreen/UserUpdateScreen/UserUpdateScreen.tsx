import {
  Box,
  ButtonSuccess,
  FormTextInput,
  ModalStatus,
  Screen,
  Text,
} from '@components';
import {useUserUpdate} from '@domain';
import {useForm} from '@hooks';
import {UserStackProps} from '@routes';
import {schemas} from '@utils';
import {ButtonOptions} from './components/ButtonOptions';

export function UserUpdateScreen({
  navigation,
  route,
}: Readonly<UserStackProps<'UserUpdateScreen'>>) {
  const {user} = route.params;
  const {mutate, isPending, isError, isSuccess} = useUserUpdate();

  const formik = useForm({
    validationSchema: schemas.userUpdate,
    initialValues: {
      id: user.id,
      email: user.email,
      password: '',
      permission: user.permission,
    },
    onSubmit: values => {
      mutate({
        userId: values.id,
        email: values.email,
        password: values.password,
        permission: values.permission,
      });
    },
  });

  return (
    <Screen flex={1}>
      <ModalStatus
        isSuccess={isSuccess}
        isError={isError}
        successAction={navigation.goBack}
      />
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
      <Box p="s4">
        <Text
          variant="paragraphSmall"
          textAlign="justify"
          color="primaryContrast">
          Nível de permissão
        </Text>
      </Box>

      <ButtonOptions
        userPermission={formik.values.permission}
        handleChangeText={formik.handleChangeText}
      />

      <ButtonSuccess
        loading={isPending}
        style={{position: 'absolute', bottom: 10, left: 20, right: 20}}
        backgroundColor="steelBlue"
        title="Salvar"
        textProps={{color: 'white'}}
        onPress={formik.handleSubmit}
      />
    </Screen>
  );
}
