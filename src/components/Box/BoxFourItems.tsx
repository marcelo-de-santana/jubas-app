import {BoxItem} from '@components';
import {TouchableOpacity} from '../TouchableOpacity/TouchableOpacity';
import {Dimensions} from 'react-native';

// 'lavender-gray' | 'light-gray'
interface ListTimeProps {
  textValues?: string[];
  onPress?: () => void;
  disabled?: 'box' | 'item';
}

export function BoxFourItems({
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
      flexDirection="row"
      justifyContent="space-between"
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
          textProps={{textAlign: 'center'}}
          disabled={$prop.item.disabled}
          onPress={$prop.item.onPress}
        />
      ))}
    </TouchableOpacity>
  );
}
