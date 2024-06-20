import { IMovie } from '@modules/movies/types';
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

export const MovieList = styled(FlatList).attrs<FlatListProps<IMovie>>(() => ({
  contentContainerStyle: { padding: 16 },
  columnWrapperStyle: { gap: 12 },
}))`
  width: 100%;
  margin-top: ${({ theme }) => theme.space['spacing-12']};
  gap: ${({ theme }) => theme.space['spacing-08']};
`;
