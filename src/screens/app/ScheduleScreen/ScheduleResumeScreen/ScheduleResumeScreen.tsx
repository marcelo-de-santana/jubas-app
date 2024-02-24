import {
  AttendanceDescription,
  Box,
  Button,
  ListSeparator,
  Screen,
  SpecialtyDescription,
} from '@components';
import {ScheduleStackProps} from '@routes';
import {ClientDescription} from './components/ClientDescription';

export function ScheduleResumeScreen({
  navigation,
  route,
}: Readonly<ScheduleStackProps<'ScheduleResumeScreen'>>) {
  return (
    <Screen flex={1}>
      <SpecialtyDescription specialty={route.params.specialty} />
      <ListSeparator variant="first" />
      <AttendanceDescription
        employee={route.params.employee}
        hour={route.params.hour}
      />
      <ListSeparator variant="first" />
      <ClientDescription route={route} />
      <Box flexDirection="row" justifyContent="space-between">
        <Button
          borderColor="red"
          borderWidth={1}
          backgroundColor="primary"
          flex={1}
          borderRadius="s10"
          p="s14"
          mr="s4"
          textProps={{variant: 'paragraphMedium', color: 'red'}}
          onPress={() => navigation.goBack()}
          title="Voltar"
        />
        <Button
          backgroundColor="lightGreen"
          flex={1}
          borderRadius="s10"
          p="s14"
          ml="s4"
          textProps={{variant: 'paragraphMedium', color: 'white'}}
          onPress={() => console.warn('Enviar')}
          title="Confirmar"
        />
      </Box>
    </Screen>
  );
}
