import {Icon, Screen, TouchableItem, ViewSeparator} from '@components';
import {EmployeeDetailsScreenProps} from '@routes';
import {themeRegistry} from '@styles';
import {cpfMask} from '@utils';

export function EmployeeDetailsScreen({
  navigation,
  route,
}: EmployeeDetailsScreenProps) {
  const {employee} = route.params;
  const {profile, services, workingHours} = employee;

  function IconProfile() {
    if (profile.statusProfile) {
      return <Icon name="ToggleOnIcon" color="light-green" />;
    }
    return <Icon name="ToggleOffIcon" color="red" />;
  }

  return (
    <Screen>
      <TouchableItem
        style={[themeRegistry['box-items'], {paddingTop: 10}]}
        textValues={['Dados pessoais']}
        textProps={{align: 'justify'}}
        onPress={() =>
          navigation.navigate('EmployeeProfileUpdateScreen', {profile})
        }>
        <TouchableItem
          type="box-flex-row-list"
          textValues={[
            `CPF: ${profile.cpf ? cpfMask(profile.cpf) : 'Não cadastrado'}`,
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
            workingHours?.startTime
              ? [
                  `Entrada\n${workingHours?.startTime}`,
                  `I. Intervalo\n${workingHours?.startInterval}`,
                  `F. Intervalo\n${workingHours?.endInterval}`,
                  `Saída\n${workingHours?.endTime}`,
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
            services.length > 0
              ? ['Implementar Lógica']
              : ['Nenhum serviço atribuído.']
          }
        />
      </TouchableItem>
    </Screen>
  );
}
