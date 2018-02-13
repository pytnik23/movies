import React from 'react';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { getFavoriteMovies } from '../selectors';

import Movies from '../containers/Movies';

const Popular = ({ movies }) =>  (
    <Movies
        movies={movies}
        title="Favorites movies"
    />
);

Popular.propTypes = {
    movies: ImmutablePropTypes.list.isRequired,
};

const mapStateToProps = state => ({
    movies: getFavoriteMovies(state),
});

export default connect(mapStateToProps)(Popular);
