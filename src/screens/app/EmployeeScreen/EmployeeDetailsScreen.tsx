import {BoxDetails, EmptyList, Icon, Screen, Text} from '@components';
import {EmployeeResponse, useEmployeeFindByProfile} from '@domain';
import {EmployeeScreenProps} from '@routes';
import {mask} from '@utils';
import {useEffect} from 'react';
import {View} from 'react-native';

interface EmployeeDetailsComponentProps {
  statusCode?: number | null;
}

export function EmployeeDetailsScreen({
  navigation,
  route,
}: Readonly<EmployeeScreenProps<'EmployeeDetailsScreen'>>) {
  const {employee, fetchData, status, isError, isLoading} =
    useEmployeeFindByProfile();

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

  const navigateToProfileUpdateScreen = (employee: EmployeeResponse) => {
    navigation.navigate('EmployeeProfileUpdateScreen', {
      profile: employee.profile,
    });
  };

  const navigateToTimeListScreen = (employee: EmployeeResponse) => {
    navigation.navigate('EmployeeTimeListScreen', {
      employeeId: employee.id,
      workingHourId: employee.workingHour.id,
    });
  };

  const navigateToServiceListScreen = (employee: EmployeeResponse) => {
    navigation.navigate('EmployeeServicesListScreen', {
      employeeId: employee.id,
      services: employee.services,
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

  function EmployeeDetailsComponent({
    statusCode,
  }: Readonly<EmployeeDetailsComponentProps>) {
    if (employee && statusCode === 200) {
      return (
        <>
          <BoxDetails
            label="Dados pessoais"
            textFields={profileFields}
            boxProps={{disabled: true}}
            onPress={() => navigateToProfileUpdateScreen(employee)}
          />
          <BoxDetails
            label="Horários"
            textFields={workingHourFields}
            boxProps={{disabled: true}}
            onPress={() => navigateToTimeListScreen(employee)}
          />
          <BoxDetails
            label="Serviços"
            textFields={serviceFields}
            boxProps={{disabled: true}}
            onPress={() => navigateToServiceListScreen(employee)}
          />
        </>
      );
    }
    if (statusCode === 404) {
      return (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text size="M" align="center">
            Ops... O funcionário ainda não foi cadastrado. Deseja registrá-lo
            agora?
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
      );
    }
    return (
      <EmptyList loading={isLoading} error={isError} refetch={getEmployee} />
    );
  }

  return (
    <Screen>
      <EmployeeDetailsComponent statusCode={status} />
    </Screen>
  );
}
