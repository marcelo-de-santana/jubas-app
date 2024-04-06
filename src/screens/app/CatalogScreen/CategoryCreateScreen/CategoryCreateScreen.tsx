import {
  ButtonTwoOptions,
  FormTextInput,
  ModalStatus,
  Screen,
} from '@components';
import {useCategoryCreate} from '@domain';
import {useForm} from '@hooks';
import {CatalogStackProps} from '@routes';
import {schemas} from '@utils';

export function CategoryCreateScreen({
  navigation,
}: Readonly<CatalogStackProps<'CategoryCreateScreen'>>) {
  const {mutate, isPending, isSuccess, isError} = useCategoryCreate();

  const formik = useForm({
    initialValues: {name: ''},
    validationSchema: schemas.categoryRequest,
    onSubmit: values => {
      mutate(values.name);
    },
  });

  return (
    <Screen>
      <ModalStatus
        isSuccess={isSuccess}
        isError={isError}
        successAction={navigation.goBack}
      />
      <FormTextInput
        formik={formik}
        name="name"
        placeholder="Nome da categoria"
      />
      <ButtonTwoOptions
        cancelButtonProps={{loading: isPending, onPress: navigation.goBack}}
        confirmButtonProps={{
          loading: isPending,
          onPress: formik.handleSubmit,
        }}
      />
    </Screen>
  );
}
