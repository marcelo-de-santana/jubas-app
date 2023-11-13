import {BoxDetails, EmptyList, Icon, Screen, Text} from '@components';
import {useEmplyeeFindByProfile} from '@domain';
import {EmployeeScreenProps} from '@routes';
import {mask} from '@utils';
import {useEffect} from 'react';
import {View} from 'react-native';

export function EmployeeDetailsScreen({
  navigation,
  route,
}: EmployeeScreenProps<'EmployeeDetailsScreen'>) {
  const {employee, fetchData, status, isError, isLoading} =
    useEmplyeeFindByProfile();

  const getEmployee = () => {
    fetchData({profileId: route.params.profile.id});
  };

  useEffect(() => {
    navigation.addListener('focus', () => {
      getEmployee();
    });
  }, [navigation]);

  const navigateToEmployeeCreateScreen = () => {
    navigation.navigate('EmployeeCreateScreen', {
      ...route.params,
    });
  };

  const navigateToProfileUpdateScreen = () => {
    navigation.navigate('EmployeeProfileUpdateScreen', {
      profile: employee?.profile,
    });
  };

  const navigateToTimeListScreen = () => {
    navigation.navigate('EmployeeTimeListScreen', {
      employeeId: employee?.id,
      workingHourId: employee?.workingHour.id,
    });
  };

  const navigateToServiceListScreen = () => {
    navigation.navigate('EmployeeServicesListScreen', {
      employeeId: employee?.id,
      services: employee?.services,
    });
  };

  const profileFields = [
    `CPF: ${
      employee?.profile.cpf ? mask.cpf(employee?.profile.cpf) : 'não cadastrado'
    }`,
    `Perfil: ${employee?.profile.statusProfile ? 'ativo' : 'desativado'}`,
  ];

  const workingHourFields = employee?.workingHour?.id
    ? [
        `Entrada\n${employee.workingHour.startTime}`,
        `I. Intervalo\n${employee.workingHour.startInterval}`,
        `F. Intervalo\n${employee.workingHour.endInterval}`,
        `Saída\n${employee.workingHour.endTime}`,
      ]
    : ['Não possui horários cadastrados.'];

  const serviceFields = employee?.services
    ? ['Implementar Lógica']
    : ['Nenhum serviço atribuído.'];

  return (
    <Screen>
      {status === 200 ? (
        <>
          <BoxDetails
            label="Dados pessoais"
            textFields={profileFields}
            boxProps={{disabled: true}}
            onPress={navigateToProfileUpdateScreen}
          />
          <BoxDetails
            label="Horários"
            textFields={workingHourFields}
            boxProps={{disabled: true}}
            onPress={navigateToTimeListScreen}
          />
          <BoxDetails
            label="Serviços"
            textFields={serviceFields}
            boxProps={{disabled: true}}
            onPress={navigateToServiceListScreen}
          />
        </>
      ) : status === 404 ? (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text size="M" align="center">
            Ops... Parace que o funcionário ainda não foi cadastrado. Deseja
            registrá-lo agora?
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              paddingVertical: 40,
            }}>
            <Icon
              name="CloseIcon"
              type="inline-one-fifth-wide"
              color="lightGray"
              backgroundColor="red"
              style={{alignItems: 'center'}}
              onPress={() => navigation.goBack()}
            />
            <Icon
              name="CheckIcon"
              type="inline-one-fifth-wide"
              color="lightGray"
              backgroundColor="lightGreen"
              style={{alignItems: 'center'}}
              onPress={navigateToEmployeeCreateScreen}
            />
          </View>
        </View>
      ) : (
        <EmptyList loading={isLoading} error={isError} refetch={getEmployee} />
      )}
    </Screen>
  );
}
