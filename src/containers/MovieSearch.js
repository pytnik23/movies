import { connect } from 'react-redux';

import { fetchSearchMovies } from '../actions';

import Search from '../components/Search';

export default connect(null, { onSearch: fetchSearchMovies })(Search);
