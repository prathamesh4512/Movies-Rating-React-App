// defining action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVS = "ADD_FAVS";
export const REM_FAVS = "REM_FAVS";
export const SET_SHOWFAVS = "SET_SHOWFAVS";

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
