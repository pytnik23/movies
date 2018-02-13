import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { isMoviesFetching } from '../selectors';

import PageCaption from '../components/PageCaption';
import MoviesGrid from '../containers/MoviesGrid';
import Spinner from '../components/Spinner';

const Movies = ({ isFetching, movies, title }) =>  (
    <div className="container">
        <PageCaption>
            { title }
        </PageCaption>
        <MoviesGrid
            movies={movies}
        />
        { isFetching && <Spinner /> }
    </div>
);

Movies.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    movies: ImmutablePropTypes.list.isRequired,
    title: PropTypes.string,
};

const mapStateToProps = (state, ownProps) => ({
    isFetching: isMoviesFetching(state),
});

export default connect(mapStateToProps)(Movies);
