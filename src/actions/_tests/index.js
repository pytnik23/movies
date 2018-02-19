import nock from 'nock';
import { expect } from 'chai';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [ thunk ];
const mockStore = configureStore(middlewares);

import {
    fetchMovies,
    fetchMovieDetails,
    getConfig,
    REQUEST_MOVIES,
    RECEIVE_MOVIES,
    REQUEST_MOVIE_DETAILS,
    RECEIVE_MOVIE_DETAILS,
    FETCH_CONFIG,
} from '../index.js';

import {
    API_BASE,
    API_KEY,
    API_CONFIG_URL,
} from '../../api';

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
const movieWithDetails = {
    '211672': {
        budget: 74000000,
        release_date: '2015-06-17',
        original_language: 'en',
        vote_average: 6.4,
        original_title: 'Minions',
        backdrop_path: '/qLmdjn2fv0FV2Mh4NBzMArdA0Uu.jpg',
        tagline: 'Before Gru, they had a history of bad bosses',
        production_countries: [
            {
                iso_3166_1: 'US',
                name: 'United States of America'
            }
        ],
        homepage: 'http://www.minionsmovie.com/',
        genres: [
            {
                id: 10751,
                name: 'Family'
            },
            {
                id: 16,
                name: 'Animation'
            },
            {
                id: 12,
                name: 'Adventure'
            },
            {
                id: 35,
                name: 'Comedy'
            }
        ],
        status: 'Released',
        isMovieFetched: true,
        production_companies: [
            {
                name: 'Universal Pictures',
                id: 33
            },
            {
                name: 'Illumination Entertainment',
                id: 6704
            }
        ],
        popularity: 528.656971,
        belongs_to_collection: null,
        poster_path: '/q0R4crx2SehcEEQEkYObktdeFy.jpg',
        imdb_id: 'tt2293640',
        title: 'Minions',
        runtime: 91,
        overview: 'Minions Stuart, Kevin and Bob are recruited by Scarlet Overkill, a super-villain who, alongside her inventor husband Herb, hatches a plot to take over the world.',
        adult: false,
        vote_count: 5777,
        video: false,
        id: 211672,
        revenue: 1156730962,
        spoken_languages: [
            {
                iso_639_1: 'en',
                name: 'English'
            }
        ]
    }
};
const config = {
    images: {
        base_url: 'http://image.tmdb.org/t/p/',
        secure_base_url: 'https://image.tmdb.org/t/p/',
        backdrop_sizes: [
            'w300',
            'w780',
            'w1280',
            'original'
        ],
        logo_sizes: [
            'w45',
            'w92',
            'w154',
            'w185',
            'w300',
            'w500',
            'original'
        ],
        poster_sizes: [
            'w92',
            'w154',
            'w185',
            'w342',
            'w500',
            'w780',
            'original'
        ],
        profile_sizes: [
            'w45',
            'w185',
            'h632',
            'original'
        ],
        still_sizes: [
            'w92',
            'w185',
            'w300',
            'original'
        ]
    },
    change_keys: [
        'adult',
        'air_date',
        'also_known_as',
        'alternative_titles',
        'biography',
        'birthday',
        'budget',
        'cast',
        'certifications',
        'character_names',
        'created_by',
        'crew',
        'deathday',
        'episode',
        'episode_number',
        'episode_run_time',
        'freebase_id',
        'freebase_mid',
        'general',
        'genres',
        'guest_stars',
        'homepage',
        'images',
        'imdb_id',
        'languages',
        'name',
        'network',
        'origin_country',
        'original_name',
        'original_title',
        'overview',
        'parts',
        'place_of_birth',
        'plot_keywords',
        'production_code',
        'production_companies',
        'production_countries',
        'releases',
        'revenue',
        'runtime',
        'season',
        'season_number',
        'season_regular',
        'spoken_languages',
        'status',
        'tagline',
        'title',
        'translations',
        'tvdb_id',
        'tvrage_id',
        'type',
        'video',
        'videos'
    ]
};

describe('actions', () => {
    describe('#getConfig()', () => {
        it(`should handle ${FETCH_CONFIG}`, () => {
            nock(API_BASE)
                .get('/configuration')
                .query({api_key: API_KEY})
                .reply(200, config);

            const store = mockStore({ movies: { items: {}, popular: [] } });
            return store.dispatch(getConfig()).then(() => {
                expect(store.getActions()).to.have.lengthOf(1);

                const storeConfig = store.getActions()[0];

                expect(storeConfig).to.have.property('type', FETCH_CONFIG);
                expect(storeConfig).to.have.deep.property('imagesConfig', config);
                expect(storeConfig).to.have.property('lastFetchDate').that.is.a('number');
            });
        });
    });

    describe('#fetchMovies()', () => {
        it(`should dispatch ${REQUEST_MOVIES} and ${RECEIVE_MOVIES}`, () => {
            const page = 'popular';

            nock(API_BASE)
                .get('/movie/popular')
                .query({api_key: API_KEY})
                .reply(200, { results: [movie_1, movie_2] });

            const store = mockStore({ movies: { items: {}, popular: [] } });
            return store.dispatch(fetchMovies(page)).then(() => {
                expect(store.getActions()).to.eql([
                    {
                        type: REQUEST_MOVIES,
                    },
                    {
                        type: RECEIVE_MOVIES,
                        page,
                        items: { 13: movie_1, 35: movie_2 },
                        ids: [13, 35],
                    }
                ]);
            });
        });
    });

    describe('#fetchMovieDetails()', () => {
        it(`should handle ${REQUEST_MOVIE_DETAILS} and ${RECEIVE_MOVIE_DETAILS}`, () => {
            nock(API_BASE)
                .get('/movie/211672')
                .query({api_key: API_KEY})
                .reply(200, { results: movieWithDetails });

                const store = mockStore({ movies: { items: {}, popular: [] } });
                return store.dispatch(fetchMovieDetails(211672)).then(() => {
                    expect(store.getActions()).to.eql([
                        {
                            type: REQUEST_MOVIE_DETAILS,
                            id: 211672
                        },
                        {
                            type: RECEIVE_MOVIE_DETAILS,
                            movie: { results: movieWithDetails },
                            id: 211672,
                        }
                    ]);
                });
        });
    });
});
