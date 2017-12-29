import { TOGGLE_SHOW_FAVORITES } from '../actions';

export default (state = false, action) => {
    switch (action.type) {
        case TOGGLE_SHOW_FAVORITES:
            return !state;
        default:
            return state;
    }
}
