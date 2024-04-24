import {ButtonDangerOutline, NavigationHeader, Screen, Text} from '@components';
import {useScheduleRemoveDaysWithoutAttendance} from '@domain';
import {Modal} from 'react-native';

export function ModalRemove({
  isVisible,
  close,
  selectedDate,
}: {
  isVisible: boolean;
  close: () => void;
  selectedDate?: string;
}) {
  const {isPending, mutate} = useScheduleRemoveDaysWithoutAttendance();

  const sendToDelete = () => {
    if (selectedDate) {
      mutate([selectedDate]);
      close();
    }
  };

  return (
    <Modal visible={isVisible} onRequestClose={close}>
      <NavigationHeader leftIconProps={{onPress: close}} />
      <Screen flex={1} justifyContent="center">
        <Text variant="paragraphMedium" color="red">
          Deseja remover o dia bloqueado?
        </Text>
        <ButtonDangerOutline
          loading={isPending}
          mt="s32"
          flex={0}
          title="Confirmar"
          onPress={sendToDelete}
        />
      </Screen>
    </Modal>
  );
}
