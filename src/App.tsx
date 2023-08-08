import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Routes} from '@routes';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <Routes />
    </SafeAreaProvider>
  );
}
export {App};
