import {ModalStatus} from '@components';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useScheduleAddDaysWithoutAttendance} from '@domain';
import {mask} from '@utils';

export function Calendar({
  isVisible,
  close,
}: {
  isVisible: boolean;
  close: () => void;
}) {
  const {mutate, isError, isSuccess} = useScheduleAddDaysWithoutAttendance();

  const onChange = (event: any, selectedDate: any) => {
    if (event.type === 'dismissed') {
      close();
    }
    if (event.type === 'set') {
      close();
      mutate([mask.formatDate(new Date(selectedDate))]);
    }
  };

  return (
    <>
      <ModalStatus isError={isError} isSuccess={isSuccess} />
      {isVisible && (
        <DateTimePicker
          mode="date"
          value={new Date()}
          onTouchCancel={close}
          onChange={onChange}
          locale="pt-BR"
        />
      )}
    </>
  );
}
