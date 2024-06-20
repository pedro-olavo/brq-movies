import 'react-native-gesture-handler';

import Routes from './routes';
import { AppProvider } from './contexts/app';

export function App() {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}
