import {theme} from '@styles';
import {Text, TouchableOpacity, View} from 'react-native';
import { ListItemProps } from './ListTypes';

export function ListItem({onPress, title}: ListItemProps) {
  return (
    <View style={theme.blueBoxItems}>
      <TouchableOpacity style={theme.greyBoxItemsFlex} onPress={onPress}>
        <Text style={theme.darkBlueTextSmall}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
