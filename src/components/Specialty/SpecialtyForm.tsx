import {
  Box,
  ButtonSuccess,
  ClockButton,
  FormTextInput,
  FormTextInputName,
  ModalStatus,
  Screen,
  Text,
} from '@components';
import {FormikExtractedParams} from '@hooks';
import {useNavigation} from '@react-navigation/native';
import {mask} from '@utils';

type SpecialtyFormProps = {
  isError: boolean;
  isSuccess: boolean;
  isPending: boolean;
  formik: FormikExtractedParams;
  categoryName: string;
};

export function SpecialtyForm({
  formik,
  isError,
  isPending,
  isSuccess,
  categoryName,
}: SpecialtyFormProps) {
  const {goBack} = useNavigation();

  return (
    <Screen flex={1}>
      <ModalStatus
        isError={isError}
        isSuccess={isSuccess}
        successAction={goBack}
        errorAction={goBack}
      />
      <Text variant="paragraphMedium" textAlign="justify" mb="s12">
        {'Categoria: ' + categoryName}
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
      <ButtonSuccess
        loading={isPending}
        marginTop="s20"
        backgroundColor="primaryContrast"
        textProps={{variant: 'paragraphMedium', color: 'primary'}}
        onPress={formik.handleSubmit}
        title="Salvar"
      />
    </Screen>
  );
}
