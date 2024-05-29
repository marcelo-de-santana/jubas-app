import {BoxConfirm, Text} from '@components';
import {SpecialtyResponse, useEmployeeUpdate} from '@domain';
import {EmployeeStackProps} from '@routes';
import {SpecialtyResume} from './components/SpecialtyResume';

export function EmployeeSpecialtiesConfirmScreen({
  navigation,
  route,
}: EmployeeStackProps<'EmployeeSpecialtiesConfirmScreen'>) {
  const {mutate, isPending, isError, isSuccess} = useEmployeeUpdate();

  const {employee, assignedSpecialties} = route.params;

  const {addedSpecialties, keptSpecialties, removedSpecialties} =
    categorizeSpecialties(employee.specialties, assignedSpecialties);

  const sendData = () => {
    const specialtiesToSend = [...removedSpecialties, ...addedSpecialties];
    mutate({employeeId: employee.id, specialties: getIds(specialtiesToSend)});
  };

  const goBackTwoScreens = () => {
    navigation.goBack();
    navigation.goBack();
  };

  return (
    <BoxConfirm
      isLoading={isPending}
      modalStatusProps={{
        isError,
        isSuccess,
        errorAction: goBackTwoScreens,
        successAction: goBackTwoScreens,
      }}
      buttonProps={{
        cancelButtonProps: {onPress: navigation.goBack},
        confirmButtonProps: {onPress: sendData},
      }}>
      <SpecialtyResume
        specialties={keptSpecialties}
        headerTitleOneElement="Será mantido"
        headerTitleManyElements="Serão mantidos"
      />

      <SpecialtyResume
        specialties={addedSpecialties}
        headerTitleOneElement="Será adicionado"
        headerTitleManyElements="Serão adicionados"
      />

      <SpecialtyResume
        specialties={removedSpecialties}
        headerTitleOneElement="Será removido"
        headerTitleManyElements="Serão removidos"
      />

      <Text variant="paragraphMedium" color="red">
        Os agendamentos não serão modificados.
      </Text>
    </BoxConfirm>
  );
}

const categorizeSpecialties = (
  employeeSpecialties: SpecialtyResponse[],
  assignedSpecialties?: SpecialtyResponse[],
) => {
  const addedSpecialties: SpecialtyResponse[] = [];
  const removedSpecialties: SpecialtyResponse[] = [];
  const keptSpecialties: SpecialtyResponse[] = [];

  const isAssociated = (assignedSpecialty: SpecialtyResponse) => {
    return employeeSpecialties.some(
      currentSpecialty => currentSpecialty.id === assignedSpecialty.id,
    );
  };

  const isAssigned = (specialty: SpecialtyResponse) => {
    return assignedSpecialties?.some(
      assignedSpecialty => assignedSpecialty.id == specialty.id,
    );
  };

  employeeSpecialties.forEach(specialty => {
    if (isAssigned(specialty)) {
      keptSpecialties.push(specialty);
    } else {
      removedSpecialties.push(specialty);
    }
  });

  assignedSpecialties?.forEach(assignedSpecialty => {
    if (!isAssociated(assignedSpecialty)) {
      addedSpecialties.push(assignedSpecialty);
    }
  });

  return {addedSpecialties, removedSpecialties, keptSpecialties};
};

const getIds = (specialties: SpecialtyResponse[]) => {
  return specialties?.map(specialty => specialty.id);
};
