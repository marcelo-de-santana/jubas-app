import {WorkingHourResponse} from '@domain';
import {useState} from 'react';

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
