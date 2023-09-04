import {SafeAreaView, StatusBar} from 'react-native';
import {theme} from '@styles';

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

function StatusBarComponent() {
  return <StatusBar backgroundColor={'#F2F2F2'} barStyle={'dark-content'} />;
}
