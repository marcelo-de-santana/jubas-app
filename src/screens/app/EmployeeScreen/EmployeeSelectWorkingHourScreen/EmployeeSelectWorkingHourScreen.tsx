import {workingHourUseCases} from '@domain';
import {useEffect} from 'react';
import {BoxHeaderWorkingHour, FlatList} from '@components';
import {EmployeeSelectWorkingHourScreenProps} from '@services';
import {WorkingHourListItem} from './components/WorkingHourListItem';
import {Separator} from '../EmployeeCreateScreen/components/Separator';
export function EmployeeSelectWorkingHourScreen({
  chooseWorkingHour,
  selectedWorkingHour,
}: Readonly<EmployeeSelectWorkingHourScreenProps>) {
  const {data, fetch, isError, isLoading} = workingHourUseCases.getAll();

  useEffect(() => {
    fetch();
  }, []);

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
