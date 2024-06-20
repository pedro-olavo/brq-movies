import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { AppRoutesStack } from './routes';
import { useTheme } from 'styled-components/native';

export default function Routes() {
  const { colors } = useTheme()

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors['neutral-01']} barStyle="light-content" />
      <AppRoutesStack />
    </NavigationContainer>
  );
}
