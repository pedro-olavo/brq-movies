import { Screens } from './types';

export interface IScreenInfo {
  name: string;
}

const screensInfo: { [key in Screens]: IScreenInfo } = {
  [Screens.SignIn]: {
    name: 'Login',
  },
  [Screens.Tabs]: {
    name: 'Tabs',
  },
  [Screens.AllMovies]: {
    name: 'Todos os Filmes',
  },
  [Screens.FavoriteMovies]: {
    name: 'Filmes Favoritos',
  },
  [Screens.MovieDetails]: {
    name: 'Detalhes do Filme',
  },
};

export const getScreenName = (screen: Screens): string => {
  return screensInfo[screen].name;
};
