import { callApi, fetchConfig } from '../api';

export const FETCH_CONFIG = 'FETCH_CONFIG';
export const SAVE_CONFIG = 'SAVE_CONFIG';
export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';
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
    id,
});

export const searchMovies = str => dispatch => {
    dispatch({ type: REQUEST_MOVIES });

    return callApi({
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

export const fetchMovies = (page, endpoint, params) => (dispatch, getState) => {
    const isNoFetchNeeded = getState().getIn(['movies', page]).size;
    if (isNoFetchNeeded) return;

    dispatch({ type: REQUEST_MOVIES });

    return callApi({ endpoint, params })
    .then(data => {
        dispatch({
            type: RECEIVE_MOVIES,
            page,
            items: data.entities.movies,
            ids: data.result,
        });
    })
}

export const fetchPopularMovies = () => {
    return fetchMovies('popular', '/movie/popular');
};

export const fetchTopRatedMovies = () => {
    return fetchMovies('topRated', '/movie/top_rated');
};

export const fetchNowPlayingMovies = () => {
    return fetchMovies('nowPlaying', '/movie/now_playing');
};

export const fetchSearchMovies = (query) => {
    return fetchMovies('search', '/search/movie', { query });
};
