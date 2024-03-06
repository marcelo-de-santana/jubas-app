import {
  Screen,
  FlatList,
  CollapsibleBox,
  Box,
  Text,
  BoxFourTimes,
  BoxHeaderWorkingHour,
} from '@components';
import {
  EmployeeResponse,
  ProfileResponse,
  employeeUseCases,
  permissionUseCases,
} from '@domain';
import {BusinessManagementStackProps} from '@routes';
import {mask} from '@utils';
import {useEffect} from 'react';
import {ListRenderItemInfo} from 'react-native';

export function EmployeeListScreen({
  navigation,
  route,
}: Readonly<BusinessManagementStackProps<'EmployeeListScreen'>>) {
  const {data, isLoading, isError, fetch} = employeeUseCases.getAll();

  const searchData = () => fetch();

  useEffect(() => {
    searchData();
  }, []);

  function renderItem({item}: ListRenderItemInfo<EmployeeResponse>) {
    const {name, services, statusProfile, workingHour} = item;

    const navigateToUpdate = () => {
      navigation.navigate('EmployeeUpdateScreen');
    };

    return (
      <CollapsibleBox
        buttonProps={{
          onLongPress: navigateToUpdate,
        }}
        title={name}>
        <Box backgroundColor="secondary" borderRadius="s6">
          <Box padding="s12">
            <BoxHeaderWorkingHour />
            <BoxFourTimes
              textProps={{color: 'secondaryContrast'}}
              textValues={[
                workingHour.startTime,
                workingHour.startInterval,
                workingHour.endInterval,
                workingHour.endTime,
              ]}
            />

            <Text color="secondaryContrast" textAlign="justify">
              Status: {statusProfile ? 'Ativo' : 'Inativo'}
            </Text>
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
