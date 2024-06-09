import {Dispatch, SetStateAction} from 'react';
import {PaymentTypes} from '../PaymentScreen';
import {Box, Icon, IconName, Text, TouchableOpacity} from '@components';
import {CardBox} from './CardBox';

type PaymentOptionsProps = {
  paymentMethod: string | null;
  setPaymentMethod: Dispatch<SetStateAction<string | null>>;
};

export function PaymentOptions({
  paymentMethod,
  setPaymentMethod,
}: PaymentOptionsProps) {
  return (
    <CardBox>
      <PaymentOption
        icon="CreditCardIcon"
        label="Cartão de crédito"
        isSelected={paymentMethod === PaymentTypes.CREDITO}
        onPress={() => setPaymentMethod(PaymentTypes.CREDITO)}
      />
      <Divider />
      <PaymentOption
        icon="DebitCardIcon"
        label="Cartão de débito"
        isSelected={paymentMethod === PaymentTypes.DEBITO}
        onPress={() => setPaymentMethod(PaymentTypes.DEBITO)}
      />
      <Divider />
      <PaymentOption
        icon="PixIcon"
        label="Pix ou dinheiro"
        isSelected={paymentMethod === PaymentTypes.DINHEIRO}
        onPress={() => setPaymentMethod(PaymentTypes.DINHEIRO)}
      />
    </CardBox>
  );
}

type PaymentOptionProps = {
  icon: IconName;
  label: string;
  isSelected: boolean;
  onPress: () => void;
};

function PaymentOption({icon, label, isSelected, onPress}: PaymentOptionProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      flexDirection="row"
      alignItems="center"
      p="s10"
      g="s16">
      <Box
        backgroundColor={isSelected ? 'secondary' : 'primary'}
        borderColor="primaryContrast"
        borderWidth={1}
        height={15}
        width={15}
        style={{
          borderRadius: 100,
        }}
      />
      <Icon name={icon} size={30} />
      <Text variant="paragraphLarge">{label}</Text>
    </TouchableOpacity>
  );
}

function Divider() {
  return <Box borderColor="primaryContrast" borderWidth={0.2} />;
}
