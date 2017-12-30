import {
    fetchConfig,
    fetchSearchMovies,
    fetchPopularMovies,
    fetchTopMovies,
    fetchNowPlayingMovies,
    fetchSimilarMovies,
    fetchRecommendationsMovies,
} from '../api';

export const FETCH_CONFIG = 'FETCH_CONFIG';
export const SAVE_CONFIG = 'SAVE_CONFIG';
export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';
export const SAVE_TO_FAVORITES = 'SAVE_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
export const TOGGLE_SHOW_FAVORITES = 'TOGGLE_SHOW_FAVORITES';

export const getConfig = () => dispatch => {
    return fetchConfig()
    .then(data => {
        dispatch({
            type: FETCH_CONFIG,
            imagesConfig: data,
            lastFetchDate: Date.now()
        });
    })
};

export const saveConfigToStore = config => {
    return {
        type: SAVE_CONFIG,
        config
    };
};

export const searchMovies = str => dispatch => {
    dispatch({ type: REQUEST_MOVIES });

    return fetchSearchMovies(str)
    .then(data => {
        dispatch({
            type: RECEIVE_MOVIES,
            items: data.results
        });
    })
};

export const saveToFavorites = movie => {
    return {
        type: SAVE_TO_FAVORITES,
        movie
    };
};

export const removeFromFavorites = id => {
    return {
        type: REMOVE_FROM_FAVORITES,
        id
    };
};


export const toggleShowFavorites = () => {
    return {
        type: TOGGLE_SHOW_FAVORITES
    };
};
