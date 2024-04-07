import {ButtonSuccess, FormTextInput, ModalStatus, Screen} from '@components';
import {FormikExtractedParams} from '@hooks';
import {useNavigation} from '@react-navigation/native';

type CategoryFormProps = {
  isError: boolean;
  isSuccess: boolean;
  isPending: boolean;
  formik: FormikExtractedParams;
};

export function CategoryForm({
  formik,
  isError,
  isSuccess,
  isPending,
}: CategoryFormProps) {
  const {goBack} = useNavigation();

  return (
    <Screen flex={1}>
      <ModalStatus
        isError={isError}
        isSuccess={isSuccess}
        successAction={goBack}
      />
      <FormTextInput
        formik={formik}
        name="name"
        placeholder="Nome da categoria"
      />
      <ButtonSuccess
        loading={isPending}
        marginTop="s20"
        backgroundColor="primaryContrast"
        textProps={{variant: 'paragraphMedium', color: 'primary'}}
        onPress={formik.handleSubmit}
        title="Salvar"
      />
    </Screen>
  );
}
