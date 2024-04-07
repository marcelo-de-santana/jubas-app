import {WorkingHourForm} from '@components';
import {useWorkingHourCreate} from '@domain';
import {WorkingHourStackProps} from '@routes';
import {useWHClockFunctions} from '@hooks';

const initialValues = {
  startTime: '09:00',
  startInterval: '13:00',
  endInterval: '14:00',
  endTime: '19:00',
};

export function WorkingHourCreateScreen({
  navigation,
}: Readonly<WorkingHourStackProps<'WorkingHourCreateScreen'>>) {
  const {mutate, isPending, isError, isSuccess} = useWorkingHourCreate();
  const {workingHour, handleWorkingHour} = useWHClockFunctions(initialValues);

  return (
    <WorkingHourForm
      isError={isError}
      isPending={isPending}
      isSuccess={isSuccess}
      sendForm={() => mutate(workingHour)}
      workingHour={workingHour}
      handleWorkingHour={handleWorkingHour}
    />
  );
}
