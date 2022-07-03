// defining action types
export const ADD_MOVIES = "ADD_MOVIES";

//action creater
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}
