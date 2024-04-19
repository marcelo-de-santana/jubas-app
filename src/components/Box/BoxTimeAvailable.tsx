import {ThemeColors} from '@styles';
import {
  TouchableOpacityItem,
  TouchableOpacityItemPros,
} from '../TouchableOpacity';
import {ScheduleTimeResponse} from '@domain';

interface BoxTimeAvailableProps extends TouchableOpacityItemPros {
  scheduleTime: ScheduleTimeResponse;
}

export function BoxTimeAvailable({
  scheduleTime: {available, time},
  ...props
}: Readonly<BoxTimeAvailableProps>) {
  const $textColor: ThemeColors = available ? 'secondaryContrast' : 'red';
  return (
    <TouchableOpacityItem
      key={time}
      backgroundColor="secondary"
      justifyContent="center"
      marginHorizontal="s4"
      marginVertical="s4"
      borderRadius="s6"
      padding="s8"
      width="20%"
      textProps={{
        variant: 'paragraphSmall',
        color: $textColor,
      }}
      label={time}
      disabled={!available}
      {...props}
    />
  );
}
