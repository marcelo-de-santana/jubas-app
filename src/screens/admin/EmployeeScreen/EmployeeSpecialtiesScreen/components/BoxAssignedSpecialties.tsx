import {Box, Text, TouchableOpacityItem} from '@components';
import {SpecialtyResponse} from '@domain';

interface BoxAssignedSpecialtiesProps {
  specialties?: SpecialtyResponse[];
  removeSpecialty: (specialty: SpecialtyResponse) => void;
}

export function BoxAssignedSpecialties({
  specialties,
  removeSpecialty,
}: Readonly<BoxAssignedSpecialtiesProps>) {
  return (
    <Box marginTop="s10">
      <Text variant="paragraphLarge" textAlign="justify">
        Atribuídas
      </Text>
      <Box
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="space-between"
        marginVertical="s10">
        {specialties?.map(specialty => {
          return (
            <TouchableOpacityItem
              key={specialty.id}
              padding="s10"
              marginBottom="s4"
              backgroundColor="primaryContrast"
              borderRadius="s6"
              textProps={{
                variant: 'paragraphVerySmall',
                textAlign: 'justify',
                color: 'primary',
              }}
              label={specialty.name}
              onPress={() => removeSpecialty(specialty)}
            />
          );
        })}
      </Box>
    </Box>
  );
}
