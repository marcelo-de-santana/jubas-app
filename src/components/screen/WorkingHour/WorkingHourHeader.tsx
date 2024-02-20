import {BoxFourItems} from '@components';

export function WorkingHourHeader() {
  const listHeader = [
    'Entrada',
    'Início\nIntervalo',
    'Fim\nIntervalo',
    'Saída',
  ];

  return <BoxFourItems textValues={listHeader} />;
}
