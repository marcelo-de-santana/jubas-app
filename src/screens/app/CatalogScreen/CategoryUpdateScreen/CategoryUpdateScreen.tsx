import {
  ButtonTwoOptions,
  FormTextInput,
  ModalStatus,
  Screen,
  TouchableOpacityItem,
} from '@components';
import {useCategoryUpdate} from '@domain';
import {useForm} from '@hooks';
import {CatalogStackProps} from '@routes';

import {schemas} from '@utils';

export function CategoryUpdateScreen({
  navigation,
  route,
}: Readonly<CatalogStackProps<'CategoryUpdateScreen'>>) {
  const {mutate, isError, isSuccess, isPending} = useCategoryUpdate();

  const formik = useForm({
    initialValues: {name: route.params.category.name},
    validationSchema: schemas.categoryRequest,
    onSubmit: () => {
      mutate({id: route.params.category.id, name: formik.values.name});
    },
  });

  return (
    <Screen flex={1}>
      <ModalStatus
        isError={isError}
        isSuccess={isSuccess}
        successAction={navigation.goBack}
      />
      <FormTextInput
        formik={formik}
        name="name"
        placeholder="Nome da categoria"
      />
      <ButtonTwoOptions
        cancelButtonProps={{loading: isPending, onPress: navigation.goBack}}
        confirmButtonProps={{loading: isPending, onPress: formik.handleSubmit}}
      />
      <TouchableOpacityItem
        flex={1}
        flexDirection="column-reverse"
        label="Outras opções"
        onPress={() =>
          navigation.navigate('CategoryDeleteScreen', {...route.params})
        }
      />
    </Screen>
  );
}
