import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { fetchMovies } from '../actions';
import {
    isMoviesFetching,
    getPopularMovies,
    getTopRatedMovies,
    getNowPlayingMovies,
    getFavoriteMovies,
    getSearchMovies,
} from '../selectors';

import PageCaption from '../components/PageCaption';
import MoviesGrid from '../containers/MoviesGrid';
import Spinner from '../components/Spinner';

const getMovies = page => {
    switch (page) {
        case 'topRated':
            return getTopRatedMovies;
        case 'nowPlaying':
            return getNowPlayingMovies;
        case 'favorites':
            return getFavoriteMovies;
        case 'search':
            return getSearchMovies;
        case 'popular':
        default:
            return getPopularMovies;
    }
}


class Movies extends Component {
    componentDidMount() {
        if (this.props.page === 'favorites') return;

        this.props.fetchMovies(this.props.page, this.props.params);
    }

    render() {
        const { isFetching, movies, title } = this.props;

        return (
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
    }
}

Movies.defaultProps = {
    params: '',
}

Movies.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    fetchMovies: PropTypes.func.isRequired,
    movies: ImmutablePropTypes.list.isRequired,
    title: PropTypes.string,
    page: PropTypes.string,
    params: PropTypes.string,
};

const mapStateToProps = (state, ownProps) => ({
    isFetching: isMoviesFetching(state),
    movies: getMovies(ownProps.page)(state),
    params: ownProps.params,
});

export default connect(mapStateToProps, { fetchMovies })(Movies);
