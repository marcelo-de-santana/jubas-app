import {
  Screen,
  ButtonSuccess,
  ModalStatus,
  AlertMessageType,
} from '@components';
import {EmployeeStackProps} from '@routes';
import {BoxProfile} from './components/Profile/BoxProfile';
import {BoxCatalog} from './components/Catalog/BoxCatalog';
import {useEmployeeCreate} from '@domain';
import {useEmployeeCreateService} from './components/useEmployeeCreateService';
import {BoxWorkingHour} from './components/WorkingHour/BoxWorkingHour';

export function EmployeeCreateScreen({
  navigation,
}: EmployeeStackProps<'EmployeeCreateScreen'>) {
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

  const {mutate, isSuccess, isError, isPending} = useEmployeeCreate();

  const createEmployee = () => {
    if (hasProfile && hasWorkingHour && hasSpecialties) {
      mutate({
        profileId: profile.id,
        workingHourId: workingHour.id,
        specialties: getSpecialtyIds(specialties),
      });
    }
  };

  return (
    <Screen flex={1}>
      <ModalStatus
        isSuccess={isSuccess}
        isError={isError}
        customMessage={$customStatus}
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
        <BoxCatalog
          addSpecialty={addSpecialty}
          removeSpecialty={removeSpecialty}
          selectedSpecialties={specialties}
        />
      )}
      {hasProfile && hasWorkingHour && (
        <ButtonSuccess
          loading={isPending}
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

const $customStatus: AlertMessageType = {
  success: 'Funcionário cadastrado com sucesso.',
};
