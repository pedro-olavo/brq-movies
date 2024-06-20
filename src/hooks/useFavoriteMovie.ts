import { IMovie } from '@modules/movies/types';
import {
  addFavoriteMovie,
  removeFavoriteMovie,
} from '@stores/slices/favoriteMovies';
import { RootState } from '@stores/store';
import { useDispatch, useSelector } from 'react-redux';

type IUseFavoriteMovies = number | undefined;

const useFavoriteMovies = (id?: IUseFavoriteMovies) => {
  const dispatch = useDispatch();
  const { movies } = useSelector((state: RootState) => state.favoriteMovies);

  const addFavorite = (movie: IMovie) => {
    dispatch(addFavoriteMovie(movie));
  };

  const removeFavorite = (movieId: number) => {
    dispatch(removeFavoriteMovie(movieId));
  };

  const isMovieFavorite = (movieId: number | undefined) => {
    if (!movieId) return false;

    return movies?.some(movie => movie.id === movieId);
  };

  return {
    addFavorite,
    removeFavorite,
    isMovieFavorite: isMovieFavorite(id),
    movies,
  };
};

export default useFavoriteMovies;
