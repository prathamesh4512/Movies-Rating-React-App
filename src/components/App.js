import { data } from "../data";

import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import React from "react";

import { addMovies } from "../actions";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      console.log("State Updated");
      this.forceUpdate();
    });

    // dispatch action
    store.dispatch(addMovies(data));
  }

  render() {
    const { store } = this.props;
    const movies = store.getState();
    const { list, favourites, showFavs } = movies;
    const displayMovies = showFavs ? favourites : list;
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>

          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movie-${index}`}
                // dispatch={store.dispatch}
                // favourites={this.isMovieFav(movie)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
