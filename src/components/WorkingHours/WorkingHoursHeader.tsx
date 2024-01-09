import {BoxFourItems} from '../List';

export function WorkingHoursHeader() {
  const listHeader = [
    'Entrada',
    'Início\nIntervalo',
    'Fim\nIntervalo',
    'Saída',
  ];

  return <BoxFourItems textValues={listHeader} />;
}
