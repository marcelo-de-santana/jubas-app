import {Box, ButtonOptionItem, ButtonOptions, Screen, Text} from '@components';
import {useVisibility} from '@hooks';
import {useState} from 'react';

export function PaymentScreen() {
  return (
    <Screen>
      <Text>Atendimentos</Text>
    </Screen>
  );
}

export function PaymentForm() {
  enum Payment {
    Monetary = 'Dinheiro ou PIX',
    Card = 'Cartão de Crédito ou Débito',
  }

  const paymentMethod = (value: string) => {
    switch (value) {
      case Payment.Monetary:
        return Payment.Monetary;
      case Payment.Card:
        return Payment.Card;
      default:
        return 'Selecione um método';
    }
  };

  const {isVisible, handleVisibility} = useVisibility({initialValue: true});

  const [method, setMethod] = useState<string>('Selecione um método');

  const handlePaymentMethod = (method: string) => {
    setMethod(method);
    handleVisibility();
  };

  return (
    <>
      <Box>
        <Text variant="paragraphMedium" textAlign="justify">
          Pagamento
        </Text>
      </Box>
      <Box p="s12">
        <ButtonOptions
          isCollapsed={isVisible}
          onPress={handleVisibility}
          bg="primaryContrast"
          textProps={{color: 'primary'}}
          title={paymentMethod(method)}>
          <ButtonOptionItem
            selectedColor="secondaryContrast"
            unselectedColor="primaryContrast"
            isSelected={method === Payment.Monetary}
            onPress={() => handlePaymentMethod(Payment.Monetary)}
            title={Payment.Monetary}
          />
          <ButtonOptionItem
            selectedColor="secondaryContrast"
            unselectedColor="primaryContrast"
            isSelected={method === Payment.Card}
            onPress={() => handlePaymentMethod(Payment.Card)}
            title={Payment.Card}
          />
        </ButtonOptions>
      </Box>

      {method === Payment.Card && <Text>Mostrar cartão de crédito</Text>}
      {/* {method === Payment.Monetary && <ButtonConfirm {...props} />} */}
    </>
  );
}
