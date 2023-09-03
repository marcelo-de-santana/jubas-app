import {text, theme} from '@styles';
import {Text, View} from 'react-native';

export function EmptyListScreen({title}: {title: string}) {
  return (
    <View style={theme.containerJustifyCenter}>
      <Text style={text.blueTextCenter16}>{title}</Text>
    </View>
  );
}
