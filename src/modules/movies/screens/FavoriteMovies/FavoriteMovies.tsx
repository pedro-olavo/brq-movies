import { PosterCard } from '@components';
import { useGetPopularMovies } from '@modules/movies/data/useApi';

import * as S from './FavoriteMovies.styles'
import { MoviesStackParams, Screens } from '@routes/types';
import { StackNavigationProp } from '@react-navigation/stack';
import useFavoriteMovies from '@hooks/useFavoriteMovie';

interface IFavoriteMoviesProps {
  navigation: StackNavigationProp<MoviesStackParams, Screens.FavoriteMovies>;
}

export const FavoriteMovies: React.FC<IFavoriteMoviesProps> = ({ navigation }) => {
  const { movies } = useFavoriteMovies()

  return (
    <S.Container>
      <S.MovieList
        ItemSeparatorComponent={S.ListSeparator}
        data={movies}
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


