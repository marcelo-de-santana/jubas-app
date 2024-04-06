import {
  CategorySpecialtiesResponse,
  ProfileUserResponse,
  SpecialtyResponse,
  WorkingHourResponse,
} from '@domain';
import {ListRenderItemInfo} from 'react-native';

export type EmployeeUseState = {
  employee: EmployeeState;
};

export type EmployeeState = {
  profile?: ProfileUserResponse;
  workingHour?: WorkingHourResponse;
  specialties?: SpecialtyResponse[];
};

type HandleEmployeeFunction = {
  selectParams: ({profile, workingHour, specialties}: EmployeeState) => void;
  addSpecialty: (specialty: SpecialtyResponse) => void;
  removeSpecialty: (specialty: SpecialtyResponse) => void;
};

export type SelectEmployeeParamsFunction = Pick<
  HandleEmployeeFunction,
  'selectParams'
>;

export type HandleSpecialtiesFunctions = Omit<
  HandleEmployeeFunction,
  'selectParams'
>;

export type SelectedProfileState = {
  selectedProfile: EmployeeState['profile'];
};

export type SelectedWorkingHourState = {
  selectedWorkingHour?: EmployeeState['workingHour'];
};

export type SelectedSpecialtiesState = {
  selectedSpecialties: EmployeeState['specialties'];
};

export type BoxProfileProps = SelectedProfileState &
  SelectEmployeeParamsFunction;

export type BoxWorkingHourProps = SelectedWorkingHourState &
  SelectEmployeeParamsFunction;

export type EmployeeSelectSpecialtiesScreenProps = SelectedSpecialtiesState &
  HandleSpecialtiesFunctions;

export type ChooseProfileFunction = {
  chooseProfile: (profile: ProfileUserResponse) => void;
};

export type ChooseWorkingHourFunction = {
  chooseWorkingHour: (workingHour: WorkingHourResponse) => void;
};

export type EmployeeSelectProfileScreenProps = SelectedProfileState &
  ChooseProfileFunction;

export type EmployeeSelectWorkingHourScreenProps = SelectedWorkingHourState &
  ChooseWorkingHourFunction;

export type ProfileListItemProps = ListRenderItemInfo<ProfileUserResponse> &
  SelectedProfileState &
  ChooseProfileFunction;

export type WorkingHourListItemProps = ListRenderItemInfo<WorkingHourResponse> &
  ChooseWorkingHourFunction &
  SelectedWorkingHourState;

export type SpecialtyListItemProps =
  ListRenderItemInfo<CategorySpecialtiesResponse> &
    SelectedSpecialtiesState &
    HandleSpecialtiesFunctions;

export type SpecialtyListProps = {
  specialties?: SpecialtyResponse[];
  isSelected: (specialty: SpecialtyResponse) => boolean | undefined;
} & HandleSpecialtiesFunctions;
