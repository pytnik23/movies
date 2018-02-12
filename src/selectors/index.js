import { createSelector } from 'reselect';
import { List } from 'immutable';

export const getImagesBaseUrl = state => state.getIn(['config', 'images', 'base_url']);

export const getPosterSize = state => state.getIn(['config', 'images', 'poster_sizes', 3]);

export const getBackdropSize = state => state.getIn(['config', 'images', 'backdrop_sizes', 3]);

export const getPosterBase = createSelector(
    getImagesBaseUrl,
    getPosterSize,
    (imagesBaseUrl, posterSize) => imagesBaseUrl + posterSize
);

export const getBackdropBase = createSelector(
    getImagesBaseUrl,
    getBackdropSize,
    (imagesBaseUrl, backdropSize) => imagesBaseUrl + backdropSize
);

export const isMoviesFetching = state => state.getIn(['movies', 'isFetching']);

export const getMovies = state => state.getIn(['movies', 'items']);

export const getPopularMoviesIds = state => state.getIn(['movies', 'popular']);

export const getPopularMovies = createSelector(
    getPopularMoviesIds,
    getMovies,
    (popularMoviesIds, movies) => popularMoviesIds.map(id => movies.get(id + ''))
);

export const getTopRatedMoviesIds = state => state.getIn(['movies', 'topRated']);

export const getTopRatedMovies = createSelector(
    getTopRatedMoviesIds,
    getMovies,
    (topRatedMoviesIds, movies) => topRatedMoviesIds.map(id => movies.get(id + ''))
);

export const getNowPlayingMoviesIds = state => state.getIn(['movies', 'nowPlaying']);

export const getNowPlayingMovies = createSelector(
    getNowPlayingMoviesIds,
    getMovies,
    (nowPlayingMoviesIds, movies) => nowPlayingMoviesIds.map(id => movies.get(id + ''))
);

export const getFavoriteMovies = createSelector(
    getMovies,
    movies => List(movies.reduce((favoriteMovies, movie) => {
        if (movie.get('isFavorite')) favoriteMovies.push(movie);

        return favoriteMovies;
    }, []))
);

export const getSearchMoviesIds = state => state.getIn(['movies', 'search']);

export const getSearchMovies = createSelector(
    getSearchMoviesIds,
    getMovies,
    (searchMoviesIds, movies) => searchMoviesIds.map(id => movies.get(id + ''))
);
