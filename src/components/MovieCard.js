import React from "react";
import { remFavs, addFavs } from "../actions";
import { connect } from "react-redux";

class MovieCard extends React.Component {
  handleFavClick = () => {
    const { movie, favourites, remFavs, addFavs } = this.props;
    favourites ? remFavs(movie) : addFavs(movie);
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

function mapDispatchToProps(dispatch) {
  return {
    remFavs: (movie) => dispatch(remFavs(movie)),
    addFavs: (movie) => dispatch(addFavs(movie)),
  };
}

export default connect(null, mapDispatchToProps)(MovieCard);
