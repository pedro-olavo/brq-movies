import api from '@services/api';
import { IGetPopularMoviesResponse } from '../types';

export const getPopularMovies = async () => {
  const { data } = await api.get<IGetPopularMoviesResponse>('/movie/popular');
  return data.results;
};
