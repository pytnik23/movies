import { normalize } from 'normalizr';

import movieSchema from './schemas';

const API_KEY = '100e19718c5c111cd812c685b760d2c3';

const API_BASE = 'https://api.themoviedb.org/3';
const API_CONFIG_URL = `${API_BASE}/configuration?api_key=${API_KEY}`;

const status = res => {
    if (res.status >= 200 && res.status < 300) {
        return Promise.resolve(res);
    } else {
        return Promise.reject(new Error(res.statusText));
    }
}

const json = res => {
    return res.json();
}

export const fetchConfig = () => {
    return fetch(API_CONFIG_URL, { method: 'GET' })
    .then(status)
    .then(json);
};

export const callApi = ({
    method = 'GET',
    endpoint,
    params,
}) => {
    let url = API_BASE + endpoint + '?api_key=' + API_KEY;

    if (params) {
        for (let key in params) {
            console.log(key);
            url += `&${key}=${params[key]}`;
        }
    }

    return fetch(url, { method })
    .then(status)
    .then(json)
    .then(data => {
        let dataArray = data.results.map(item => ({ ...item, isFavorite: false }));
        return normalize(dataArray, movieSchema);
    });
};
