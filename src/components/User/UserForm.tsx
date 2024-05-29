import {
  Box,
  ButtonOptionItem,
  ButtonOptions,
  ButtonSuccess,
  FormTextInput,
  ModalStatus,
  Text,
} from '@components';
import {FormikExtractedParams, useVisibility} from '@hooks';
import {mask} from '@utils';
import {useNavigation} from '@react-navigation/native';

type UserFormProps = {
  isError: boolean;
  isSuccess: boolean;
  isPending: boolean;
  formik: FormikExtractedParams;
};

export function UserForm({
  formik,
  isError,
  isPending,
  isSuccess,
}: UserFormProps) {
  const {goBack} = useNavigation();

  return (
    <>
      <ModalStatus
        isSuccess={isSuccess}
        isError={isError}
        successAction={goBack}
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

      <PermissionOptions
        userPermission={formik.values.permission}
        handleChangeText={formik.handleChangeText}
      />

      <ButtonSuccess
        loading={isPending}
        marginTop="s20"
        backgroundColor="primaryContrast"
        title="Salvar"
        textProps={{variant: 'paragraphMedium', color: 'primary'}}
        onPress={formik.handleSubmit}
      />
    </>
  );
}

type ButtonOptionsProps = {
  userPermission?: string;
  handleChangeText: (key: string, value: string) => void;
};

function PermissionOptions({
  userPermission,
  handleChangeText,
}: ButtonOptionsProps) {
  const permissions = ['ADMIN', 'BARBEIRO', 'CLIENTE'];

  const {isVisible, handleVisibility} = useVisibility({initialValue: true});

  const changeOption = (permission: string) => {
    handleChangeText('permission', permission);
    handleVisibility();
  };

  return (
    <ButtonOptions
      isCollapsed={isVisible}
      onPress={handleVisibility}
      title={
        mask.capitalizeFirstLetter(userPermission) ?? 'Selecione uma opção'
      }>
      {permissions.map(permission => {
        const isSelected = permission === userPermission;

        return (
          <ButtonOptionItem
            key={permission}
            isSelected={isSelected}
            title={mask.capitalizeFirstLetter(permission)}
            onPress={() => changeOption(permission)}
          />
        );
      })}
    </ButtonOptions>
  );
}
