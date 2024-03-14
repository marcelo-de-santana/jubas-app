import {
  ButtonTwoOptions,
  FormTextInput,
  ModalStatus,
  Screen,
} from '@components';
import {categoryUseCases} from '@domain';
import {useForm} from '@hooks';
import {BusinessManagementStackProps} from '@routes';
import {schemas} from '@utils';
//TODO: TRANSFORMAR AGREGAR A TELA DE UPDATE COM A DE CREATE
export function CategoryCreateScreen({
  navigation,
}: Readonly<BusinessManagementStackProps<'CategoryCreateScreen'>>) {
  const {fetch, status, isLoading} = categoryUseCases.create();

  const formik = useForm({
    initialValues: {name: ''},
    validationSchema: schemas.categoryRequest,
    onSubmit: () => {
      fetch(formik.values.name);
    },
  });

  return (
    <Screen>
      <ModalStatus status={status} successAction={navigation.goBack} />
      <FormTextInput
        formik={formik}
        name="name"
        placeholder="Nome da categoria"
      />
      <ButtonTwoOptions
        cancelButtonProps={{loading: isLoading, onPress: navigation.goBack}}
        confirmButtonProps={{
          loading: isLoading,
          onPress: formik.handleSubmit,
        }}
      />
    </Screen>
  );
}
