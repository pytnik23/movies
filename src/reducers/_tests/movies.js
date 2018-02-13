import chai, { expect } from 'chai';
import { Map, List } from 'immutable';
import chaiImmutable from 'chai-immutable';

import movies from '../movies';
import config from '../config';

import {
    REQUEST_MOVIES,
    RECEIVE_MOVIES,
    REQUEST_MOVIE_DETAILS,
    RECEIVE_MOVIE_DETAILS,
    TOGGLE_FAVORITE,
} from '../../actions';

chai.use(chaiImmutable);

describe('reducers', () => {
    describe('#movies()', () => {
        it('should return the initial state', () => {
            const state = movies(undefined, {});

            expect(state)
            .to.be.an.instanceof(Map)
            .that.have.property('isFetching')
            .that.to.be.false;
        });
    });

    describe('#config()', () => {
        it('should return the initial state', () => {
            const state = config(undefined, {});

            expect(state)
            .to.be.an.instanceof(Map)
            .that.empty;
        });
    });
});
