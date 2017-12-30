import { status, json } from '../utils';

const API_KEY = '100e19718c5c111cd812c685b760d2c3';

const API_BASE = 'https://api.themoviedb.org/3';
const API_CONFIG_URL = `${API_BASE}/configuration?api_key=${API_KEY}`;

export const fetchConfig = () => {
    return fetch(API_CONFIG_URL, { method: 'GET' })
    .then(status)
    .then(json);
};

export const fetchSearchMovies = str => {
    return fetch(`${API_BASE}/search/movie?api_key=${API_KEY}&query=${str}`, {method: 'GET'})
    .then(status)
    .then(json);
};


export const fetchPopularMovies = () => {
    return fetch(`${API_BASE}/movie/popular?api_key=${API_KEY}`, { method: 'GET' })
    .then(status)
    .then(json);
}

export const fetchTopMovies = () => {
    return fetch(`${API_BASE}/movie/top_rated?api_key=${API_KEY}`, { method: 'GET' })
    .then(status)
    .then(json);
}

export const fetchNowPlayingMovies = () => {
    return fetch(`${API_BASE}/movie/now_playing?api_key=${API_KEY}`, { method: 'GET' })
    .then(status)
    .then(json);
}

export const fetchSimilarMovies = (movie_id) => {
    return fetch(`${API_BASE}/movie/${movie_id}/similar?api_key=${API_KEY}`, { method: 'GET' })
    .then(status)
    .then(json);
}

export const fetchRecommendationsMovies = (movie_id) => {
    return fetch(`${API_BASE}/movie/${movie_id}/recommendations?api_key=${API_KEY}`, { method: 'GET' })
    .then(status)
    .then(json);
}
