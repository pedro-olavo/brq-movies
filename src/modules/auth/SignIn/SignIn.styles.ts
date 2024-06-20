import { AlertCircle } from 'lucide-react-native';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors['neutral-01']};
  gap: ${({ theme }) => theme.space['spacing-32']};
  padding: ${({ theme }) => theme.space['spacing-16']};
`;

export const LoginButton = styled.TouchableOpacity`
  width: 100%;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors['grayScale-05'] : theme.colors['primary-01']};
  align-items: center;

  padding-vertical: ${({ theme }) => theme.space['spacing-08']};
  border-radius: ${({ theme }) => theme.radii['corner-48']};
`;

export const InputsContainer = styled.KeyboardAvoidingView`
  gap: ${({ theme }) => theme.space['spacing-32']};
`;

export const HelperTextContainer = styled.View`
  padding-horizontal: ${({ theme }) => theme.space['spacing-04']};
  gap: ${({ theme }) => theme.space['spacing-04']};
  flex-direction: row;
  align-items: center;
`;

export const AlertIcon = styled(AlertCircle)`
  color: ${({ theme }) => theme.colors['error-02']};
  font-size: ${({ theme }) => theme.iconSizes['iconCaption-01']};
`;
