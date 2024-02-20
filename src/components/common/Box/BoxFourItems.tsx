import {BoxItem} from '@components';
import {Dimensions, TouchableOpacity, ViewStyle} from 'react-native';

// 'lavender-gray' | 'light-gray'
interface ListTimeProps {
  style?: ViewStyle;
  textValues?: string[];
  onPress?: () => void;
  disabled?: 'box' | 'item';
}

export function BoxFourItems({
  style,
  textValues,
  disabled,
  onPress,
}: Readonly<ListTimeProps>) {
  //CHECK BOX DISABLED AND PRESS ACTION
  let $prop = {
    box: {disabled: true, onPress: () => {}},
    item: {disabled: true, onPress: () => {}},
  };

  if (onPress) {
    if (disabled === 'box' || disabled === 'item') {
      $prop[disabled].disabled = false;
      $prop[disabled].onPress = onPress;
    }
  }

  const {width} = Dimensions.get('screen');
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        ...style,
      }}
      disabled={$prop.box.disabled}
      onPress={$prop.box.onPress}>
      {textValues?.map(item => (
        <BoxItem
          label={item}
          key={item}
          style={{
            width: width * 0.2,
            justifyContent: 'center',
          }}
          textProps={{align: 'center'}}
          disabled={$prop.item.disabled}
          onPress={$prop.item.onPress}
        />
      ))}
    </TouchableOpacity>
  );
}
