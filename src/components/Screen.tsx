import {SafeAreaView} from 'react-native';
import {global} from '@styles';

interface ScreenProps {
  children: React.ReactNode;
}
function Screen({children}: ScreenProps) {
  return <SafeAreaView style={global.container}>{children}</SafeAreaView>;
}

export {Screen};
