import {SafeAreaView} from 'react-native';
import {theme} from '@styles';

interface ScreenProps {
  children: React.ReactNode;
}
function Screen({children}: ScreenProps) {
  return <SafeAreaView style={theme.container}>{children}</SafeAreaView>;
}

export {Screen};
