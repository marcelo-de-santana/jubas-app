import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Routes} from './routes/Routes';
import {ThemeProvider} from './contexts/ThemeContext';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <ThemeProvider>
          <Routes />
        </ThemeProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
