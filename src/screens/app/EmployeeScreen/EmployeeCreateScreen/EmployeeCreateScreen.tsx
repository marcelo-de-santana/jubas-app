import {Screen, ButtonSuccess, ModalStatus, AlertStatusType} from '@components';
import {BusinessManagementStackProps} from '@routes';
import {BoxProfile} from './components/BoxProfile';
import {BoxWorkingHour} from './components/BoxWorkingHour';
import {BoxSpecialties} from './components/BoxSpecialties';
import {useEmployeeCreateService} from '@services';
import {employeeUseCases} from '@domain';

export function EmployeeCreateScreen({
  navigation,
}: Readonly<BusinessManagementStackProps<'EmployeeCreateScreen'>>) {
  const {
    employee,
    addSpecialty,
    removeSpecialty,
    selectParams,
    getSpecialtyIds,
  } = useEmployeeCreateService.useEmployeeStateFunctions();

  const {profile, specialties, workingHour} = employee;
  const hasProfile = !!profile;
  const hasWorkingHour = !!workingHour;
  const hasSpecialties = !!specialties;

  const {status, fetch, isLoading} = employeeUseCases.create();

  const createEmployee = () => {
    if (hasProfile && hasWorkingHour && hasSpecialties) {
      fetch({
        profileId: profile.id,
        workingHourId: workingHour.id,
        specialties: getSpecialtyIds(specialties),
      });
    }
  };

  return (
    <Screen flex={1}>
      <ModalStatus
        status={status}
        customStatus={$customStatus}
        successAction={navigation.goBack}
      />

      <BoxProfile selectParams={selectParams} selectedProfile={profile} />

      {hasProfile && (
        <BoxWorkingHour
          selectedWorkingHour={workingHour}
          selectParams={selectParams}
        />
      )}
      {hasWorkingHour && (
        <BoxSpecialties
          addSpecialty={addSpecialty}
          removeSpecialty={removeSpecialty}
          selectedSpecialties={specialties}
        />
      )}
      {hasProfile && hasWorkingHour && (
        <ButtonSuccess
          flex={0}
          loading={isLoading}
          style={{position: 'absolute', bottom: 10, left: 20, right: 20}}
          textProps={{variant: 'paragraphLarge', color: 'secondary'}}
          backgroundColor="secondaryContrast"
          onPress={createEmployee}
          title="Salvar"
        />
      )}
    </Screen>
  );
}

const $customStatus: AlertStatusType = {
  201: ['SUCCESS', 'Funcionário cadastrado com sucesso.'],
};
