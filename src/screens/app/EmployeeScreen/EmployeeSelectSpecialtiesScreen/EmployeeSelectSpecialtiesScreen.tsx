import {categoryUseCases} from '@domain';
import {useEffect} from 'react';
import {FlatList} from '@components';
import {EmployeeSelectSpecialtiesScreenProps} from '@services';
import {ServicesListItem} from './components/ServicesListItem';

export function EmployeeSelectSpecialtiesScreen(
  listSpecialtiesProps: Readonly<EmployeeSelectSpecialtiesScreenProps>,
) {
  const {data, fetch, isError, isLoading} = categoryUseCases.getAll();

  useEffect(() => {
    fetch(true);
  }, []);

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
