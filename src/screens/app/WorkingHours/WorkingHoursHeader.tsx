import {BoxFourItems} from '@components';

export function WorkingHoursHeader() {
  const listHeader = [
    'Entrada',
    'Início\nIntervalo',
    'Fim\nIntervalo',
    'Saída',
  ];

  return <BoxFourItems textValues={listHeader} />;
}
