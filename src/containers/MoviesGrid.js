import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleFavorite } from '../actions';

import MovieGridItem from '../components/MovieGridItem';

import './MoviesGrid.css';

const getPosterUrl = (posterBase, posterPath) => {
    if (!posterPath) return null;

    return posterBase + posterPath;
};

class MoviesGrid extends Component {
    handleToggleClick = (e) => {
        e.preventDefault();

        const id = e.target.dataset.id + '';

        this.props.toggleFavorite(id);
    }

    render() {
        const { ids, movies, posterBase } = this.props;
        if (!movies.size) return null;

        return (
            <ul className="movies-grid">
                {
                    ids.map((id) => {
                        const stringId = id + '';

                        return (
                            <MovieGridItem
                                key={movies.getIn([stringId, 'id'])}
                                id={movies.getIn([stringId, 'id'])}
                                title={movies.getIn([stringId, 'original_title'])}
                                poster={getPosterUrl(posterBase, movies.getIn([stringId, 'poster_path']))}
                                year={movies.getIn([stringId, 'release_date'])}
                                voteAverage={movies.getIn([stringId, 'vote_average'])}
                                voteCount={movies.getIn([stringId, 'vote_count'])}
                                isFavorite={movies.getIn([stringId, 'isFavorite'])}
                                onFavoriteClick={this.handleToggleClick}
                            />
                        )
                    })
                }
            </ul>
        );
    }
};

const mapStateToProps = state => ({
    posterBase: state.getIn(['config', 'images', 'base_url']) + state.getIn(['config', 'images', 'poster_sizes', 3]),
    movies: state.getIn(['movies', 'items']),
});

export default connect(mapStateToProps, { toggleFavorite })(MoviesGrid);
