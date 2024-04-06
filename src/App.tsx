import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Routes} from './routes/Routes';
import {AuthContextProvider} from './contexts/AuthContextProvider';
import {ThemeProvider} from './contexts/ThemeContext';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App(): JSX.Element {
  return (
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <ThemeProvider>
            <Routes />
          </ThemeProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </AuthContextProvider>
  );
}
