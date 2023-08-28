import {SafeAreaView, Text, View} from 'react-native';
import {theme} from '@styles';

interface ScreenProps {
  children: React.ReactNode;
}
export function Screen({children}: ScreenProps) {
  return <SafeAreaView style={theme.container}>{children}</SafeAreaView>;
}

export function EmptyListScreen({title}: {title: string}) {
  return (
    <View style={theme.containerJustifyCenter}>
      <Text style={theme.blackTextSmallCenter}>{title}</Text>
    </View>
  );
}
