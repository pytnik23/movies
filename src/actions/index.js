import { status, json } from '../utils';

export const FETCH_CONFIG = 'FETCH_CONFIG';
export const SAVE_CONFIG = 'SAVE_CONFIG';
export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';
export const SAVE_TO_FAVORITES = 'SAVE_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
export const TOGGLE_SHOW_FAVORITES = 'TOGGLE_SHOW_FAVORITES';

const API_KEY = '100e19718c5c111cd812c685b760d2c3';

const API_CONFIG_URL = `https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`;

export const fetchConfig = () => dispatch => {
    return fetch(API_CONFIG_URL, { method: 'GET' })
    .then(status)
    .then(json)
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

export const fetchMovies = str => dispatch => {
    dispatch({ type: REQUEST_MOVIES });

    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${str}`, {
        method: 'GET'
    })
    .then(status)
    .then(json)
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
