import { ThemeProvider } from 'styled-components/native';
import theme from '../theme/theme';
import { Provider } from 'react-redux';
import { persistor, store } from '@stores/store';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface AppProviderProps {
  children: React.ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}
