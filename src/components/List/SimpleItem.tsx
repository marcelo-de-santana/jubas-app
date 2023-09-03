import {text, theme} from '@styles';
import {Text, TouchableOpacity, View} from 'react-native';
import {ListItemProps} from './ListTypes';

export function SimpleItem({
  children,
  onPress,
  textValues,
}: ListItemProps) {
  return (
    <TouchableOpacity style={theme.boxItems} onPress={onPress}>
      {textValues ? (
        <View
          style={theme.boxFlexRow}>
          {textValues.map((value, index) => (
            <Text key={index} style={text.blueText14}>
              {value}
            </Text>
          ))}
        </View>
      ) : (
        ''
      )}
      {children}
    </TouchableOpacity>
  );
}
