import {WorkingHourForm} from '@components';
import {WorkingHourStackProps} from '@routes';
import {useWHClockFunctions} from '@hooks';
import {useWorkingHourUpdate} from '@domain';

export function WorkingHourUpdateScreen({
  navigation,
  route,
}: Readonly<WorkingHourStackProps<'WorkingHourUpdateScreen'>>) {
  const {mutate, isPending, isError, isSuccess} = useWorkingHourUpdate();
  const {workingHour, handleWorkingHour} = useWHClockFunctions(
    route.params.workingHour,
  );

  const sendToUpdate = () => {
    mutate({...workingHour, id: route.params.workingHour.id});
  };

  return (
    <WorkingHourForm
      workingHour={workingHour}
      handleWorkingHour={handleWorkingHour}
      isError={isError}
      isPending={isPending}
      isSuccess={isSuccess}
      sendForm={sendToUpdate}
    />
  );
}
