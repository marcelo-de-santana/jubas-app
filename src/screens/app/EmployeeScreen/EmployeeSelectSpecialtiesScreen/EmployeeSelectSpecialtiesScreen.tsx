import {FlatList} from '@components';
import {ServicesListItem} from './components/ServicesListItem';
import {useCategoryGetAll} from '@domain';
import { EmployeeSelectSpecialtiesScreenProps } from '../EmployeeCreateScreen/components/types';

export function EmployeeSelectSpecialtiesScreen(
  listSpecialtiesProps: Readonly<EmployeeSelectSpecialtiesScreenProps>,
) {
  const {data, isError, isLoading} = useCategoryGetAll();

  return (
    <FlatList
      data={data}
      renderItem={props => (
        <ServicesListItem {...props} {...listSpecialtiesProps} />
      )}
      isSeparator={false}
      loading={isLoading}
      error={isError}
    />
  );
}
