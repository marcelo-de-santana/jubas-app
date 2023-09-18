import {text, theme} from '@styles';
import {Text, TouchableOpacity, View} from 'react-native';

export type SimpleItemProps = {
  children?: React.ReactNode;
  onPress?: () => void;
  textValues: string[];
};

export function SimpleItem({children, onPress, textValues}: SimpleItemProps) {
  return (
    <TouchableOpacity style={theme.boxItems} onPress={onPress}>
      {textValues ? (
        <View style={theme.boxFlexRow}>
          {textValues.map((value, index) => (
            <Text key={index} style={text.blueText14}>
              {value}
            </Text>
          ))}
        </View>
      ) : (
        <></>
      )}
      {children}
    </TouchableOpacity>
  );
}
