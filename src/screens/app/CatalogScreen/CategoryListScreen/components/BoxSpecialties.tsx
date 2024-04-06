import {Box} from '@components';
import {SpecialtyResponse} from '@domain';
import {SpecialtyItem} from './SpecialtyItem';
import {ReactNode} from 'react';

type BoxSpecialtiesProps = {
  children?: ReactNode;
  specialties?: SpecialtyResponse[];
  onPressToNavigate: (specialty: SpecialtyResponse) => void;
};

export function BoxSpecialties({
  children,
  onPressToNavigate,
  specialties,
}: Readonly<BoxSpecialtiesProps>) {
  return (
    <Box backgroundColor="secondary" borderRadius="s6">
      {specialties?.map(specialty => {
        return (
          <SpecialtyItem
            key={specialty.id}
            specialty={specialty}
            isSeparator
            onPress={() => onPressToNavigate(specialty)}
          />
        );
      })}
      {children}
    </Box>
  );
}
