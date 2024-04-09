import {
  ProfileUserResponse,
  SpecialtyResponse,
  WorkingHourResponse,
} from '@domain';

export type EmployeeState = {
  profile?: ProfileUserResponse;
  workingHour?: WorkingHourResponse;
  specialties?: SpecialtyResponse[];
};

export type SelectEmployeeParamsFunction = {
  selectParams: ({profile, workingHour, specialties}: EmployeeState) => void;
};

export type HandleSpecialtiesFunctions = {
  addSpecialty: (specialty: SpecialtyResponse) => void;
  removeSpecialty: (specialty: SpecialtyResponse) => void;
};

export type SelectedProfileState = {
  selectedProfile: EmployeeState['profile'];
};

export type SelectedWorkingHourState = {
  selectedWorkingHour?: EmployeeState['workingHour'];
};

export type SelectedSpecialtiesState = {
  selectedSpecialties: EmployeeState['specialties'];
};

export type ChooseProfileFunction = {
  chooseProfile: (profile: ProfileUserResponse) => void;
};

export type ChooseWorkingHourFunction = {
  chooseWorkingHour: (workingHour: WorkingHourResponse) => void;
};
