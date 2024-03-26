import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Routes} from '@routes';
import {AuthContextProvider} from './contexts/AuthContextProvider';
import {ThemeProvider} from './contexts/ThemeContext';

export default function App(): JSX.Element {
  return (
    <AuthContextProvider>
      <SafeAreaProvider>
        <ThemeProvider>
          <Routes />
        </ThemeProvider>
      </SafeAreaProvider>
    </AuthContextProvider>
  );
}
