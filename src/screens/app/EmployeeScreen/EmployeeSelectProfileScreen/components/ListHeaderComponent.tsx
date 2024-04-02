import {Box} from '@components';
import {LineItens} from './LineItens';

export function ListHeaderComponent() {
  return (
    <Box flexDirection="row" justifyContent="space-between" px="s12">
      <LineItens
        textValues={['Nome', 'CPF', 'Status']}
        textProps={{variant: 'paragraphSmall'}}
      />
    </Box>
  );
}
