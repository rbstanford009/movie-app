export interface IMovieResults {
  id?: number;
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: [];
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
  expanded?: boolean;
}
export interface IApiMovieSearch {
  page: number;
  results: IMovieResults[];
  total_pages: number;
  total_results: number;
}

export interface IMovieParam {
  name: string
  year: string;
}
