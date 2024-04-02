import {Screen, FlatList, CollapsibleBox, Box} from '@components';
import {EmployeeResponse, employeeUseCases} from '@domain';
import {BusinessManagementStackProps} from '@routes';
import {useEffect} from 'react';
import {ListRenderItemInfo} from 'react-native';
import {BoxSpecialties} from './components/BoxSpecialties';
import {BoxWorkingHour} from './components/BoxWorkingHour';

export type EmployeeListScreenNavigation = Pick<
  BusinessManagementStackProps<'EmployeeListScreen'>,
  'navigation'
>;

export function EmployeeListScreen({
  navigation,
}: Readonly<BusinessManagementStackProps<'EmployeeListScreen'>>) {
  const {data, isLoading, isError, fetch} = employeeUseCases.getAll();

  const searchData = () => {
    fetch();
  };

  useEffect(() => {
    navigation.addListener('focus', searchData);
  }, [navigation]);

  function renderItem({item: employee}: ListRenderItemInfo<EmployeeResponse>) {
    const {name: employeeName} = employee;

    return (
      <CollapsibleBox title={employeeName}>
        <Box backgroundColor="secondary" borderRadius="s6">
          <Box padding="s12">
            <BoxWorkingHour employee={employee} navigation={navigation} />
            <BoxSpecialties employee={employee} navigation={navigation} />
          </Box>
        </Box>
      </CollapsibleBox>
    );
  }

  return (
    <Screen flex={1}>
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
