import { PosterCard, Typography } from '@components';
import { useGetPopularMovies } from '@modules/movies/data/useApi';

import * as S from './AllMovies.styles'
import { MoviesStackParams, Screens } from '@routes/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { ActivityIndicator } from 'react-native';

interface IAllMoviesProps {
  navigation: StackNavigationProp<MoviesStackParams, Screens.AllMovies>;
}

export const AllMovies: React.FC<IAllMoviesProps> = ({ navigation }) => {
  const { data: popularMovies, isLoading, error, refetch } = useGetPopularMovies()

  if (isLoading) return (
    <S.LoadingScreen>
      <S.Loading size="large" />
    </S.LoadingScreen>
  )

  if (error) return (
    <S.ErrorScreen>
      <Typography variant='title-05' weight='bold'>Ocorreu um erro ao buscar os filmes</Typography>
      <S.ErrorButton onPress={() => refetch()}>
        <S.RefechtIcon />
        <Typography variant='title-05' weight='bold'>Tentar Novamente</Typography>
      </S.ErrorButton>
    </S.ErrorScreen>
  )

  return (
    <S.Container>
      <S.MovieList
        ItemSeparatorComponent={S.ListSeparator}
        data={popularMovies}
        renderItem={({ item, index }) => (
          <PosterCard
            poster_path={item.poster_path}
            onPress={() => navigation.navigate(Screens.MovieDetails, item)}
            testID={`MOVIE-${index}-BTN`}
          />
        )}
        numColumns={2}
      />
    </S.Container>
  );
}


