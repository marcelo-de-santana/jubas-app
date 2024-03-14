import RNDateTimePicker, {
  WindowsNativeProps as RNDateTimePickerProps,
} from '@react-native-community/datetimepicker';
import {mask} from '@utils';

interface ClockPickerProps extends Omit<RNDateTimePickerProps, 'value'> {
  isVisible?: boolean;
  time?: string;
}

export function ClockPicker({
  isVisible = false,
  time = '10:00',
  ...props
}: Readonly<ClockPickerProps>) {
  if (isVisible) {
    return (
      <RNDateTimePicker
        {...props}
        is24Hour
        mode="time"
        value={mask.timeToTimestamp({
          time,
        })}
        display="default"
      />
    );
  }
}
