import { IMovie } from '@modules/movies/types';

export enum Screens {
  SignIn = 'sign_in',
  Tabs = 'tabs',
  AllMovies = 'all_movies',
  FavoriteMovies = 'favorite_movies',
  MovieDetails = 'movie_details',
}

export type MoviesStackParams = {
  [Screens.Tabs]: undefined;
  [Screens.AllMovies]: undefined;
  [Screens.FavoriteMovies]: undefined;
  [Screens.MovieDetails]: IMovie;
};
