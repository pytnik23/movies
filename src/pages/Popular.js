import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { fetchMovies } from '../actions';
import { getPopularMovies } from '../selectors';

import Movies from '../containers/Movies';

class Popular extends Component {
    componentWillMount() {
        this.props.fetchMovies('popular');
    }

    render() {
        return (
            <Movies
                movies={this.props.movies}
                title="Current popular movies"
            />
        );
    }
}

Popular.propTypes = {
    movies: ImmutablePropTypes.list.isRequired,
    fetchMovies: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    movies: getPopularMovies(state),
});

export default connect(mapStateToProps, { fetchMovies })(Popular);
