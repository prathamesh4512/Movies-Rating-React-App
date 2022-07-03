import { ADD_MOVIES, ADD_FAVS, REM_FAVS, SET_SHOWFAVS } from "../actions";

const initialMoviesState = {
  list: [],
  favourites: [],
  showFavs: false,
};

export function movies(state = initialMoviesState, action) {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_FAVS:
      return {
        ...state,
        favourites: [action.favs, ...state.favourites],
      };
    case REM_FAVS:
      const newFavourites = state.favourites.filter(
        (fav) => fav.Title !== action.favs.Title
      );
      return {
        ...state,
        favourites: newFavourites,
      };
    case SET_SHOWFAVS:
      return {
        ...state,
        showFavs: action.val,
      };
    default:
      return state;
  }
}
