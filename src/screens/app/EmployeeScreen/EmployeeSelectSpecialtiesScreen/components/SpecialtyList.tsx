import {Box, TouchableOpacityItem} from '@components';
import {Separator} from './Separator';
import {SpecialtyListProps} from '../../EmployeeCreateScreen/components/types';

export function SpecialtyList({
  specialties,
  isSelected,
  addSpecialty,
  removeSpecialty,
}: Readonly<SpecialtyListProps>) {
  return specialties?.map((specialty, index, array) => {
    const hasNext = index !== array.length - 1;

    const specialtyIsSelected = isSelected(specialty);

    const colorItem = specialtyIsSelected
      ? 'secondaryContrast'
      : 'primaryContrast';

    const onPressFunction = specialtyIsSelected
      ? () => removeSpecialty(specialty)
      : () => addSpecialty(specialty);

    return (
      <Box key={specialty.id}>
        <TouchableOpacityItem
          textProps={{color: colorItem}}
          label={specialty.name}
          onPress={onPressFunction}
        />
        {hasNext && <Separator borderColor="secondaryContrast" />}
      </Box>
    );
  });
}
