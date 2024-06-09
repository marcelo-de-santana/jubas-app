import {Collapsible, Text} from '@components';
import {CollapsedProps} from '../PaymentScreen';
import { CardBox } from './CardBox';

export function PixInfo({isCollapsed}: CollapsedProps) {
  return (
    <Collapsible collapsed={!isCollapsed}>
      <CardBox>
        <Text variant="paragraphMedium">
          Procure um funcionário para realizar o pagamento.
        </Text>
      </CardBox>
    </Collapsible>
  );
}
