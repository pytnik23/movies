import React from 'react';

import Movies from '../containers/Movies';

const SearchPage = ({ match }) => <Movies
    page="search"
    params={`&query=${match.params.search}`}
    title={`Search results for "${match.params.search}"`}
/>;

export default SearchPage;
