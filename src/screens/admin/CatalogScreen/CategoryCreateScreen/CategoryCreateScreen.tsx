import {CategoryForm} from '@components';
import {useCategoryCreate} from '@domain';
import {useForm} from '@hooks';
import {CatalogStackProps} from '@routes';
import {schemas} from '@utils';

export function CategoryCreateScreen({
  navigation,
}: CatalogStackProps<'CategoryCreateScreen'>) {
  const {mutate, isPending, isSuccess, isError} = useCategoryCreate();

  const formik = useForm({
    initialValues: {name: ''},
    validationSchema: schemas.categoryRequest,
    onSubmit: values => {
      mutate(values.name);
    },
  });

  return (
    <CategoryForm
      formik={formik}
      isError={isError}
      isPending={isPending}
      isSuccess={isSuccess}
    />
  );
}
