import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Routes} from '@routes';
import {AuthContextProvider} from './contexts/AuthContext/AuthContext';

function App(): JSX.Element {
  return (
    <AuthContextProvider>
      <SafeAreaProvider>
        <Routes />
      </SafeAreaProvider>
    </AuthContextProvider>
  );
}
export {App};
