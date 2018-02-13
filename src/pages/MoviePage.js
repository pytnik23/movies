import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Spinner from '../components/Spinner';
import Movie from '../components/Movie';

import { fetchMovieDetails } from '../actions';
import { getMovies } from '../selectors';

class MoviePage extends Component {
    componentWillMount() {
        if (!this.props.isMovieFetched) {
            this.props.fetchMovieDetails(this.props.id);
        }
    }

    render() {
        const { isMovieFetched, id } = this.props;

        return isMovieFetched
        ? <Movie movieId={id} />
        : <Spinner />;
    }
}

Movie.propTypes = {
    id: PropTypes.string,
    isMovieFetched: PropTypes.bool,
    fetchMovieDetails: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;

    return {
        isMovieFetched: getMovies(state).getIn([id, 'isMovieFetched']),
        id,
    }
};

export default connect(mapStateToProps, { fetchMovieDetails })(MoviePage);
