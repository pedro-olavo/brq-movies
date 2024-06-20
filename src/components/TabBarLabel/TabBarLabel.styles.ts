import styled from 'styled-components/native';
import { Text } from 'react-native';

export const TabTitleContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TabTitle = styled(Text)<{ color: string }>`
  color: ${({ color }) => color};
  font-size: ${({ theme }) => theme.fontSizes['title-04']};
  line-height: ${({ theme }) => theme.lineHeights['title-04']};
  font-family: ${({ theme }) => theme.fontFamily.bold};
`;
