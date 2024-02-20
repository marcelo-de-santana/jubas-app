import {BoxDetails} from '@components';
import {EmployeeResponse} from '@domain';
import {EmployeeScreenProps} from '@routes';

interface DetailsBoxPros {
  navigation: EmployeeScreenProps<'EmployeeDetailsScreen'>['navigation'];
  employee: EmployeeResponse;
}

export function DetailsBox({
  navigation,
  employee,
}: Readonly<DetailsBoxPros>) {
  const navigateToTimeListScreen = () => {
    navigation.navigate('EmployeeTimeListScreen', {
      employeeId: employee.id,
      workingHourId: employee.workingHour.id,
    });
  };

  const navigateToServiceListScreen = () => {
    navigation.navigate('EmployeeServicesListScreen', {
      employeeId: employee.id,
      services: employee.services,
    });
  };

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
    <>
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
  );
}
