import {ButtonTwoOptions, FormTextInput, Screen, Text} from '@components';
import {specialtyUseCases} from '@domain';
import {useForm} from '@hooks';
import {BusinessManagementStackProps} from '@routes';
import {schemas, mask} from '@utils';

export function SpecialtyCreateScreen({
  navigation,
  route,
}: Readonly<BusinessManagementStackProps<'SpecialtyCreateScreen'>>) {
  const {fetch} = specialtyUseCases.create();

  const formik = useForm({
    initialValues: {name: '', price: '', timeDuration: ''},
    validationSchema: schemas.specialtyCreate,
    onSubmit: () => createSpecialty(),
  });

  const createSpecialty = () => {
    fetch({
      categoryId: route.params.category.id,
      name: formik.values.name,
      price: formik.values.price,
      timeDuration: formik.values.timeDuration,
    });
    navigation.goBack();
  };

  return (
    <Screen>
      <Text variant="paragraphMedium" textAlign="justify">
        {'Categoria: ' + route.params.category.name}
      </Text>
      <FormTextInput
        name="name"
        formik={formik}
        placeholder="Nome da especialidade"
      />
      <FormTextInput
        name="price"
        keyboardType="numeric"
        formik={formik}
        value={mask.currencyFormat(formik.values.price)}
        placeholder="Preço"
      />
      <FormTextInput
        name="timeDuration"
        keyboardType="numeric"
        formik={formik}
        placeholder="Tempo de duração"
      />
      <ButtonTwoOptions
        cancelButtonProps={{onPress: navigation.goBack}}
        confirmButtonProps={{onPress: createSpecialty}}
      />
    </Screen>
  );
}
