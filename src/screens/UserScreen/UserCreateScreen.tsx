import {
  Button,
  FormTextInput,
  Screen,
  StatusScreen,
  Text,
  ToggleableButton,
} from '@components';
import {themeRegistry} from '@styles';
import {View} from 'react-native';
import {useForm} from '@hooks';
import {useUserCreate} from '@domain';
import {schemas, useNavigation} from '@utils';

export function UserCreateScreen() {
  const {navigateBack} = useNavigation();
  const {fetchData, isLoading, status} = useUserCreate();

  const formik = useForm({
    validationSchema: schemas.userCreate,
    initialValues: {
      email: '',
      password: '',
      userPermission: 3,
    },
    onSubmit: () => {
      fetchData({
        email: formik.values.email,
        password: formik.values.password,
        permissionId: formik.values.userPermission,
      });
    },
  });

  return (
    <Screen>
      <StatusScreen status={status} successAction={navigateBack} />
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
          value={formik.values.userPermission === 1}
          onPress={() => formik.handleChangeText('userPermission', 1)}
        />
        <ToggleableButton
          title="Barbeiro"
          value={formik.values.userPermission === 2}
          onPress={() => formik.handleChangeText('userPermission', 2)}
        />
        <ToggleableButton
          title="Cliente"
          value={formik.values.userPermission === 3}
          onPress={() => formik.handleChangeText('userPermission', 3)}
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
