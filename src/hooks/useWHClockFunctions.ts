import {WorkingHourResponse} from '@domain';
import {useState} from 'react';

export type UseWHClockFunctionsType = {
  workingHour: Omit<WorkingHourResponse, 'id'>;
  handleWorkingHour: ({
    key,
    value,
  }: Readonly<{
    key: 'startTime' | 'startInterval' | 'endInterval' | 'endTime';
    value: string;
  }>) => void;
};

export function useWHClockFunctions(input: Omit<WorkingHourResponse, 'id'>) {
  const [workingHour, setWorkingHour] = useState(input);
  type HandleWorkingHourType = Readonly<{
    key: keyof typeof workingHour;
    value: string;
  }>;

  const handleWorkingHour = ({key, value}: HandleWorkingHourType) => {
    setWorkingHour(prev => ({...prev, [key]: value}));
  };
  return {
    workingHour,
    handleWorkingHour,
  };
}
