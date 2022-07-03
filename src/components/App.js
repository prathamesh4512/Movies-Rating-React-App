import { data } from "../data";

import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import React from "react";

import { addMovies, setShowFavs } from "../actions";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      console.log("State Updated");
      console.log(store.getState());
      this.forceUpdate();
    });

    // dispatch action
    store.dispatch(addMovies(data));
  }

  isMovieFav = (movie) => {
    const movies = this.props.store.getState();
    if (movies.favourites.indexOf(movie) < 0) return false;
    return true;
  };

  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavs(val));
  };

  render() {
    const { store } = this.props;
    const { movies, search } = store.getState();
    const { list, favourites, showFavs } = movies;
    const displayMovies = showFavs ? favourites : list;
    return (
      <div className="App">
        <Navbar search={search} dispatch={store.dispatch} />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${!showFavs && "active-tabs"}`}
              onClick={() => {
                this.onChangeTab(false);
              }}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavs && "active-tabs"}`}
              onClick={() => {
                this.onChangeTab(true);
              }}
            >
              Favourites
            </div>
          </div>
          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movie-${index}`}
                dispatch={store.dispatch}
                favourites={this.isMovieFav(movie)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
