import { FETCH_CONFIG, SAVE_CONFIG } from '../actions';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_CONFIG:
            return {
                ...action.imagesConfig,
                lastFetch: action.lastFetchDate
            };
        case SAVE_CONFIG:
            return action.config;
        default:
            return state;
    }
}
