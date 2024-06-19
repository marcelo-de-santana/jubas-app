import {Text} from '@components';
import {ClientStackProps} from '@routes';

export function PaymentSuccess({
  navigation,
  route: {
    params: {transactionId},
  },
}: ClientStackProps<'PaymentSuccess'>) {

  return (
    <>
      <Text>Pagamento confirmado {transactionId}</Text>
    </>
  );
}
