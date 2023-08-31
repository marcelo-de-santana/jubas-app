import {theme} from '@styles';
import {Text, View} from 'react-native';

export function EmptyListScreen({title}: {title: string}) {
  return (
    <View style={theme.containerJustifyCenter}>
      <Text style={theme.blackTextSmallCenter}>{title}</Text>
    </View>
  );
}
