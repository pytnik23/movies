import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleFavorite } from '../actions';
import { getPosterBase } from '../selectors';

import MovieGridItem from '../components/MovieGridItem';

import './MoviesGrid.css';

const getPosterUrl = (posterBase, posterPath) => {
    if (!posterPath) return null;

    return posterBase + posterPath;
};

class MoviesGrid extends Component {

    render() {
        const { movies, posterBase, toggleFavorite } = this.props;
        if (!movies.size) return null;

        return (
            <ul className="movies-grid">
                {
                    movies.map(movie => (
                        <MovieGridItem
                            key={movie.get('id')}
                            id={movie.get('id')}
                            title={movie.get('original_title')}
                            poster={getPosterUrl(posterBase, movie.get('poster_path'))}
                            year={movie.get('release_date')}
                            voteAverage={movie.get('vote_average')}
                            voteCount={movie.get('vote_count')}
                            isFavorite={movie.get('isFavorite')}
                            onFavoriteClick={toggleFavorite}
                        />
                    ))
                }
            </ul>
        );
    }
};

const mapStateToProps = (state, ownProps) => ({
    movies: ownProps.getCurrentMovies(state),
    posterBase: getPosterBase(state),
});

export default connect(mapStateToProps, { toggleFavorite })(MoviesGrid);
