import {SpecialtyResponse} from '@domain';
import {mask} from '@utils';
import {Box} from '../Box';
import {Text} from '../Text/Text';

export function SpecialtyDescription({
  specialty,
}: Readonly<{specialty?: SpecialtyResponse}>) {
  return (
    <Box>
      <Text variant="paragraphMedium" textAlign="justify">
        Descrição do serviço
      </Text>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        borderRadius="s6"
        padding="s12">
        <Text color="primaryContrast">{specialty?.name}</Text>
        <Text color="primaryContrast">
          {specialty && mask.money(specialty.price)}
        </Text>
        <Text color="primaryContrast">{specialty?.timeDuration}</Text>
      </Box>
    </Box>
  );
}
