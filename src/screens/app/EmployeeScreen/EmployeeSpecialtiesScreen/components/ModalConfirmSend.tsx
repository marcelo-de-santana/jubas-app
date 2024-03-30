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
import {BusinessManagementStackProps} from '@routes';
import {useState} from 'react';
import {Modal as RNModal} from 'react-native';

type ModalConfirmSendProps = {
  employee: EmployeeResponse;
  specialties?: SpecialtyResponse[];
} & Pick<
  BusinessManagementStackProps<'EmployeeSpecialtiesScreen'>,
  'navigation'
>;

export function ModalConfirmSend({
  navigation,
  employee,
  specialties,
}: Readonly<ModalConfirmSendProps>) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const openModal = () => {
    setIsVisible(true);
  };
  const closeModal = () => {
    setIsVisible(false);
  };

  const {fetch, isLoading, status} = employeeUseCases.update();

  const sendData = () => {
    const ids = specialties?.map(specialty => specialty.id);
    fetch({employeeId: employee.id, specialties: ids});
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

          {specialties?.length === 0 && (
            <Text variant="paragraphMedium">
              Todas as especialidades serão removidas.
            </Text>
          )}
          <Text variant="paragraphMedium" color="red">
            Os agendamentos não serão modificados.
          </Text>

          <Box backgroundColor="primaryContrast" borderRadius="s6" margin="s10">
            {specialties?.map(specialty => (
              <BoxItem
                key={specialty.id}
                textProps={{color: 'primary'}}
                padding="s10"
                label={specialty.name}
              />
            ))}
          </Box>

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
