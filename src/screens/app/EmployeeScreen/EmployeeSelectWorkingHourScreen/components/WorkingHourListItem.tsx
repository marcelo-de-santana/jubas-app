import {BoxFourTimes} from '@components';
import {WorkingHourListItemProps} from '../../EmployeeCreateScreen/components/types';

export function WorkingHourListItem({
  item: workingHour,
  chooseWorkingHour,
  selectedWorkingHour,
}: Readonly<WorkingHourListItemProps>) {
  const isSelected = selectedWorkingHour?.id === workingHour.id;

  return (
    <BoxFourTimes
      padding="s12"
      textProps={{
        color: isSelected ? 'secondaryContrast' : 'primaryContrast',
      }}
      textValues={[
        workingHour.startTime,
        workingHour.startInterval,
        workingHour.endInterval,
        workingHour.endTime,
      ]}
      disabled={isSelected}
      onPress={() => chooseWorkingHour(workingHour)}
    />
  );
}
