// defining action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVS = "ADD_FAVS";
export const REM_FAVS = "REM_FAVS";
export const SET_SHOWFAVS = "SET_SHOWFAVS";
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";

//action creater
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}

export function addFavs(favs) {
  return {
    type: ADD_FAVS,
    favs,
  };
}

export function remFavs(favs) {
  return {
    type: REM_FAVS,
    favs,
  };
}

export function setShowFavs(val) {
  return {
    type: SET_SHOWFAVS,
    val,
  };
}

export function addMovieToList(movie) {
  return {
    type: ADD_MOVIE_TO_LIST,
    movie,
  };
}

export function handleMovieSearch(searchText) {
  return function (dispatch) {
    const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${searchText}`;
    fetch(url)
      .then((res) => res.json())
      .then((movie) => {
        console.log("movie", movie);
        // dispatch action to save search results in store
        dispatch(addMovieSearchResult(movie));
      });
  };
}

export function addMovieSearchResult(movie) {
  return {
    type: ADD_SEARCH_RESULT,
    movie,
  };
}
