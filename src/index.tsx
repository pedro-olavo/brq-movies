import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen'

import Routes from './routes';
import { AppProvider } from './contexts/app';
import { useEffect } from 'react';


export function App() {

  useEffect(() => {
    SplashScreen.show()

    const timer = setTimeout(() => {
      SplashScreen.hide();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}
