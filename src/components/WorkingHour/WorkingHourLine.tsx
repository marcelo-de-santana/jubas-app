import {BoxFourItems} from '@components';
import {WorkingHourResponse} from '@domain';
import {ThemeColors, theme} from '@styles';
import {View} from 'react-native';

export interface WorkingHourLineProps {
  item: WorkingHourResponse;
  workingHourId?: string;
  onPress?: (id: string) => void;
}

export function WorkingHourLine({
  item,
  workingHourId,
  onPress,
}: Readonly<WorkingHourLineProps>) {
  let $boxStyle: ThemeColors = 'lightGray';
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
          backgroundColor: theme.colors[$boxStyle],
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
