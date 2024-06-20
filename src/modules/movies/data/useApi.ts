import { useQuery } from '@tanstack/react-query';
import { getPopularMovies } from './api';

export const useGetPopularMovies = () =>
  useQuery({
    queryKey: ['popularMovies'],
    queryFn: getPopularMovies,
  });
