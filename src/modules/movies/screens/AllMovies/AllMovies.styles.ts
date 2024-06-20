import { IMovie } from '@modules/movies/types';
import { RefreshCcw } from 'lucide-react-native';
import { FlatList, FlatListProps } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors['neutral-01']};
`;

export const ListSeparator = styled.View`
  height: ${({ theme }) => theme.space['spacing-12']};
  background-color: transparent;
`;

export const LoadingScreen = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors['neutral-01']};
  justify-content: center;
  align-items: center;
`;

export const Loading = styled.ActivityIndicator`
  color: ${({ theme }) => theme.colors['primary-01']};
`;

export const ErrorScreen = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors['neutral-01']};
  gap: ${({ theme }) => theme.space['spacing-20']};
`;

export const ErrorButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.space['spacing-12']};

  background-color: ${({ theme }) => theme.colors['tertiary-01']};
  padding: ${({ theme }) => theme.space['spacing-20']};
  border-radius: ${({ theme }) => theme.radii['corner-48']};
`;

export const RefechtIcon = styled(RefreshCcw)`
  color: ${({ theme }) => theme.colors['grayScale-01']};
  font-size: ${({ theme }) => theme.iconSizes['iconTitle-01']};
`;

export const MovieList = styled(FlatList).attrs<FlatListProps<IMovie>>(() => ({
  contentContainerStyle: { padding: 16 },
  columnWrapperStyle: { gap: 12 },
}))`
  width: 100%;
  margin-top: ${({ theme }) => theme.space['spacing-12']};
  gap: ${({ theme }) => theme.space['spacing-08']};
`;
