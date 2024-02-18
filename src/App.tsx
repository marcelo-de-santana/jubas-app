import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Routes} from '@routes';
import {AuthContextProvider} from './contexts/AuthContext';

export default function App(): JSX.Element {
  return (
    <AuthContextProvider>
      <SafeAreaProvider>
        <Routes />
      </SafeAreaProvider>
    </AuthContextProvider>
  );
}
