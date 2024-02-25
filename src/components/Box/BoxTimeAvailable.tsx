import {ThemeColors} from '@styles';
import {
  TouchableOpacityItem,
  TouchableOpacityItemPros,
} from '../TouchableOpacity';
import {ScheduleTimeAvailableResponse} from '@domain';

interface BoxTimeAvailableProps extends TouchableOpacityItemPros {
  scheduleTime: ScheduleTimeAvailableResponse;
}

export function BoxTimeAvailable({
  scheduleTime: {isAvailable, time},
  ...props
}: Readonly<BoxTimeAvailableProps>) {
  const $textColor: ThemeColors = isAvailable ? 'secondaryContrast' : 'red';
  return (
    <TouchableOpacityItem
      key={time}
      backgroundColor="secondary"
      justifyContent="center"
      marginHorizontal="s4"
      marginVertical="s4"
      borderRadius="s6"
      padding="s8"
      textProps={{
        variant: 'paragraphSmall',
        color: $textColor,
      }}
      label={time}
      disabled={!isAvailable}
      {...props}
    />
  );
}
