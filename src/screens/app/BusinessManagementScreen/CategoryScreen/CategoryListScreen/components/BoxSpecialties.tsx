import {Box} from '@components';
import {SpecialtyResponse} from '@domain';
import {SpecialtyItem} from './SpecialtyItem';
import {BusinessManagementStackProps} from '@routes';
import {ReactNode} from 'react';

type BoxSpecialtiesProps = {
  children?: ReactNode;
  specialties: SpecialtyResponse[];
} & Pick<BusinessManagementStackProps<'CategoryListScreen'>, 'navigation'>;

export function BoxSpecialties({
  children,
  navigation,
  specialties,
}: Readonly<BoxSpecialtiesProps>) {
  const navigateToSpecialtyUpdate = () =>
    navigation.navigate('SpecialtyUpdateScreen');

  return (
    <Box backgroundColor="secondary" borderRadius="s6">
      {specialties.map(specialty => {
        return (
          <SpecialtyItem
            key={specialty.id}
            specialty={specialty}
            isSeparator
            onLongPress={navigateToSpecialtyUpdate}
          />
        );
      })}
      {children}
    </Box>
  );
}
