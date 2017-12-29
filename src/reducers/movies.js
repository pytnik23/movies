import {
    REQUEST_MOVIES,
    RECEIVE_MOVIES,
    SAVE_TO_FAVORITES,
    REMOVE_FROM_FAVORITES
} from '../actions';

export default (state = {
    isFetching: false,
    items: [],
    favoriteItems: []
}, action) => {
    switch (action.type) {
        case REQUEST_MOVIES:
            return {
                ...state,
                isFetching: true
            };
        case RECEIVE_MOVIES:
            return {
                ...state,
                isFetching: false,
                items: action.items.map(item => ({...item, isFavorite: false}))
            };
        case SAVE_TO_FAVORITES:
            return {
                ...state,
                items: state.items.map(item => {
                    return item.id === action.movie.id
                    ? { ...item, isFavorite: true }
                    : item;
                }),
                favoriteItems: [
                    ...state.favoriteItems,
                    { ...action.movie, isFavorite: true }
                ]
            };
        case REMOVE_FROM_FAVORITES:
            return {
                ...state,
                items: state.items.map(item => {
                    return item.id === action.id
                    ? {...item, isFavorite: false}
                    : item;
                }),
                favoriteItems: state.favoriteItems.filter(item => item.id !== action.id)
            };
        default:
            return state;
    }
}
