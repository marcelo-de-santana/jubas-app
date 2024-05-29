import {
  Screen,
  FlatList,
  CollapsibleBox,
  Box,
  IconNavigation,
} from '@components';
import {EmployeeResponse, useEmployeeGetAll} from '@domain';
import {EmployeeStackProps} from '@routes';
import {ListRenderItemInfo} from 'react-native';
import {BoxSpecialties} from './components/BoxSpecialties';
import {BoxWorkingHour} from './components/BoxWorkingHour';
import {useLayoutEffect} from 'react';

export type EmployeeListScreenNavigation = Pick<
  EmployeeStackProps<'EmployeeListScreen'>,
  'navigation'
>;

export function EmployeeListScreen({
  navigation,
}: Readonly<EmployeeStackProps<'EmployeeListScreen'>>) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconNavigation
          name="AddIcon"
          size={30}
          routeName="EmployeeCreateScreen"
        />
      ),
    });
  });

  const {data: employees, isLoading, isError, refetch} = useEmployeeGetAll();

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
        data={employees}
        renderItem={renderItem}
        isSeparator={false}
        listEmptyTitle="Nenhum funcionário listado"
        loading={isLoading}
        error={isError}
        refetch={refetch}
      />
    </Screen>
  );
}
