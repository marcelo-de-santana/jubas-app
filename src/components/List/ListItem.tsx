import {text, theme} from '@styles';
import {Text, TouchableOpacity, View} from 'react-native';

export type ListItemProps = {
  children?: React.ReactNode;
  onPress?: () => void;
  title?: string | number;
  textValues?: (string | React.JSX.Element)[];
};

export function ListItem({
  children,
  onPress,
  title,
  textValues,
}: ListItemProps) {
  return (
    <TouchableOpacity style={theme.boxItemsPT} onPress={onPress}>
      <Text style={text.blueText14}>{title}</Text>
      {textValues ? (
        <View style={theme.boxItemsFlexRow}>
          {textValues.map((value, index) => (
            <Text key={index} style={text.blueTextCenter14}>
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
