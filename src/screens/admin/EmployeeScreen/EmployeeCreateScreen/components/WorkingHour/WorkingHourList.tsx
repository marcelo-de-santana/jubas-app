import {BoxHeaderWorkingHour, FlatList} from '@components';
import {WorkingHourListItem} from './WorkingHourListItem';
import {Separator} from '../Separator';
import {SelectedWorkingHourState, ChooseWorkingHourFunction} from '../types';
import {useWorkingHourGetAll} from '@domain';

type WorkingHourListProps = SelectedWorkingHourState &
  ChooseWorkingHourFunction;

export function WorkingHourList({
  chooseWorkingHour,
  selectedWorkingHour,
}: Readonly<WorkingHourListProps>) {
  const {data, isError, isLoading} = useWorkingHourGetAll();

  return (
    <FlatList
      data={data}
      ListHeaderComponent={BoxHeaderWorkingHour}
      renderItem={props => (
        <WorkingHourListItem
          {...props}
          chooseWorkingHour={chooseWorkingHour}
          selectedWorkingHour={selectedWorkingHour}
        />
      )}
      ItemSeparatorComponent={Separator}
      loading={isLoading}
      error={isError}
    />
  );
}
