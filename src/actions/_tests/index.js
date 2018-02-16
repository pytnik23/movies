import nock from 'nock';
import { expect } from 'chai';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [ thunk ];
const mockStore = configureStore(middlewares);

import {
    fetchMovies,
    REQUEST_MOVIES,
    RECEIVE_MOVIES
} from '../index.js';

const movie_1 = {
    release_date: '1994-07-06',
    original_language: 'en',
    vote_average: 8.3,
    original_title: 'Forrest Gump',
    backdrop_path: '/4fT3pmeO7NnyT1TBkSElIDhVThU.jpg',
    popularity: 28.696892,
    poster_path: '/yE5d3BUhE8hCnkMUJOo1QDoOGNz.jpg',
    title: 'Forrest Gump',
    overview: 'A man with a low IQ has accomplished great things in his life and been present during significant historic events - in each case, far exceeding what anyone imagined he could do. Yet, despite all the things he has attained, his one true love eludes him. \'Forrest Gump\' is the story of a man who rose above his challenges, and who proved that determination, courage, and love are more important than ability.',
    adult: false,
    vote_count: 9695,
    video: false,
    id: 13,
    genre_ids: [
        35,
        18,
        10749
    ]
};
const movie_2 = {
    release_date: '2007-07-25',
    isFavorite: true,
    original_language: 'en',
    vote_average: 6.9,
    original_title: 'The Simpsons Movie',
    backdrop_path: '/gMjtdTP6HIi7CDilqXwnX8vouxO.jpg',
    popularity: 70.061329,
    poster_path: '/eCytnEriVur3rT47NWfkgPXD9qs.jpg',
    title: 'The Simpsons Movie',
    overview: 'After Homer accidentally pollutes the town\'s water supply, Springfield is encased in a gigantic dome by the EPA and the Simpsons are declared fugitives.',
    adult: false,
    vote_count: 2934,
    video: false,
    id: 35,
    genre_ids: [
        16,
        35,
        10751
    ]
};

describe('actions', () => {
    describe('#fetchMovies()', () => {
        it(`should dispatch ${REQUEST_MOVIES} and ${RECEIVE_MOVIES}`);
    });
});
