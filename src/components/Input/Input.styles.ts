import { Theme } from '@theme/types';
import { X } from 'lucide-react-native';
import styled from 'styled-components/native';

export const getColor = (theme: Theme, error?: boolean, focused?: boolean) => {
  if (error) return theme.colors['error-02'];
  if (focused) return theme.colors['primary-01'];
  return theme.colors['grayScale-01'];
};

export const Container = styled.View<{ focused: boolean; error?: boolean }>`
  width: 100%;

  background-color: ${({ theme }) => theme.colors['tertiary-01']};
  padding-vertical: ${({ theme }) => theme.space['spacing-04']};
  padding-horizontal: ${({ theme }) => theme.space['spacing-08']};

  align-items: center;
  flex-direction: row;
  gap: ${({ theme }) => theme.space['spacing-08']};

  border-top-left-radius: ${({ theme }) => theme.radii['corner-04']};
  border-top-right-radius: ${({ theme }) => theme.radii['corner-04']};
  border-bottom-width: ${({ theme }) => theme.borderWidths['stroke-02']};
  border-bottom-color: ${({ theme, error, focused }) =>
    getColor(theme, error, focused)};
`;

export const TextInputContainer = styled.View`
  position: relative;
  flex: 1;
`;

export const Label = styled.Text<{
  focused: boolean;
  filled: boolean;
  error?: boolean;
}>`
  position: absolute;
  top: ${({ focused, filled }) => (focused || filled ? '-5%' : '35%')};
  font-size: ${({ theme, focused, filled }) =>
    focused || filled
      ? theme.fontSizes['caption-02']
      : theme.fontSizes['caption-01']};
  color: ${({ theme, error, focused }) => getColor(theme, error, focused)};
`;

export const Input = styled.TextInput`
  color: ${({ theme }) => theme.colors['grayScale-01']};
`;

export const ClearButton = styled.TouchableOpacity``;

export const ClearIcon = styled(X)`
  color: ${({ theme }) => theme.colors['grayScale-01']};
  font-size: ${({ theme }) => theme.iconSizes['iconTitle-01']};
`;

export const HelperTextContainer = styled.View`
  padding-horizontal: ${({ theme }) => theme.space['spacing-04']};
  gap: ${({ theme }) => theme.space['spacing-04']};
  flex-direction: row;
  align-items: center;
`;
