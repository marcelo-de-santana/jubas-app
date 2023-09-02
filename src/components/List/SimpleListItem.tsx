import {text, theme} from '@styles';
import {Text, TouchableOpacity, View} from 'react-native';
import {ListItemProps} from './ListTypes';

export function SimpleListItem({
  children,
  onPress,
  title,
  textValues,
}: ListItemProps) {
  return (
    <TouchableOpacity style={theme.blueBoxItems} onPress={onPress}>
      {textValues ? (
        <View
          style={theme.boxFlexRow}>
          {textValues.map((value, index) => (
            <Text key={index} style={text.whiteText16}>
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
