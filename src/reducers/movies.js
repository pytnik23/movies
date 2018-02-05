import { Map, List, fromJS } from 'immutable';

import {
    REQUEST_MOVIES,
    RECEIVE_MOVIES,
    TOGGLE_FAVORITE,
} from '../actions';

const initialState = Map({
    isFetching: false,
    items: Map(),
    popular: List(),
    topRated: List(),
    nowPlaying: List(),
    search: List(),
});

export default (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_MOVIES:
            return state.set('isFetching', true);
        case RECEIVE_MOVIES:
            return state
                .set('isFetching', false)
                .set(action.page, fromJS(action.ids))
                .mergeIn(['items'], fromJS(action.items));
        case TOGGLE_FAVORITE:
            return state.setIn(
                ['items', action.id, 'isFavorite'],
                !state.getIn(['items', action.id, 'isFavorite'])
            );
        default:
            return state;
    }
}
