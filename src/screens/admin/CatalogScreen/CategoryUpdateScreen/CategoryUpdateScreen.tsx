import {CategoryForm, IconNavigation} from '@components';
import {useCategoryUpdate} from '@domain';
import {useForm} from '@hooks';
import {CatalogStackProps} from '@routes';

import {schemas} from '@utils';
import {useLayoutEffect} from 'react';

export function CategoryUpdateScreen({
  navigation,
  route,
}: Readonly<CatalogStackProps<'CategoryUpdateScreen'>>) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconNavigation
          name="TrashIcon"
          size={25}
          routeName="CategoryDeleteScreen"
          params={route.params}
        />
      ),
    });
  }, []);

  const {mutate, isError, isSuccess, isPending} = useCategoryUpdate();

  const formik = useForm({
    initialValues: {name: route.params.category.name},
    validationSchema: schemas.categoryRequest,
    onSubmit: values => {
      mutate({id: route.params.category.id, name: values.name});
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
