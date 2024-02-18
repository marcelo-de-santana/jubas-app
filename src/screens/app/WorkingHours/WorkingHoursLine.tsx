import { BoxFourItems } from '@components';
import {WorkingHourResponse} from '@domain';
import {ColorName, colors} from '@styles';
import {View} from 'react-native';

export interface WorkingHoursLineProps {
  item: WorkingHourResponse;
  workingHourId?: string;
  onPress?: (id: string) => void;
}

export function WorkingHoursLine({
  item,
  workingHourId,
  onPress,
}: Readonly<WorkingHoursLineProps>) {
  let $boxStyle: ColorName = 'lightGray';
  let $boxDisable = false;

  if (item.id === workingHourId) {
    $boxStyle = 'lavenderGray';
    $boxDisable = true;
  }

  return (
    <View
      style={{
        marginVertical: 10,
      }}>
      <BoxFourItems
        style={{
          backgroundColor: colors[$boxStyle],
          borderRadius: 6,
          padding: 10,
        }}
        textValues={[
          item.startTime,
          item.startInterval,
          item.endInterval,
          item.endTime,
        ]}
        disabled={$boxDisable ? undefined : 'box'}
        onPress={onPress && (() => onPress(item?.id))}
      />
    </View>
  );
}
