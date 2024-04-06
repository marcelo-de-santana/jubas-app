import {Box, ProfileItems} from '@components';

export function ListHeaderComponent() {
  return (
    <Box flexDirection="row" justifyContent="space-between" px="s12">
      <ProfileItems
        textValues={['Nome', 'CPF', 'Status']}
        textProps={{variant: 'paragraphSmall'}}
      />
    </Box>
  );
}
