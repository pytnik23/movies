import chai, { expect } from 'chai';
import { Map, fromJS } from 'immutable';
import chaiImmutable from 'chai-immutable';

import movies from '../movies';

import {
    REQUEST_MOVIES,
    RECEIVE_MOVIES,
    REQUEST_MOVIE_DETAILS,
    RECEIVE_MOVIE_DETAILS,
    TOGGLE_FAVORITE,
} from '../../actions';

chai.use(chaiImmutable);

const MOVIE_1 = {
    "release_date": "2001-07-20",
    "original_language": "ja",
    "vote_average": 8.4,
    "original_title": "千と千尋の神隠し",
    "backdrop_path": "/mnpRKVSXBX6jb56nabvmGKA0Wig.jpg",
    "popularity": 33.913461,
    "poster_path": "/dL11DBPcRhWWnJcFXl9A07MrqTI.jpg",
    "title": "Spirited Away",
    "overview": "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
    "adult": false,
    "vote_count": 4752,
    "video": false,
    "id": 129,
    "genre_ids": [
        16,
        10751,
        14
    ]
};
const MOVIE_2 = {
    "release_date": "1994-07-06",
    "original_language": "en",
    "vote_average": 8.3,
    "original_title": "Forrest Gump",
    "backdrop_path": "/4fT3pmeO7NnyT1TBkSElIDhVThU.jpg",
    "popularity": 28.696892,
    "poster_path": "/yE5d3BUhE8hCnkMUJOo1QDoOGNz.jpg",
    "title": "Forrest Gump",
    "overview": "A man with a low IQ has accomplished great things in his life and been present during significant historic events - in each case, far exceeding what anyone imagined he could do. Yet, despite all the things he has attained, his one true love eludes him. 'Forrest Gump' is the story of a man who rose above his challenges, and who proved that determination, courage, and love are more important than ability.",
    "adult": false,
    "vote_count": 9695,
    "video": false,
    "id": 13,
    "genre_ids": [
        35,
        18,
        10749
    ]
};

export default () => {
    describe('#movies()', () => {
        it('should return the initial state', () => {
            const state = movies(undefined, {});

            expect(state).to.be.an.instanceof(Map);
            expect(state).to.have.property('isFetching', false);
        });

        it('should handle ' + REQUEST_MOVIES, () => {
            const state = movies(undefined, { type: REQUEST_MOVIES });

            expect(state).to.have.property('isFetching', true);
        });

        it('should handle ' + RECEIVE_MOVIES, () => {
            const state = movies(undefined, {
                type: RECEIVE_MOVIES,
                page: 'popular',
                items: {
                    1: MOVIE_1,
                    2: MOVIE_2,
                },
                ids: [1, 2],
            });

            expect(state).to.have.property('isFetching', false);
            expect(state).to.have.property('items', fromJS({ 1: MOVIE_1, 2: MOVIE_2 }));
            expect(state).to.have.property('popular', fromJS([1, 2]));
        });

        it('should handle ' + REQUEST_MOVIE_DETAILS, () => {
            const state = movies(undefined, {
                type: REQUEST_MOVIE_DETAILS,
                id: 1,
            });

            expect(state).to.have.property('items')
                .that.have.property(1)
                .that.have.property('isMovieFetched', false);
        });

        it('should handle ' + RECEIVE_MOVIE_DETAILS, () => {
            const state = movies(undefined, {
                type: RECEIVE_MOVIE_DETAILS,
                id: 1,
                movie: MOVIE_1,
            });
            const movie = Object.assign({}, MOVIE_1, { isMovieFetched: true });

            expect(state).to.have.property('items')
                .that.have.property(1)
                .that.eql(fromJS(movie));
        });

        it('should handle ' + TOGGLE_FAVORITE, () => {
            const initState = movies(undefined, {
                type: RECEIVE_MOVIE_DETAILS,
                id: 2,
                movie: MOVIE_2,
            });

            const state = movies(initState, {
                type: TOGGLE_FAVORITE,
                id: 2,
            });

            expect(state).to.have.property('items')
                .that.have.property(2)
                .that.have.property('isFavorite', true);
        });
    });
};
