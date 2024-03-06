import {Box, IconCheckBox, Text} from '@components';

export function HeaderWorkingHour({
  statusProfile,
}: Readonly<{statusProfile: boolean}>) {
  return (
    <Box flexDirection="row" justifyContent="space-between">
      <Text
        color="secondaryContrast"
        textAlign="justify"
        verticalAlign="middle">
        Horários
      </Text>
      <IconCheckBox
        label={`Perfil ${statusProfile ? 'ativo' : 'inativo'}`}
        textProps={{color: 'primary'}}
        iconProps={{color: statusProfile ? 'lightGreen' : 'red'}}
        value={statusProfile}
        onPress={() => console.warn('Modal')}
      />
    </Box>
  );
}
