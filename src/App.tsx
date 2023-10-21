import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Routes} from '@routes';
import { AuthContextProvider } from './contexts/AuthContext/AuthContext';
// import {AuthContextProvider} from '@contexts';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </SafeAreaProvider>
  );
}
export {App};
