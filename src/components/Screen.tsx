import {SafeAreaView} from 'react-native';
import {theme} from '@styles';
import {StatusBarComponent} from './StatusBar';

interface ScreenProps {
  children: React.ReactNode;
}
export function Screen({children}: ScreenProps) {
  return (
    <SafeAreaView style={theme.container}>
      <StatusBarComponent />
      {children}
    </SafeAreaView>
  );
}
