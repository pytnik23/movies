import { combineReducers } from 'redux';

import movies from './movies';
import config from './config';
import showOnlyFavorites from './showOnlyFavorites';

export default combineReducers({ movies, config, showOnlyFavorites });
