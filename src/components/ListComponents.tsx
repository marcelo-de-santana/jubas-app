import {theme} from '@styles';
import {Text, TouchableOpacity, View} from 'react-native';

export type ListItemProps = {onPress?: () => void; title: string | number};

export function ListItem({onPress, title}: ListItemProps) {
  return (
    <View style={theme.blueBoxItems}>
      <TouchableOpacity style={theme.greyBoxItemsFlex} onPress={onPress}>
        <Text style={theme.darkBlueTextSmall}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

export function EmptyListScreen({title}: {title: string}) {
  return (
    <View style={theme.containerJustifyCenter}>
      <Text style={theme.blackTextSmallCenter}>{title}</Text>
    </View>
  );
}

export function SimpleListItem({onPress, title}: ListItemProps) {
  return (
    <>
      <Text style={theme.darkBlueTextSmall}>{title}</Text>
    </>
  );
}
