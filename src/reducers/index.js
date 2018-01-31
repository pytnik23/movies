import { combineReducers } from 'redux-immutable';

import movies from './movies';
import config from './config';

export default combineReducers({ movies, config });
