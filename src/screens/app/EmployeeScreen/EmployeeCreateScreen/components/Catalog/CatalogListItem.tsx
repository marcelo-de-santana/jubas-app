import {ListRenderItemInfo} from 'react-native';
import {useEmployeeCreateService} from '../useEmployeeCreateService';
import {HandleSpecialtiesFunctions, SelectedSpecialtiesState} from '../types';

import {CategoryItem} from './CategoryItem';
import {SpecialtyList} from './SpecialtyList';
import {CategorySpecialtiesResponse} from '@domain';

export type CatalogListItemProps =
  ListRenderItemInfo<CategorySpecialtiesResponse> &
    SelectedSpecialtiesState &
    HandleSpecialtiesFunctions;

export function CatalogListItem({
  item: category,
  addSpecialty,
  removeSpecialty,
  selectedSpecialties,
}: Readonly<CatalogListItemProps>) {
  const {useServicesListItemFunctions} = useEmployeeCreateService;
  const {name, specialties} = category;

  const {hasSpecialties, isSelected} = useServicesListItemFunctions({
    selectedSpecialties,
    specialties,
  });

  if (hasSpecialties) {
    return (
      <CategoryItem label={name}>
        <SpecialtyList
          addSpecialty={addSpecialty}
          removeSpecialty={removeSpecialty}
          isSelected={isSelected}
          specialties={specialties}
        />
      </CategoryItem>
    );
  }
}
