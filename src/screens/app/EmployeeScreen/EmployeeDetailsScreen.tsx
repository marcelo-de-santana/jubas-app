import {BoxDetails, Icon, Screen, StatusScreen, Text} from '@components';
import {useEmplyeeFindByProfile} from '@domain';
import {EmployeeDetailsScreenProps} from '@routes';
import {mask} from '@utils';
import {useEffect} from 'react';
import {View} from 'react-native';

export function EmployeeDetailsScreen({
  navigation,
  route,
}: EmployeeDetailsScreenProps) {
  const {fetchData, status, isLoading, employee} = useEmplyeeFindByProfile();

  useEffect(() => {
    navigation.addListener('focus', () => {
      fetchData({profileId: route.params.profile.id});
    });
  }, [navigation]);

  function fatalErrorAction() {
    if (status !== 404) {
      navigateToEmployeeListScreen();
    }
  }

  function navigateToEmployeeCreateScreen() {
    navigation.navigate('EmployeeCreateScreen', {
      ...route.params,
    });
  }

  function navigateToEmployeeListScreen() {
    navigation.goBack();
  }

  function navigateToProfileUpdateScreen() {
    navigation.navigate('EmployeeProfileUpdateScreen', {
      profile: employee?.profile,
    });
  }

  function navigateToTimeListScreen() {
    navigation.navigate('EmployeeTimeListScreen', {
      employeeId: employee?.id,
      workingHour: employee?.workingHour,
    });
  }

  function navigateToServiceListScreen() {
    navigation.navigate('EmployeeServicesListScreen', {
      employeeId: employee?.id,
      services: employee?.services,
    });
  }

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
      {status !== 404 ? (
        <>
          <StatusScreen
            loading={isLoading}
            status={status}
            errorAction={fatalErrorAction}
          />
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
      ) : (
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
              color="light-gray"
              backgroundColor="red"
              style={{alignItems: 'center'}}
              onPress={navigateToEmployeeListScreen}
            />
            <Icon
              name="CheckIcon"
              type="inline-one-fifth-wide"
              color="light-gray"
              backgroundColor="light-green"
              style={{alignItems: 'center'}}
              onPress={navigateToEmployeeCreateScreen}
            />
          </View>
        </View>
      )}
    </Screen>
  );
}
