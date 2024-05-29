import {SpecialtyResponse} from '@domain';
import {useState} from 'react';
import { EmployeeState, SelectedSpecialtiesState } from './types';

const useServicesListItemFunctions = ({
  selectedSpecialties,
  specialties,
}: SelectedSpecialtiesState & {specialties?: SpecialtyResponse[]}) => {
  const hasSpecialties = specialties && specialties.length > 0;

  const isSelected = (specialty: SpecialtyResponse) => {
    if (selectedSpecialties) {
      return selectedSpecialties.some(item => item.id === specialty.id);
    }
  };

  return {
    hasSpecialties,
    isSelected,
  };
};

const useEmployeeStateFunctions = () => {
  const [employee, setEmployee] = useState<EmployeeState>({});

  const selectParams = (params: EmployeeState) => {
    setEmployee(prev => ({...prev, ...params}));
  };

  const addSpecialty = (specialty: SpecialtyResponse) => {
    const newArray = employee.specialties ? [...employee.specialties] : [];
    newArray.push(specialty);
    selectParams({specialties: newArray});
  };

  const removeSpecialty = (specialty: SpecialtyResponse) => {
    const newArray = employee.specialties?.filter(
      current => current.id !== specialty.id,
    );
    selectParams({specialties: newArray});
  };

  const getSpecialtyIds = (specialties: SpecialtyResponse[]) =>
    specialties.map(specialty => specialty.id);

  return {
    employee,
    selectParams,
    addSpecialty,
    removeSpecialty,
    getSpecialtyIds,
  };
};

export const useEmployeeCreateService = {
  useServicesListItemFunctions,
  useEmployeeStateFunctions,
};
