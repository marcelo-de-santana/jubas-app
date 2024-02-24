import {Box, Text} from '@components';
import {ProfileResponse} from '@domain';

export function AttendanceDescription({
  employee,
  hour,
}: Readonly<{employee: Pick<ProfileResponse, 'id' | 'name'>; hour: string}>) {
  return (
    <Box>
      <Text variant="paragraphMedium" textAlign="justify">
        Descrição do atendimento
      </Text>
      <Box borderRadius="s6" padding="s12">
        <Text color="primaryContrast" textAlign="justify">
          {`Nome do barbeiro: ${employee.name}`}
        </Text>
        <Text color="primaryContrast" textAlign="justify">
          {`Horário: ${hour}`}
        </Text>
      </Box>
    </Box>
  );
}
