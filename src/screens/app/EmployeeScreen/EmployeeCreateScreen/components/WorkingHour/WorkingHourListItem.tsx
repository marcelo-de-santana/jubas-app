import {BoxFourTimes} from '@components';
import {ChooseWorkingHourFunction, SelectedWorkingHourState} from '../types';
import {ListRenderItemInfo} from 'react-native';
import {WorkingHourResponse} from '@domain';

type WorkingHourListItemProps = ListRenderItemInfo<WorkingHourResponse> &
  ChooseWorkingHourFunction &
  SelectedWorkingHourState;

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
