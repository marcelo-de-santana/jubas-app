import {
  Box,
  BoxItem,
  ButtonSuccess,
  ButtonTwoOptions,
  ModalStatus,
  Screen,
  Text,
} from '@components';
import {EmployeeResponse, SpecialtyResponse, employeeUseCases} from '@domain';
import {useModalVisibility} from '@hooks';
import {BusinessManagementStackProps} from '@routes';
import {Modal as RNModal} from 'react-native';

type ModalConfirmSendProps = {
  employee: EmployeeResponse;
  assignedSpecialties?: SpecialtyResponse[];
} & Pick<
  BusinessManagementStackProps<'EmployeeSpecialtiesScreen'>,
  'navigation'
>;

export function ModalConfirmSend({
  navigation,
  employee,
  assignedSpecialties,
}: Readonly<ModalConfirmSendProps>) {
  const {isVisible, closeModal, openModal} = useModalVisibility();
  const {fetch, isLoading, status} = employeeUseCases.update();
  const {addedSpecialties, keptSpecialties, removedSpecialties} =
    categorizeSpecialties(employee.specialties, assignedSpecialties);

  const sendData = () => {
    const specialtiesToSend = [...removedSpecialties, ...addedSpecialties];
    fetch({employeeId: employee.id, specialties: getIds(specialtiesToSend)});
  };

  return (
    <>
      <ButtonSuccess
        backgroundColor="secondaryContrast"
        style={{
          position: 'absolute',
          elevation: 0.7,
          bottom: 10,
          right: 20,
          left: 20,
        }}
        textProps={{variant: 'paragraphLarge', color: 'secondary'}}
        title="Salvar"
        onPress={openModal}
      />

      <RNModal visible={isVisible} animationType="fade">
        <Screen flex={1} justifyContent="center">
          <Text variant="paragraphVeryLarge" marginBottom="s20">
            Deseja prosseguir?
          </Text>

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

          <ButtonTwoOptions
            cancelButtonProps={{loading: isLoading, onPress: closeModal}}
            confirmButtonProps={{loading: isLoading, onPress: sendData}}
          />
        </Screen>
      </RNModal>
      <ModalStatus
        errorAction={closeModal}
        successAction={navigation.goBack}
        status={status}
      />
    </>
  );
}

interface SpecialtyResumeProps {
  specialties: SpecialtyResponse[];
  headerTitleOneElement: string;
  headerTitleManyElements: string;
}

function SpecialtyResume({
  specialties,
  headerTitleOneElement,
  headerTitleManyElements,
}: Readonly<SpecialtyResumeProps>) {
  return (
    <Box marginBottom="s10">
      {specialties.length > 0 && (
        <Text variant="paragraphMedium" textAlign="justify" marginBottom="s4">
          {specialties.length === 1
            ? headerTitleOneElement
            : headerTitleManyElements}
        </Text>
      )}
      {specialties.map(specialty => (
        <BoxItem
          padding="s10"
          backgroundColor="primaryContrast"
          borderRadius="s6"
          key={specialty.id}
          textProps={{
            textAlign: 'justify',
            color: 'primary',
          }}
          label={specialty.name}
        />
      ))}
    </Box>
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
