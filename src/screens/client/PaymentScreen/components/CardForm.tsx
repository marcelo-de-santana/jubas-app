import {
  Box,
  ButtonSuccess,
  Collapsible,
  FormTextInput,
  FormTextInputCpf,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from '@components';
import {CollapsedProps} from '../PaymentScreen';
import {CardBox} from './CardBox';
import {FormikExtractedParams, useForm} from '@hooks';
import {useEffect, useState} from 'react';
import {mask} from '@utils';
import {DocumentFormGroup} from './DocumentFormGroup';
import {usePaymentGetMethods} from '@domain';
import {usePaymentStore} from '@services';

export function CardForm({isCollapsed}: CollapsedProps) {
  const formik = useForm({
    initialValues: {
      cardNumber: '',
      holderName: '',
      expirationDate: '',
      securityCode: '',
      identificationNumber: '',
      identificationType: 'CPF',
    },
    onSubmit: ({
      cardNumber,
      holderName,
      expirationDate,
      securityCode,
      identificationType,
      identificationNumber,
    }) => {
      console.log({
        cardNumber: mask.removeSpaces(cardNumber),
        holderName,
        expirationDate,
        securityCode,
        identificationType,
        identificationNumber,
      });
      // createCardTokenR({
      //   cardNumber: '5031433215406351',
      //   cardholderName: 'APRO',
      //   cardExpirationMonth: '11',
      //   cardExpirationYear: '2025',
      //   securityCode: '123',
      //   identificationType: 'CPF',
      //   identificationNumber: '12345678909',
      // });
    },
  });

  // const createCardToken = usePaymentCreateCardToken();

  const getBin = (cardNumber: string) => {
    return cardNumber?.length >= 8 ? cardNumber.slice(0, 8) : '12345678';
  };
  const {handlePayment} = usePaymentStore();

  const bin = getBin(mask.removeSpaces(formik.values.cardNumber));

  const paymentMethods = usePaymentGetMethods({bin});

  // console.log(createCardToken.data, bin);

  useEffect(() => {
    handlePaymentMethodsSuccess(paymentMethods.data);
  }, [paymentMethods.isSuccess]);

  function handlePaymentMethodsSuccess(data: any) {
    const result = data?.results[0] ?? undefined;
    handlePayment({methodId: result?.id});
    handlePayment({typeId: result?.payment_type_id});
  }

  return (
    <Collapsible collapsed={!isCollapsed}>
      <CardBox>
        <FormTextInput
          label="Número do cartão"
          name="cardNumber"
          formik={formik}
          value={mask.formatCardNumber(formik.values.cardNumber)}
          keyboardType="numeric"
          placeholder={PLACEHOLDERS.CARD_NUMBER}
          maxLength={MAX_LENGTH.CARD_NUMBER}
        />
        <FormTextInput
          label="Nome do titular"
          name="holderName"
          formik={formik}
          value={mask.formatName(formik.values.holderName.toUpperCase())}
          autoCapitalize="characters"
          placeholder={PLACEHOLDERS.HOLDER_NAME}
          maxLength={MAX_LENGTH.HOLDER_NAME}
        />
        <Box flexDirection="row" justifyContent="space-between">
          <FormTextInput
            label="Data de vencimento"
            name="expirationDate"
            formik={formik}
            value={mask.formatExpirationDate(formik.values.expirationDate)}
            keyboardType="numeric"
            placeholder={PLACEHOLDERS.EXPIRATION_DATE}
            maxLength={MAX_LENGTH.EXPIRATION_DATE}
          />
          <FormTextInput
            label="Código de segurança"
            name="securityCode"
            formik={formik}
            value={mask.formatNumber(formik.values.securityCode)}
            keyboardType="numeric"
            placeholder={PLACEHOLDERS.SECURITY_CODE}
            maxLength={MAX_LENGTH.SECURITY_CODE}
          />
        </Box>
        <DocumentFormGroup formik={formik} />
        <ButtonSuccess
          bg="secondaryContrast"
          mt="s16"
          title="Confirmar"
          onPress={formik.handleSubmit}
        />
      </CardBox>
    </Collapsible>
  );
}

const PLACEHOLDERS = {
  CARD_NUMBER: '0000 0000 0000 0000',
  HOLDER_NAME: 'Nome escrito no cartão',
  EXPIRATION_DATE: '06/24',
  SECURITY_CODE: 'CVV',
};

const MAX_LENGTH = {
  CARD_NUMBER: 19,
  HOLDER_NAME: 20,
  EXPIRATION_DATE: 5,
  SECURITY_CODE: 3,
};
