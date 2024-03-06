import {
  Button,
  FormTextInput,
  Screen,
  StatusScreen,
  Text,
  ToggleableButton,
} from '@components';
import {useApi, useForm} from '@hooks';
import {UserStackProps} from '@routes';
import {themeRegistry} from '@styles';
import {schemas} from '@utils';
import {View} from 'react-native';

export function UserUpdateScreen({
  route,
}: Readonly<UserStackProps<'UserUpdateScreen'>>) {
  const {fetch, isLoading, status} = useApi.user.update();
  const {user} = route.params;

  const formik = useForm({
    validationSchema: schemas.userUpdate,
    initialValues: {
      id: user.id,
      email: user.email,
      password: '',
      permission: user.permission.id,
    },
    onSubmit: () => {
      fetch({
        userId: formik.values.id,
        email: formik.values.email,
        password: formik.values.password,
        permissionId: formik.values.permission,
      });
    },
  });

  return (
    <Screen>
      <StatusScreen status={status} successAction={navigation.goBack} />
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

      <Text align="justify" size="S" style={{margin: 5}}>
        Nível de permissão
      </Text>

      <View style={themeRegistry['boxFlexRow']}>
        <ToggleableButton
          title="Admin"
          value={formik.values.permission === 1}
          onPress={() => formik.handleChangeText('permission', 1)}
        />
        <ToggleableButton
          title="Barbeiro"
          value={formik.values.permission === 2}
          onPress={() => formik.handleChangeText('permission', 2)}
        />
        <ToggleableButton
          title="Cliente"
          value={formik.values.permission === 3}
          onPress={() => formik.handleChangeText('permission', 3)}
        />
      </View>

      <View style={{marginTop: 20}}>
        <Button
          type="inline"
          loading={isLoading}
          backgroundColor="steelBlue"
          title="Salvar"
          textProps={{color: 'white', size: 'L'}}
          onPress={formik.handleSubmit}
        />
      </View>
    </Screen>
  );
}
