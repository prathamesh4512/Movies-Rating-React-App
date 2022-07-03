import React from "react";
import { remFavs, addFavs } from "../actions";

class MovieCard extends React.Component {
  handleFavClick = () => {
    const { movie, dispatch, favourites } = this.props;
    favourites ? dispatch(remFavs(movie)) : dispatch(addFavs(movie));
  };

  render() {
    const { movie, favourites } = this.props;

    return (
      <div className="movie-card">
        <div className="left">
          <img src={movie.Poster} alt="movie-poster" />
        </div>
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            {favourites ? (
              <button className="unfavourite-btn" onClick={this.handleFavClick}>
                Unfavourite
              </button>
            ) : (
              <button className="favourite-btn" onClick={this.handleFavClick}>
                Favourite
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
