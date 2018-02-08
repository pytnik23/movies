import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPopularMovies } from '../actions';
import {
    isMoviesFetching,
    getPopularMovies,
} from '../selectors';

import PageCaption from '../components/PageCaption';
import MoviesGrid from '../containers/MoviesGrid';
import Spinner from '../components/Spinner';

class Popular extends Component {
    componentWillMount() {
        this.props.fetchPopularMovies();
    }

    render() {
        const { isFetching } = this.props;

        return (
            <div className="container">
                <PageCaption>
                    Current popular movies
                </PageCaption>
                <MoviesGrid
                    getCurrentMovies={getPopularMovies}
                />
                { isFetching && <Spinner /> }
            </div>
        );
    }
}

Popular.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    fetchPopularMovies: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    isFetching: isMoviesFetching(state),
});

export default connect(mapStateToProps, { fetchPopularMovies })(Popular);
