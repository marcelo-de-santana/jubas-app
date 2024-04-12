import {Box} from '../Box';
import {Text} from '../Text/Text';

export function ClientDescription({name}: {name?: string}) {
  return (
    <Box>
      <Text variant="paragraphMedium" textAlign="justify">
        Descrição do cliente
      </Text>
      <Box borderRadius="s6" padding="s12">
        <Text color="primaryContrast" textAlign="justify">
          {`Nome: ${name}`}
        </Text>
      </Box>
    </Box>
  );
}
