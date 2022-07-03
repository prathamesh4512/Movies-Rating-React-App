import { combineReducers } from "redux";

import {
  ADD_MOVIES,
  ADD_FAVS,
  REM_FAVS,
  SET_SHOWFAVS,
  ADD_SEARCH_RESULT,
} from "../actions";

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

const initialSearchState = {
  result: {},
  showSearchResults: false,
};

export function search(state = initialSearchState, action) {
  switch (action.type) {
    case ADD_SEARCH_RESULT:
      return {
        ...state,
        results: action.movie,
        showSearchResults: true, // to show searched movie on browser
      };
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  movies,
  search,
});
