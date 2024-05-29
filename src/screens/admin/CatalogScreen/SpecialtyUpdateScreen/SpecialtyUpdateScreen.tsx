import {IconNavigation, SpecialtyForm} from '@components';
import {useSpecialtyUpdate} from '@domain';
import {useForm} from '@hooks';
import {CatalogStackProps} from '@routes';
import {mask, schemas} from '@utils';
import {useLayoutEffect} from 'react';

export function SpecialtyUpdateScreen({
  navigation,
  route,
}: Readonly<CatalogStackProps<'SpecialtyUpdateScreen'>>) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconNavigation
          name="TrashIcon"
          size={25}
          routeName="SpecialtyDeleteScreen"
          params={route.params}
        />
      ),
    });
  }, []);

  const {mutate, isError, isSuccess, isPending} = useSpecialtyUpdate();
  const {category, specialty} = route.params;

  const formik = useForm({
    initialValues: {
      name: specialty.name,
      price: String(specialty.price),
      timeDuration: specialty.timeDuration,
    },
    validationSchema: schemas.specialtyRequest,
    onSubmit: () => sendToUpdate(),
  });

  const sendToUpdate = () => {
    mutate({
      id: specialty.id,
      name: formik.values.name,
      price: mask.formatToFloat(mask.cleanCurrency(formik.values.price)),
      timeDuration: formik.values.timeDuration,
      categoryId: category.id,
    });
    navigation.goBack();
  };

  return (
    <SpecialtyForm
      formik={formik}
      isError={isError}
      isPending={isPending}
      isSuccess={isSuccess}
      categoryName={route.params.category.name}
    />
  );
}
