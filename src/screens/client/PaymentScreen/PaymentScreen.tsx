import {
  Box,
  BoxProps,
  ButtonOptionItem,
  ButtonOptions,
  Collapsible,
  FormTextInput,
  Icon,
  IconName,
  Screen,
  Text,
  TextInput,
  TouchableOpacity,
} from '@components';
import {useVisibility} from '@hooks';
import {Dispatch, ReactNode, SetStateAction, useState} from 'react';
import {PixInfo} from './components/PixInfo';
import {PaymentOptions} from './components/PaymentOptions';
import {CardBox} from './components/CardBox';
import {CardForm} from './components/CardForm';

export enum PaymentTypes {
  CREDITO = 'CREDITO',
  DEBITO = 'DEBITO',
  DINHEIRO = 'DINHEIRO',
}

export type CollapsedProps = {isCollapsed: boolean};

export function PaymentScreen() {
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);

  return (
    <Screen scrollable>
      <PaymentOptions
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
      />
      <CardForm
        isCollapsed={
          paymentMethod === PaymentTypes.CREDITO ||
          paymentMethod === PaymentTypes.DEBITO
        }
      />
      <PixInfo isCollapsed={paymentMethod === PaymentTypes.DINHEIRO} />
    </Screen>
  );
}
