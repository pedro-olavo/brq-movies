export interface IGetPopularMoviesResponse {
  results: IMovie[];
}

export interface IMovie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;

  popularity: number;
  release_date: string;
  vote_average: number;
  vote_count: number;

  genre_ids: number[];
}
