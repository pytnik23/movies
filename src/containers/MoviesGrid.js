import React from 'react';
import { connect } from 'react-redux';

import { toggleFavorite } from '../actions';

import Movie from '../components/Movie';

import './MoviesGrid.css';

const getPosterUrl = (posterBase, posterPath) => {
    if (!posterPath) return null;

    return posterBase + posterPath;
};

const MoviesGrid = ({ ids, movies, posterBase, toggleFavorite }) => {
    if (!movies.size) return null;

    return (
        <ul className="movies-grid">
            {
                ids.map((id) => {
                    const stringId = id + '';

                    return (
                        <Movie
                            key={movies.getIn([stringId, 'id'])}
                            id={movies.getIn([stringId, 'id'])}
                            title={movies.getIn([stringId, 'original_title'])}
                            poster={getPosterUrl(posterBase, movies.getIn([stringId, 'poster_path']))}
                            isFavorite={movies.getIn([stringId, 'isFavorite'])}
                            toggleFavorite={toggleFavorite}
                        />
                    )
                })
            }
        </ul>
    );
}

const mapStateToProps = state => ({
    posterBase: state.getIn(['config', 'images', 'base_url']) + state.getIn(['config', 'images', 'poster_sizes', 2]),
    movies: state.getIn(['movies', 'items']),
});

export default connect(mapStateToProps, { toggleFavorite })(MoviesGrid);
