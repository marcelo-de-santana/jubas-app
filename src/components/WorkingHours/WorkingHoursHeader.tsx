import {BoxFourItems} from '../List';

export function WorkinhHoursHeader() {
  const listHeader = [
    'Entrada',
    'Início\nIntervalo',
    'Fim\nIntervalo',
    'Saída',
  ];

  return <BoxFourItems textValues={listHeader} />;
}
