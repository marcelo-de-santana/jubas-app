import {BoxFourTimes, BoxFourTimesProps} from './BoxFourTimes';

export function BoxHeaderWorkingHour({
  ...props
}: Readonly<Omit<BoxFourTimesProps, 'textValues' | 'disabled'>>) {
  const listHeader = [
    'Entrada',
    'Início\nIntervalo',
    'Fim\nIntervalo',
    'Saída',
  ];

  return <BoxFourTimes textValues={listHeader} disabled {...props} />;
}
