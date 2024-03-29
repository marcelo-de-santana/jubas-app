import {Box, ListSeparator, SpecialtyDescription, Text} from '@components';
import {ScheduleStackProps} from '@routes';

export function Header({
  route,
}: Readonly<Pick<ScheduleStackProps<'ScheduleEmployeesScreen'>, 'route'>>) {
  return (
    <>
      <SpecialtyDescription specialty={route.params.specialty} />
      <ListSeparator mb="s12" />
      <Box>
        <Text variant="paragraphMedium" textAlign="justify">
          Descrição do atendimento
        </Text>
        <Box borderRadius="s6" padding="s12">
          <Text color="primaryContrast" textAlign="justify">
            {`Dia: ${route.params.day}`}
          </Text>
        </Box>
      </Box>
    </>
  );
}
