import { EllipsisVertical, LogOut } from 'lucide-react-native';
import styled from 'styled-components/native';

export const LogoutIcon = styled(LogOut)`
  font-size: ${({ theme }) => theme.iconSizes['iconCaption-03']};
  color: ${({ theme }) => theme.colors['grayScale-09']};
`;

export const Menu = styled.TouchableOpacity`
  margin-right: ${({ theme }) => theme.space['spacing-20']};
`;

export const MenuIcon = styled(EllipsisVertical)`
  font-size: ${({ theme }) => theme.iconSizes['iconTitle-01']};
  color: ${({ theme }) => theme.colors['grayScale-01']};
`;

export const MenuContent = styled.View`
  padding: ${({ theme }) => theme.space['spacing-12']};
`;

export const MenuItem = styled.TouchableOpacity`
  flex-direction: row;
  gap: ${({ theme }) => theme.space['spacing-08']};
`;
