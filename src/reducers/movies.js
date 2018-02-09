import { Map, List, fromJS } from 'immutable';

import {
    REQUEST_MOVIES,
    RECEIVE_MOVIES,
    REQUEST_MOVIE_DETAILS,
    RECEIVE_MOVIE_DETAILS,
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
        case REQUEST_MOVIE_DETAILS:
            return state.setIn(['items', action.id, 'isMovieFetched'], false);
        case RECEIVE_MOVIE_DETAILS:
            return state
            .setIn(['items', action.id, 'isMovieFetched'], true)
            .mergeIn(['items', action.id], fromJS(action.movie));
        case TOGGLE_FAVORITE:
            return state.setIn(
                ['items', action.id, 'isFavorite'],
                !state.getIn(['items', action.id, 'isFavorite'])
            );
        default:
            return state;
    }
}
