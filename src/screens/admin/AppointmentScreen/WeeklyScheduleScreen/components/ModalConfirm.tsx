import {
  Box,
  ButtonSuccess,
  ModalStatus,
  NavigationHeader,
  Screen,
  Text,
} from '@components';
import {useScheduleUpdateRangeOfAttendanceDays} from '@domain';
import {VisibilityResponse} from '@hooks';
import {Modal} from 'react-native';

export function ModalConfirm({
  selectedQuantity,
  quantity,
  close,
  isVisible,
}: Pick<VisibilityResponse, 'isVisible' | 'close'> & {
  quantity?: number;
  selectedQuantity?: number;
}) {
  const {mutate, isPending, isError, isSuccess} =
    useScheduleUpdateRangeOfAttendanceDays();

  const sendData = () => {
    if (selectedQuantity) {
      mutate(selectedQuantity);
    }
  };
  return (
    <>
      <ModalStatus
        isError={isError}
        isSuccess={isSuccess}
        successAction={close}
      />
      <Modal animationType="fade" visible={isVisible} onRequestClose={close}>
        <NavigationHeader leftIconProps={{onPress: close}} />
        <Screen flex={1}>
          <Box flex={1} justifyContent="center">
            <Text variant="paragraphMedium" px="s12" textAlign="justify">
              Deseja alterar o intervalo da agenda de 0{quantity} para 0
              {selectedQuantity} dias?
            </Text>
            <ButtonSuccess
              loading={isPending}
              onPress={sendData}
              bg="secondaryContrast"
              mt="s32"
              textProps={{variant: 'paragraphMedium', color: 'secondary'}}
              title="Confirmar"
            />
          </Box>
        </Screen>
      </Modal>
    </>
  );
}
