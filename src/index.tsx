import 'react-native-gesture-handler';
import BootSplash from 'react-native-bootsplash';

import Routes from './routes';
import { AppProvider } from './contexts/app';
import { useEffect } from 'react';


export function App() {

  useEffect(() => {
    BootSplash.hide({ fade: true });
  }, []);

  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}
