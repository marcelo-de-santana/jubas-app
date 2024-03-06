import {BoxFourTimes, BoxFourTimesProps} from '.';

export function BoxHeaderWorkingHour({...props}: Readonly<BoxFourTimesProps>) {
  const listHeader = [
    'Entrada',
    'Início\nIntervalo',
    'Fim\nIntervalo',
    'Saída',
  ];

  return <BoxFourTimes textValues={listHeader} disabled {...props} />;
}
