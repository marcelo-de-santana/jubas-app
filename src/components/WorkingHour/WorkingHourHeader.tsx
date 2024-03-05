import {BoxFourTimes} from '../Box';

export function WorkingHourHeader() {
  const listHeader = [
    'Entrada',
    'Início\nIntervalo',
    'Fim\nIntervalo',
    'Saída',
  ];

  return <BoxFourTimes textValues={listHeader} disabled />;
}
