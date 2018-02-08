import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchTopRatedMovies } from '../actions';
import {
    isMoviesFetching,
    getTopRatedMovies,
} from '../selectors';

import PageCaption from '../components/PageCaption';
import MoviesGrid from '../containers/MoviesGrid';
import Spinner from '../components/Spinner';

class TopRated extends Component {
    componentWillMount() {
        this.props.fetchTopRatedMovies();
    }

    render() {
        const { isFetching } = this.props;

        return (
            <div className="container">
                <PageCaption>
                    Top rated movies
                </PageCaption>
                <MoviesGrid
                    getCurrentMovies={getTopRatedMovies}
                />
                { isFetching && <Spinner /> }
            </div>
        );
    }
}

TopRated.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    fetchTopRatedMovies: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    isFetching: isMoviesFetching(state),
});

export default connect(mapStateToProps, { fetchTopRatedMovies })(TopRated);
