import { expect } from 'chai';
import { fromJS } from 'immutable';

import {
    getPosterBase,
    getBackdropBase,
    getPopularMovies,
    getTopRatedMovies,
    getNowPlayingMovies,
    getSearchMovies,
    getFavoriteMovies,
} from '../index';

const popularMovie_1 = {
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
const popularMovie_2 = {
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
const topRatedMovie_1 = {
    release_date: '2001-07-20',
    isFavorite: true,
    original_language: 'ja',
    vote_average: 8.4,
    original_title: '千と千尋の神隠し',
    backdrop_path: '/mnpRKVSXBX6jb56nabvmGKA0Wig.jpg',
    popularity: 33.913461,
    poster_path: '/dL11DBPcRhWWnJcFXl9A07MrqTI.jpg',
    title: 'Spirited Away',
    overview: 'A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.',
    adult: false,
    vote_count: 4752,
    video: false,
    id: 129,
    genre_ids: [
        16,
        10751,
        14
    ]
};
const topRatedMovie_2 = {
    release_date: '2008-07-16',
    original_language: 'en',
    vote_average: 8.3,
    original_title: 'The Dark Knight',
    backdrop_path: '/hqkIcbrOHL86UncnHIsHVcVmzue.jpg',
    popularity: 34.292541,
    poster_path: '/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg',
    title: 'The Dark Knight',
    overview: 'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.',
    adult: false,
    vote_count: 13925,
    video: false,
    id: 155,
    genre_ids: [
        18,
        28,
        80,
        53
    ]
};
const nowPlayingMovie_1 = {
    release_date: '1972-03-14',
    original_language: 'en',
    vote_average: 8.5,
    original_title: 'The Godfather',
    backdrop_path: '/6xKCYgH16UuwEGAyroLU6p8HLIn.jpg',
    popularity: 110.568733,
    poster_path: '/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg',
    title: 'The Godfather',
    overview: 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
    adult: false,
    vote_count: 7036,
    video: false,
    id: 238,
    genre_ids: [
        18,
        80
    ]
};
const nowPlayingMovie_2 = {
    release_date: '1974-12-20',
    original_language: 'en',
    vote_average: 8.4,
    original_title: 'The Godfather: Part II',
    backdrop_path: '/gLbBRyS7MBrmVUNce91Hmx9vzqI.jpg',
    popularity: 92.357206,
    poster_path: '/tHbMIIF51rguMNSastqoQwR0sBs.jpg',
    title: 'The Godfather: Part II',
    overview: 'In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.',
    adult: false,
    vote_count: 4084,
    video: false,
    id: 240,
    genre_ids: [
        18,
        80
    ]
};
const searchMovie_1 = {
    release_date: '1994-09-23',
    original_language: 'en',
    vote_average: 8.5,
    original_title: 'The Shawshank Redemption',
    backdrop_path: '/xBKGJQsAIeweesB79KC89FpBrVr.jpg',
    popularity: 24.123447,
    poster_path: '/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg',
    title: 'The Shawshank Redemption',
    overview: 'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
    adult: false,
    vote_count: 9464,
    video: false,
    id: 278,
    genre_ids: [
        18,
        80
    ]
};
const searchMovie_2 = {
    release_date: '1984-05-23',
    original_language: 'en',
    vote_average: 8.3,
    original_title: 'Once Upon a Time in America',
    backdrop_path: '/vnT6HzjLSDrAweHn9xWykb8Ii6T.jpg',
    popularity: 23.075174,
    poster_path: '/x733R4ISI0RbKeHhVkXdTMFmTFr.jpg',
    title: 'Once Upon a Time in America',
    overview: 'A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan over thirty years later, where he once again must confront the ghosts and regrets of his old life.',
    adult: false,
    vote_count: 1387,
    video: false,
    id: 311,
    genre_ids: [
        18,
        80
    ]
};
const favoriteMovie_1 = popularMovie_2;
const favoriteMovie_2 = topRatedMovie_1;

const state = fromJS(
    {
        movies: {
            isFetching: false,
            items: {
                '13': popularMovie_1,
                '35': popularMovie_2,
                '129': topRatedMovie_1,
                '155': topRatedMovie_2,
                '238': nowPlayingMovie_1,
                '240': nowPlayingMovie_2,
                '278': searchMovie_1,
                '311': searchMovie_2
            },
            popular: [13, 35],
            topRated: [129, 155],
            nowPlaying: [238, 240],
            search: [278, 311]
        },
        config: {
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
            ],
            lastFetch: 1518537433466
        }
    }
);

describe('selectors', () => {
    describe('#getPosterBase()', () => {
        it('should return poster base URL', () => {
            const result = getPosterBase(state);

            expect(result).to.equal('http://image.tmdb.org/t/p/w342');
        });
    });

    describe('#getBackdropBase()', () => {
        it('should return backdrop base URL', () => {
            const result = getBackdropBase(state);

            expect(result).to.equal('http://image.tmdb.org/t/p/original');
        });
    });

    describe('#getPopularMovies()', () => {
        it('should return popular movies', () => {
            const result = getPopularMovies(state);

            expect(result).to.eql(fromJS([popularMovie_1, popularMovie_2]));
        });
    });

    describe('#getTopRatedMovies()', () => {
        it('should return top rated movies', () => {
            const result = getTopRatedMovies(state);

            expect(result).to.eql(fromJS([topRatedMovie_1, topRatedMovie_2]));
        });
    });

    describe('#getNowPlayingMovies()', () => {
        it('should return now playing movies', () => {
            const result = getNowPlayingMovies(state);

            expect(result).to.eql(fromJS([nowPlayingMovie_1, nowPlayingMovie_2]));
        });
    });

    describe('#getSearchMovies()', () => {
        it('should return search movies', () => {
            const result = getSearchMovies(state);

            expect(result).to.eql(fromJS([searchMovie_1, searchMovie_2]));
        });
    });

    describe('#getFavoriteMovies()', () => {
        it('should return favorite movies', () => {
            const result = getFavoriteMovies(state);

            expect(result).to.eql(fromJS([favoriteMovie_1, favoriteMovie_2]));
        });
    });
});
