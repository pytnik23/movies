import { callApi, fetchConfig } from '../api';

import { normalize } from 'normalizr';

import movieSchema from '../api/schemas';

export const FETCH_CONFIG = 'FETCH_CONFIG';
export const SAVE_CONFIG = 'SAVE_CONFIG';
export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';
export const REQUEST_MOVIE_DETAILS = 'REQUEST_MOVIE_DETAILS';
export const RECEIVE_MOVIE_DETAILS = 'RECEIVE_MOVIE_DETAILS';
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

export const getConfig = () => dispatch => {
    return fetchConfig()
    .then(data => {
        dispatch({
            type: FETCH_CONFIG,
            imagesConfig: data,
            lastFetchDate: Date.now(),
        });
    })
};

export const saveConfigToStore = config => ({
    type: SAVE_CONFIG,
    config,
});

export const toggleFavorite = id => ({
    type: TOGGLE_FAVORITE,
    id: id + '',
});

export const searchMovies = str => dispatch => {
    dispatch({ type: REQUEST_MOVIES });

    callApi({
        endpoint: '/search/movie',
        query: str,
    })
    .then(data => {
        dispatch({
            type: RECEIVE_MOVIES,
            items: data.entities.movies,
        });
    })
};

const getEndpoint = page => {
    switch (page) {
        case 'popular':
            return '/movie/popular';
        case 'topRated':
            return '/movie/top_rated';
        case 'nowPlaying':
            return '/movie/now_playing';
        case 'search':
            return '/search/movie';
        default:
            return '/';
    }
}

export const fetchMovies = (page, params) => (dispatch, getState) => {
    const isNoFetchNeeded = getState().getIn(['movies', page]).size;
    if (isNoFetchNeeded) return;

    const endpoint = getEndpoint(page);

    dispatch({ type: REQUEST_MOVIES });

    callApi({ endpoint, params })
    .then(data => {
        const dataArray = data.results.map(item => ({
            ...item,
            isFavorite: false,
        }));
        const normalizeData = normalize(dataArray, movieSchema);

        dispatch({
            type: RECEIVE_MOVIES,
            page,
            items: normalizeData.entities.movies,
            ids: normalizeData.result,
        });
    })
}

export const fetchMovieDetails = (id) => (dispatch) => {
    dispatch({
        type: REQUEST_MOVIE_DETAILS,
        id,
    });

    callApi({ endpoint: `/movie/${id}` })
    .then(data => {
        dispatch({
            type: RECEIVE_MOVIE_DETAILS,
            movie: data,
            id,
        });
    });
};
