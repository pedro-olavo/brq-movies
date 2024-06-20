import { ThemeProvider } from 'styled-components/native';
import theme from '../theme/theme';
import { Provider } from 'react-redux';
import { persistor, store } from '@stores/store';
import { PersistGate } from 'redux-persist/integration/react';

interface AppProviderProps {
  children: React.ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}
