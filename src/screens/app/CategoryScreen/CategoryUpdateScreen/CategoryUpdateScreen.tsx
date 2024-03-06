import {
  ButtonTwoOptions,
  FormTextInput,
  ModalStatus,
  Screen,
  TouchableOpacityItem,
} from '@components';
import {categoryUseCases} from '@domain';
import {useForm} from '@hooks';
import {BusinessManagementStackProps} from '@routes';
import {schemas} from '@utils';

export function CategoryUpdateScreen({
  navigation,
  route,
}: Readonly<BusinessManagementStackProps<'CategoryUpdateScreen'>>) {
  const {fetch, status, isLoading} = categoryUseCases.update();

  const formik = useForm({
    initialValues: {name: route.params.category.name},
    validationSchema: schemas.categoryRequest,
    onSubmit: () => {
      fetch({id: route.params.category.id, name: formik.values.name});
    },
  });

  return (
    <Screen flex={1}>
      <ModalStatus status={status} successAction={navigation.goBack} />
      <FormTextInput
        formik={formik}
        name="name"
        placeholder="Nome da categoria"
      />
      <ButtonTwoOptions
        cancelButtonProps={{loading: isLoading, onPress: navigation.goBack}}
        confirmButtonProps={{loading: isLoading, onPress: formik.handleSubmit}}
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
