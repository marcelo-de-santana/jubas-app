import {
  Box,
  ButtonTwoOptions,
  ClockButton,
  FormTextInput,
  FormTextInputName,
  Screen,
  Text,
} from '@components';
import {specialtyUseCases} from '@domain';
import {useForm} from '@hooks';
import {BusinessManagementStackProps} from '@routes';
import {mask, schemas} from '@utils';

export function SpecialtyUpdateScreen({
  navigation,
  route,
}: Readonly<BusinessManagementStackProps<'SpecialtyUpdateScreen'>>) {
  const {fetch} = specialtyUseCases.update();
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
    fetch({
      id: specialty.id,
      name: formik.values.name,
      price: mask.formatToFloat(mask.cleanCurrency(formik.values.price)),
      timeDuration: formik.values.timeDuration,
      categoryId: category.id,
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
