import { connect } from 'react-redux';

import { searchMovies } from '../actions';

import Search from '../components/Search';

export default connect(null, { onSearch: searchMovies })(Search);
