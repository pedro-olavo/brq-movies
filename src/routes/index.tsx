import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { AppRoutesStack, AuthRoutesStack } from './stacks';
import { useTheme } from 'styled-components/native';
import useAuth from '@hooks/useAuth';

export default function Routes() {
  const { colors } = useTheme()
  const { isAuthenticated } = useAuth()

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors['neutral-01']} barStyle="light-content" />
      {isAuthenticated ? <AppRoutesStack /> : <AuthRoutesStack />}
    </NavigationContainer>
  );
}
