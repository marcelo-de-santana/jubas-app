import {Box} from '../Box';
import {ProfileItems} from './ProfileItems';

export function ProfileListHeader() {
  return (
    <Box flexDirection="row" justifyContent="space-between" px="s12">
      <ProfileItems
        textValues={['Nome', 'CPF', 'Status']}
        textProps={{variant: 'paragraphSmall'}}
      />
    </Box>
  );
}
