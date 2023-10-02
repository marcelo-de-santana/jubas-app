import {
  DecisionAlert,
  Icon,
  LoadingScreen,
  Screen,
  TouchableItem,
  ViewSeparator,
} from '@components';
import {
  EmployeeResponseDTO,
  getEmployeeByProfileId,
  registerEmployee,
} from '@repositories';
import {EmployeeDetailsScreenProps} from '@routes';
import {themeRegistry} from '@styles';
import {cpfMask} from '@utils';
import {useEffect, useState} from 'react';

export function EmployeeDetailsScreen({
  navigation,
  route,
}: EmployeeDetailsScreenProps) {
  const {profile} = route.params;
  const [isLoading, setLoading] = useState(true);
  const [employee, setEmployee] = useState<EmployeeResponseDTO>();

  useEffect(() => {
    navigation.addListener('focus', () => {
      searchEmployee();
    });
  }, [navigation]);

  async function searchEmployee() {
    setLoading(true);
    setEmployee(await getEmployeeByProfileId(profile.id));
    setLoading(false);
  }

  async function sendRegistration() {
    setEmployee(await registerEmployee(profile));
  }

  function IconProfile() {
    if (employee?.profile.statusProfile) {
      return <Icon name="ToggleOnIcon" color="light-green" />;
    }
    return <Icon name="ToggleOffIcon" color="red" />;
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!employee) {
    return DecisionAlert({
      message: 'Funcionário ainda não cadastrado. Deseja inseri-lo agora?',
      onPress: sendRegistration,
      cancelButton: () => navigation.goBack(),
    });
  }

  return (
    <Screen>
      <TouchableItem
        style={[themeRegistry['box-items'], {paddingTop: 10}]}
        textValues={['Dados pessoais']}
        textProps={{align: 'justify'}}
        onPress={() =>
          navigation.navigate('EmployeeProfileUpdateScreen', {
            profile: {...employee.profile},
          })
        }>
        <TouchableItem
          type="box-flex-row-list"
          textValues={[
            `CPF: ${
              employee?.profile.cpf
                ? cpfMask(employee.profile.cpf)
                : 'Não cadastrado'
            }`,
            <IconProfile />,
          ]}
          disabled
        />
      </TouchableItem>

      <ViewSeparator />

      <TouchableItem
        style={[themeRegistry['box-items'], {paddingTop: 10}]}
        textValues={['Horários']}
        textProps={{align: 'justify'}}
        onPress={() =>
          navigation.navigate('EmployeeTimeListScreen', {employee})
        }>
        <TouchableItem
          disabled
          type="box-flex-row-list"
          textValues={
            employee?.workingHours?.id
              ? [
                  `Entrada\n${employee?.workingHours.startTime}`,
                  `I. Intervalo\n${employee?.workingHours.startInterval}`,
                  `F. Intervalo\n${employee?.workingHours.endInterval}`,
                  `Saída\n${employee?.workingHours.endTime}`,
                ]
              : ['Não possui horários cadastrados.']
          }
        />
      </TouchableItem>

      <ViewSeparator />

      <TouchableItem
        style={[themeRegistry['box-items'], {paddingTop: 10}]}
        textValues={['Serviços']}
        textProps={{align: 'justify'}}
        onPress={() =>
          navigation.navigate('EmployeeServicesListScreen', {employee})
        }>
        <TouchableItem
          disabled
          type="box-flex-row-list"
          textValues={
            employee?.services?.length > 0
              ? ['Implementar Lógica']
              : ['Nenhum serviço atribuído.']
          }
        />
      </TouchableItem>
    </Screen>
  );
}
