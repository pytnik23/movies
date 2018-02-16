import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { fetchMovies } from '../actions';
import { getTopRatedMovies } from '../selectors';

import Movies from '../containers/Movies';

class TopRated extends Component {
    componentDidMount() {
        if (!this.props.movies.size) {
            this.props.fetchMovies('topRated');
        }
    }

    render() {
        return (
            <Movies
                movies={this.props.movies}
                title="Top rated movies"
            />
        );
    }
}

TopRated.propTypes = {
    movies: ImmutablePropTypes.list.isRequired,
    fetchMovies: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    movies: getTopRatedMovies(state),
});

export default connect(mapStateToProps, { fetchMovies })(TopRated);
