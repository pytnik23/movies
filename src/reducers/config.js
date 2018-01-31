import { Map } from 'immutable';

import { FETCH_CONFIG, SAVE_CONFIG } from '../actions';

export default (state = new Map(), action) => {
    switch (action.type) {
        case FETCH_CONFIG:
            return state
                .merge(action.imagesConfig)
                .set('lastFetch', action.lastFetchDate);
        case SAVE_CONFIG:
            return state.merge(action.config);
        default:
            return state;
    }
}
