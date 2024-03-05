import {mask} from '@utils';
import {Dispatch, SetStateAction, useState} from 'react';
import {ClockPicker} from './ClockPicker';
import {Button, ButtonProps} from '@components';

interface ButtonClockProps extends Omit<ButtonProps, 'title'> {
  timeState: string;
  setTimeState: Dispatch<SetStateAction<string>>;
}

export function ClockButton({
  timeState = '10:00',
  setTimeState,
  ...props
}: Readonly<ButtonClockProps>) {
  const [isVisibleWatch, setIsVisibleWatch] = useState(false);

  const closeWatch = () => {
    setIsVisibleWatch(false);
  };

  const onChangeDateTimePicker = (event: any, selectedTime: any) => {
    if (event.type === 'dismissed') {
      closeWatch();
    }
    if (event.type === 'set') {
      closeWatch();
      const timeFormatted = mask.timestampToTimeFormat({
        time: selectedTime?.getTime(),
      });
      setTimeState(timeFormatted);
    }
  };

  return (
    <>
      <ClockPicker
        isVisible={isVisibleWatch}
        time={timeState}
        onTouchCancel={closeWatch}
        onChange={onChangeDateTimePicker}
      />
      <Button
        width="20%"
        borderRadius="s6"
        height={40}
        justifyContent="center"
        textProps={{variant: 'paragraphMedium', color: 'primary'}}
        title={timeState}
        onPress={() => setIsVisibleWatch(true)}
        {...props}
      />
    </>
  );
}
