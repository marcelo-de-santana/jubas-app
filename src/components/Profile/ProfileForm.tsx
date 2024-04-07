import {FormikExtractedParams} from '@hooks';
import {ModalStatus} from '../Modal';
import {FormTextInputCpf, FormTextInputName} from '../Forms';
import {BoxItem} from '../Box';
import {ButtonSuccess} from '../Buttons';
import {useNavigation} from '@react-navigation/native';

type ProfileFormProps = {
  isError: boolean;
  isSuccess: boolean;
  isPending: boolean;
  formik: FormikExtractedParams;
};

export function ProfileForm({
  isError,
  isSuccess,
  isPending,
  formik,
}: ProfileFormProps) {
  const {goBack} = useNavigation();

  const popTwoScreens = () => {
    goBack();
    goBack();
  };

  return (
    <>
      <ModalStatus
        isError={isError}
        isSuccess={isSuccess}
        successAction={popTwoScreens}
      />
      <FormTextInputName formik={formik} name="name" label="Nome" />
      <FormTextInputCpf formik={formik} name="cpf" label="CPF" />
      <BoxItem p="s4" textProps={{textAlign: 'justify'}} label="Status" />
      <ButtonSuccess
        borderRadius="s6"
        backgroundColor="primary"
        textProps={{
          variant: 'paragraphMedium',
          color: 'secondary',
        }}
        onPress={() => formik.handleChangeBoolean('statusProfile')}
        title={formik.values.statusProfile === true ? 'Ativo' : 'Inativo'}
      />
      <ButtonSuccess
        loading={isPending}
        backgroundColor="primaryContrast"
        marginTop="s20"
        textProps={{variant: 'paragraphMedium', color: 'primary'}}
        onPress={formik.handleSubmit}
        title="Salvar"
      />
    </>
  );
}
