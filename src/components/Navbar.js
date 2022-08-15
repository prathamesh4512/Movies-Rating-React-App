import React, { Component } from "react";
import { connect } from "react-redux";

import { addMovieToList, handleMovieSearch } from "../actions";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    };
  }
  handleAddToMovies = (movie) => {
    this.props.addMovieToList(movie);
    this.setState({
      searchText: "",
    });
  };

  handleSearchClick = () => {
    const { searchText } = this.state;
    this.props.handleMovieSearch(searchText);
  };

  handleSearchChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };
  render() {
    const { showSearchResults, results: movie } = this.props.search;
    return (
      <div className="nav">
        <div className="search-container">
          <input onChange={this.handleSearchChange} />
          <button id="search-btn" onClick={this.handleSearchClick}>
            Search
          </button>

          {showSearchResults && (
            <div className="search-results">
              <div className="search-result">
                <img src={movie.Poster} alt="search-pic" />
                <div className="movie-info">
                  <span>{movie.Title}</span>
                  <button onClick={() => this.handleAddToMovies(movie)}>
                    Add to Movies
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ search }) {
  return {
    search,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieToList: (movie) => dispatch(addMovieToList(movie)),
    handleMovieSearch: (searchText) => dispatch(handleMovieSearch(searchText)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
