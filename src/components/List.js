import React, { Component } from 'react';

import { connect } from 'react-redux';

import { saveToFavorites, removeFromFavorites } from '../actions';

import ListItem from './ListItem';

import './List.css';

class List extends Component {

    getPosterUrl = movie => {
        if (!movie.poster_path) return null;

        const baseUrl = this.props.imgConfig.base_url;
        const posterSize = this.props.imgConfig.poster_sizes[2];
        const posterUrl = movie.poster_path;

        return baseUrl + posterSize + posterUrl;
    }

    render() {
        const {
            movies,
            favoriteMovies,
            showOnlyFavorites,
            saveToFavorites,
            removeFromFavorites
        } = this.props;

        const visibleMovies = showOnlyFavorites ? favoriteMovies : movies;

        return (
            <ul className="movies-list">
                {
                    visibleMovies.map(movie => {
                        return (
                            <ListItem
                                key={movie.id}
                                title={movie.original_title}
                                poster={this.getPosterUrl(movie)}
                                isFavorite={movie.isFavorite}
                                saveToFavorites={() => saveToFavorites(movie)}
                                removeFromFavorites={() => removeFromFavorites(movie.id)}
                            />
                        );
                    })
                }
            </ul>
        );
    }
}

const mapStateToProps = state => {
    return {
        movies: state.movies.items,
        favoriteMovies: state.movies.favoriteItems,
        imgConfig: state.config.images,
        showOnlyFavorites: state.showOnlyFavorites
    };
}

export default connect(mapStateToProps, { saveToFavorites, removeFromFavorites })(List);
