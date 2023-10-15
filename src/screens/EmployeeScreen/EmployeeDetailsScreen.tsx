import {
  IconStatus,
  LoadingScreen,
  Screen,
  TouchableItem,
  ViewSeparator,
} from '@components';
import {EmployeeResponseDTO, getEmployeeByProfileId} from '@repositories';
import {EmployeeDetailsScreenProps} from '@routes';
import {themeRegistry} from '@styles';
import {cpfMask} from '@utils';
import {useEffect, useState} from 'react';

export function EmployeeDetailsScreen({
  navigation,
  route,
}: EmployeeDetailsScreenProps) {
  const [isLoading, setLoading] = useState(true);
  const [employee, setEmployee] = useState<EmployeeResponseDTO>();

  useEffect(() => {
    navigation.addListener('focus', () => {
      searchEmployee();
    });
  }, [navigation]);

  async function searchEmployee() {
    setLoading(true);
    setEmployee(await getEmployeeByProfileId(route.params.profile.id));
    setLoading(false);
  }

  interface BoxComponetProps {
    textHeader: string;
    onPress: () => void;
    textValues: (string | React.JSX.Element)[];
  }

  function BoxComponent({textHeader, onPress, textValues}: BoxComponetProps) {
    return (
      <TouchableItem
        textValues={[textHeader]}
        onPress={onPress}
        style={[themeRegistry['box-items'], {paddingTop: 10}]}
        textProps={{align: 'justify'}}>
        <TouchableItem
          type="box-flex-row-list"
          textValues={textValues}
          disabled
        />
        <ViewSeparator />
      </TouchableItem>
    );
  }

  if (isLoading) return <LoadingScreen />;

  if (employee) {
    const {id, profile, services, workingHours} = employee;
    return (
      <Screen>
        <BoxComponent
          textHeader="Dados pessoais"
          textValues={[
            `CPF: ${profile.cpf ? cpfMask(profile.cpf) : 'Não cadastrado'}`,
            <IconStatus status={profile.statusProfile} />,
          ]}
          onPress={() =>
            navigation.navigate('EmployeeProfileUpdateScreen', {
              profile,
            })
          }
        />

        <BoxComponent
          textHeader="Horários"
          textValues={
            workingHours?.id
              ? [
                  `Entrada\n${workingHours.startTime}`,
                  `I. Intervalo\n${workingHours.startInterval}`,
                  `F. Intervalo\n${workingHours.endInterval}`,
                  `Saída\n${workingHours.endTime}`,
                ]
              : ['Não possui horários cadastrados.']
          }
          onPress={() =>
            navigation.navigate('EmployeeTimeListScreen', {
              employeeId: id,
              workingHours,
            })
          }
        />

        <BoxComponent
          textHeader="Serviços"
          textValues={
            employee?.services?.length > 0
              ? ['Implementar Lógica']
              : ['Nenhum serviço atribuído.']
          }
          onPress={() =>
            navigation.navigate('EmployeeServicesListScreen', {
              employeeId: id,
              services,
            })
          }
        />
      </Screen>
    );
  }
}
