import {Screen, FlatList, CollapsibleBox, Box} from '@components';
import {EmployeeResponse, employeeUseCases} from '@domain';
import {BusinessManagementStackProps} from '@routes';
import {useEffect} from 'react';
import {ListRenderItemInfo} from 'react-native';
import {BoxSpecialty} from './components/BoxSpecialty';
import {BoxWorkingHour} from './components/BoxWorkingHour';
import {HeaderWorkingHour} from './components/HeaderWorkingHour';

export function EmployeeListScreen({
  navigation,
}: Readonly<BusinessManagementStackProps<'EmployeeListScreen'>>) {
  const {data, isLoading, isError, fetch} = employeeUseCases.getAll();

  const searchData = () => fetch();

  useEffect(() => {
    searchData();
  }, []);

  function renderItem({item}: ListRenderItemInfo<EmployeeResponse>) {
    const {name, specialties, statusProfile, workingHour} = item;

    return (
      <CollapsibleBox title={name}>
        <Box backgroundColor="secondary" borderRadius="s6">
          <Box padding="s12">
            <HeaderWorkingHour statusProfile={statusProfile} />
            <BoxWorkingHour workingHour={workingHour} navigation={navigation} />
            <BoxSpecialty specialties={specialties} navigation={navigation} />
          </Box>
        </Box>
      </CollapsibleBox>
    );
  }

  return (
    <Screen>
      <FlatList
        data={data}
        renderItem={renderItem}
        isSeparator={false}
        listEmptyTitle="Nenhum funcionário listado"
        loading={isLoading}
        error={isError}
        refetch={searchData}
      />
    </Screen>
  );
}
