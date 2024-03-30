import {
  Box,
  CollapsibleBox,
  ListSeparator,
  TouchableOpacityItem,
} from '@components';
import {
  CategoryResponse,
  CategorySpecialtiesResponse,
  SpecialtyResponse,
} from '@domain';
import {ReactNode} from 'react';
import {ListRenderItemInfo} from 'react-native';

type BoxAvailableSpecialtiesProps =
  ListRenderItemInfo<CategorySpecialtiesResponse> & {
    assignedSpecialties: SpecialtyResponse[];
    addSpecialty: (specialty: SpecialtyResponse) => void;
  };

export function BoxAvailableSpecialties({
  item: category,
  assignedSpecialties,
  addSpecialty,
}: Readonly<BoxAvailableSpecialtiesProps>) {
  const specialtyIsAssigned = (specialtyId: string) => {
    return assignedSpecialties.some(specialty => specialty.id === specialtyId);
  };

  return (
    <Collapsible category={category}>
      {category.specialties?.map(specialty => {
        if (!specialtyIsAssigned(specialty.id)) {
          return (
            <SpecialtyItem
              key={specialty.id}
              specialty={specialty}
              onPress={() => addSpecialty(specialty)}
            />
          );
        }
      })}
    </Collapsible>
  );
}

function Collapsible({
  children,
  category,
}: Readonly<{children: ReactNode; category: CategoryResponse}>) {
  return (
    <CollapsibleBox
      textProps={{variant: 'paragraphSmall', color: 'primary'}}
      title={category.name}>
      <Box backgroundColor="secondary" borderRadius="s6">
        {children}
      </Box>
    </CollapsibleBox>
  );
}

function SpecialtyItem({
  hasSeparator,
  specialty,
  onPress,
}: Readonly<{
  hasSeparator?: boolean;
  specialty: SpecialtyResponse;
  onPress: () => void;
}>) {
  return (
    <Box>
      <TouchableOpacityItem
        padding="s12"
        textProps={{variant: 'paragraphVerySmall', color: 'secondaryContrast'}}
        label={specialty.name}
        onPress={onPress}
      />
      {hasSeparator && <CustomListSeparator />}
    </Box>
  );
}

function CustomListSeparator() {
  return (
    <ListSeparator
      backgroundColor="secondaryContrast"
      borderColor="secondaryContrast"
      borderWidth={0.5}
      marginHorizontal="s14"
    />
  );
}
