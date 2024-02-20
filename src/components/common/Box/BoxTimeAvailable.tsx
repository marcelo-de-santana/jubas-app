import {ScheduleTimeResponse} from '@domain';
import {BoxItem, BoxItemProps} from './BoxItem';

interface BoxTimeAvailableProps extends BoxItemProps {
  scheduleTime: ScheduleTimeResponse;
}

export function BoxTimeAvailable({
  scheduleTime: {isAvailable, time},
  ...props
}: Readonly<BoxTimeAvailableProps>) {
  const $textColor = isAvailable ? 'black' : 'red';
  return (
    <BoxItem
      key={time}
      style={{
        justifyContent: 'center',
        padding: 5,
      }}
      textProps={{
        size: 'L',
        color: $textColor,
      }}
      label={time}
      disabled={!isAvailable}
      {...props}
    />
  );
}
