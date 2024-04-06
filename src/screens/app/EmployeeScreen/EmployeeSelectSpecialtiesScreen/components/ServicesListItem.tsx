import { useEmployeeCreateService } from '../../EmployeeCreateScreen/components/functions';
import { SpecialtyListItemProps } from '../../EmployeeCreateScreen/components/types';
import {CategoryItem} from './CategoryItem';
import {SpecialtyList} from './SpecialtyList';

export function ServicesListItem({
  item: category,
  addSpecialty,
  removeSpecialty,
  selectedSpecialties,
}: Readonly<SpecialtyListItemProps>) {
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
