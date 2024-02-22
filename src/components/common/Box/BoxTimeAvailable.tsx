import {ScheduleTimeResponse} from '@domain';
import {BoxItem, BoxItemProps} from './BoxItem';
import {ThemeColors} from '@styles';

interface BoxTimeAvailableProps extends BoxItemProps {
  scheduleTime: ScheduleTimeResponse;
}

export function BoxTimeAvailable({
  scheduleTime: {isAvailable, time},
  ...props
}: Readonly<BoxTimeAvailableProps>) {
  const $textColor: ThemeColors = isAvailable ? 'fontPrimary' : 'red';
  return (
    <BoxItem
      key={time}
      backgroundColor="backgroundPrimary"
      justifyContent="center"
      marginHorizontal="s4"
      marginVertical="s10"
      borderRadius="s6"
      padding="s8"
      textProps={{
        fontSize: 'S',
        color: $textColor,
      }}
      label={time}
      disabled={!isAvailable}
      {...props}
    />
  );
}
