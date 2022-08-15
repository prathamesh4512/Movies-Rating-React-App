import React from "react";
import { connect } from "react-redux";

import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { data as moviesList } from "../data";
import { addMovies, setShowFavs } from "../actions";

class App extends React.Component {
  componentDidMount() {
    this.props.addMovies(moviesList);
  }

  isMovieFav = (movie) => {
    const { movies } = this.props;
    if (movies.favourites.indexOf(movie) < 0) return false;
    return true;
  };

  onChangeTab = (val) => {
    this.props.setShowFavs(val);
  };

  render() {
    // const { store } = this.props;
    const { list, favourites, showFavs } = this.props.movies;
    const displayMovies = showFavs ? favourites : list;
    return (
      <div className="App">
        <Navbar />
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
            {displayMovies.map((movie) => (
              <MovieCard
                movie={movie}
                key={movie.imdbID}
                favourites={this.isMovieFav(movie)}
              />
            ))}
            {displayMovies.length === 0 ? (
              <div className="no-movies">No movies to display! </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ movies }) {
  return {
    movies,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovies: (val) => dispatch(addMovies(val)),
    setShowFavs: (val) => dispatch(setShowFavs(val)),
  };
}

const connectedAppComponent = connect(mapStateToProps, mapDispatchToProps)(App);

export default connectedAppComponent;
