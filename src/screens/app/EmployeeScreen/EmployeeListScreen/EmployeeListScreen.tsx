import {
  Screen,
  FlatList,
  CollapsibleBox,
  Box,
  Text,
  BoxFourTimes,
  BoxHeaderWorkingHour,
  TouchableOpacityItem,
  ListSeparator,
  TouchableOpacity,
  Icon,
  IconBox,
  IconCheckBox,
} from '@components';
import {EmployeeResponse, employeeUseCases} from '@domain';
import {BusinessManagementStackProps} from '@routes';
import {useEffect} from 'react';
import {ListRenderItemInfo} from 'react-native';
import {ButtonAddComponent} from './components/ButtonAdd';

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
    const {name, specialties, statusProfile, workingHour} = item;

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
            <Box flexDirection="row" justifyContent="space-between">
              <Text color="secondaryContrast" textAlign="justify" verticalAlign='middle'>
                Horários
              </Text>
              <IconCheckBox
                label={`Perfil ${statusProfile ? 'ativo' : 'inativo'}`}
                textProps={{color: 'primary'}}
                iconProps={{color: statusProfile ? 'lightGreen' : 'red'}}
                value={statusProfile}
                onPress={() => console.warn('Modal')}
              />
            </Box>

            {workingHour.id ? (
              <TouchableOpacity
                bg="primaryContrast"
                borderRadius="s6"
                marginBottom="s12"
                padding="s10"
                onLongPress={() =>
                  navigation.navigate('EmployeeUpdateWorkingHourScreen')
                }>
                <BoxHeaderWorkingHour
                  justifyContent="center"
                  textProps={{color: 'primary'}}
                />
                <BoxFourTimes
                  justifyContent="center"
                  disabled
                  textProps={{color: 'primary'}}
                  textValues={[
                    workingHour.startTime,
                    workingHour.startInterval,
                    workingHour.endInterval,
                    workingHour.endTime,
                  ]}
                />
              </TouchableOpacity>
            ) : (
              <Box
                bg="primaryContrast"
                borderRadius="s6"
                marginBottom="s12"
                padding="s10">
                <Text padding="s10" color="primary">
                  Nenhuma jornada atribuída
                </Text>
                <ButtonAddComponent
                  onPress={() =>
                    navigation.navigate('EmployeeAddWorkingHourScreen')
                  }
                />
              </Box>
            )}

            <Text color="secondaryContrast" textAlign="justify" mb="s4">
              Serviços
            </Text>
            <Box bg="primaryContrast" borderRadius="s6" padding="s10">
              {specialties.length !== 0 ? (
                specialties.map((specialty, index) => {
                  const hasNext = specialties.length !== index + 1;

                  return (
                    <Box key={specialty.id}>
                      <TouchableOpacityItem
                        padding="s10"
                        textProps={{color: 'primary'}}
                        label={specialty.name}
                        onLongPress={() =>
                          navigation.navigate('EmployeeUpdateSpecialtyScreen')
                        }
                      />
                      {hasNext && (
                        <ListSeparator variant="second" marginHorizontal="s4" />
                      )}
                    </Box>
                  );
                })
              ) : (
                <Text padding="s10" color="primary">
                  Nenhum Serviço atribuído.
                </Text>
              )}
              <ButtonAddComponent
                onPress={() =>
                  navigation.navigate('EmployeeAddSpecialtyScreen')
                }
              />
            </Box>
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
