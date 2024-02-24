import {Box, Text} from '@components';
import {ScheduleStackProps} from '@routes';

export function ClientDescription({
  route,
}: Readonly<Pick<ScheduleStackProps<'ScheduleResumeScreen'>, 'route'>>) {
  return (
    <Box>
      <Text variant="paragraphMedium" textAlign="justify">
        Descrição do cliente
      </Text>
      <Box borderRadius="s6" padding="s12">
        <Text color="primaryContrast" textAlign="justify">
          {`Nome: ${route.params.profile.name}`}
        </Text>
      </Box>
    </Box>
  );
}
