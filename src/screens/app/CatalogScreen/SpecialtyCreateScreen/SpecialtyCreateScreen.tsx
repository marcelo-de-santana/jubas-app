import {SpecialtyForm} from '@components';
import {useSpecialtyCreate} from '@domain';
import {useForm} from '@hooks';
import {CatalogStackProps} from '@routes';
import {schemas, mask} from '@utils';

export function SpecialtyCreateScreen({
  navigation,
  route,
}: Readonly<CatalogStackProps<'SpecialtyCreateScreen'>>) {
  const {mutate, isError, isPending, isSuccess} = useSpecialtyCreate();

  const formik = useForm({
    initialValues: {name: '', price: '', timeDuration: '00:20'},
    validationSchema: schemas.specialtyRequest,
    onSubmit: () => createSpecialty(),
  });

  const createSpecialty = () => {
    mutate({
      categoryId: route.params.category.id,
      name: formik.values.name,
      price: mask.formatToFloat(mask.cleanCurrency(formik.values.price)),
      timeDuration: formik.values.timeDuration,
    });
    navigation.goBack();
  };

  return (
    <SpecialtyForm
      isError={isError}
      isPending={isPending}
      isSuccess={isSuccess}
      formik={formik}
      categoryName={route.params.category.name}
    />
  );
}
