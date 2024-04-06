import {
  ButtonTwoOptions,
  FormTextInput,
  Screen,
  Text,
  ClockButton,
  Box,
  FormTextInputName,
} from '@components';
import {specialtyUseCases} from '@domain';
import {useForm} from '@hooks';
import {CatalogStackProps} from '@routes';
import {schemas, mask} from '@utils';

export function SpecialtyCreateScreen({
  navigation,
  route,
}: Readonly<CatalogStackProps<'SpecialtyCreateScreen'>>) {
  const {fetch} = specialtyUseCases.create();

  const formik = useForm({
    initialValues: {name: '', price: '', timeDuration: '00:20'},
    validationSchema: schemas.specialtyRequest,
    onSubmit: () => createSpecialty(),
  });

  const createSpecialty = () => {
    fetch({
      categoryId: route.params.category.id,
      name: formik.values.name,
      price: mask.formatToFloat(mask.cleanCurrency(formik.values.price)),
      timeDuration: formik.values.timeDuration,
    });
    navigation.goBack();
  };

  return (
    <Screen>
      <Text variant="paragraphMedium" textAlign="justify" mb="s12">
        {'Categoria: ' + route.params.category.name}
      </Text>
      <FormTextInputName
        label="Nome"
        name="name"
        formik={formik}
        placeholder=""
      />
      <FormTextInput
        label="Preço"
        name="price"
        keyboardType="numeric"
        formik={formik}
        value={mask.currencyFormatBRL(formik.values.price)}
        maxLength={9}
      />
      <Box mt="s4">
        <Text variant="paragraphSmall" textAlign="justify" mb="s4">
          Tempo de duração
        </Text>
        <ClockButton
          backgroundColor="secondary"
          height={50}
          width="100%"
          textProps={{variant: 'paragraphMedium', color: 'secondaryContrast'}}
          timeState={formik.values.timeDuration}
          setTimeState={time => formik.handleChangeText('timeDuration', time)}
        />
      </Box>
      <ButtonTwoOptions
        cancelButtonProps={{onPress: navigation.goBack}}
        confirmButtonProps={{onPress: formik.handleSubmit}}
      />
    </Screen>
  );
}
