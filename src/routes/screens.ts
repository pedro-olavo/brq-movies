import { Screens } from './types';

export interface IScreenInfo {
  name: string;
}

const screensInfo: { [key in Screens]: IScreenInfo } = {
  [Screens.AllMovies]: {
    name: 'Todos os Filmes',
  },
  [Screens.FavoriteMovies]: {
    name: 'Filmes Favoritos',
  },
};

export const getScreenName = (screen: Screens): string => {
  return screensInfo[screen].name;
};
