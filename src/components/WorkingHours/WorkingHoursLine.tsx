import {WorkingHoursResponse} from '@domain';
import {BoxFourItems} from '../List';
import {ColorName, colorRegistry} from '@styles';
import {View} from 'react-native';

export interface WorkingHoursLineProps {
  item: WorkingHoursResponse;
  workingHourId?: number;
  onPress?: (id: number) => void;
}

export function WorkinhHoursLine({
  item,
  workingHourId,
  onPress,
}: WorkingHoursLineProps) {
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
          backgroundColor: colorRegistry[$boxStyle],
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
