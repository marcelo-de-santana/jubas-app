import {mask} from '@utils';
import {useState} from 'react';
import {ClockPicker} from './ClockPicker';
import {Button, ButtonProps} from '@components';

interface ButtonClockProps extends Omit<ButtonProps, 'title'> {
  timeState: string;
  setTimeState: (time: string) => void;
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
        backgroundColor="primary"
        textProps={{variant: 'paragraphMedium', color: 'primaryContrast'}}
        title={timeState}
        onPress={() => setIsVisibleWatch(true)}
        {...props}
      />
    </>
  );
}
