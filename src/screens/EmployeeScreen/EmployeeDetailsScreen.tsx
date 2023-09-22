import {Icon, ListItem, Screen, SimpleSeparator} from '@components';
import {EmployeeDetailsScreenProps} from '@routes';
import {text, theme} from '@styles';
import {Text, View} from 'react-native';

export function EmployeeDetailsScreen({
  navigation,
  route,
}: EmployeeDetailsScreenProps) {
  const {id, profile, services, operationTime} = route.params.employee;

  function IconProfile() {
    if (profile.statusProfile) {
      return <Icon name="ToggleOnIcon" color="green" />;
    }
    return <Icon name="ToggleOffIcon" color="red" />;
  }

  return (
    <Screen>
      <ListItem
        onPress={() => navigation.navigate('EmployeeProfileScreen', {profile})}
        title={'Dados pessoais'}
        textValues={[
          `CPF: ${profile.cpf ?? 'Não cadastrado'}`,
          <IconProfile />,
        ]}
      />

      <SimpleSeparator />

      <ListItem
        title={'Horários'}
        textValues={
          operationTime?.startTime
            ? [
                `Entrada\n${operationTime.startTime}`,
                `I. Intervalo\n${operationTime.startInterval}`,
                `F. Intervalo\n${operationTime.endInterval}`,
                `Saída\n${operationTime.endTime}`,
              ]
            : ['Não possui horários cadastrados.']
        }
      />

      <SimpleSeparator />

      <ListItem
        title={'Serviços'}
        textValues={
          services.length > 0
            ? ['Implementar Lógica']
            : ['Nenhum serviço atribuído.']
        }
      />
    </Screen>
  );
}
