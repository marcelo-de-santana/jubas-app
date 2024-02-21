import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Routes} from '@routes';
import {AuthContextProvider} from './contexts/AuthContext';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './styles/theme';

export default function App(): JSX.Element {
  return (
    <AuthContextProvider>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </SafeAreaProvider>
    </AuthContextProvider>
  );
}
