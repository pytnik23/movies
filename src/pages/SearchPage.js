import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { fetchMovies } from '../actions';
import { getSearchMovies } from '../selectors';

import Movies from '../containers/Movies';

class SearchPage extends Component {

    componentDidMount() {
        this.fetchSearchMovies(this.props.match.params.search);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.search !== nextProps.match.params.search) {
            this.fetchSearchMovies(nextProps.match.params.search);
        }
    }

    fetchSearchMovies = (query) => {
        this.props.fetchMovies('search', `&query=${query}`);
    }

    render() {
        const { search, movies } = this.props;

        return (
            <Movies
                movies={movies}
                title={`Search results for "${search}"`}
            />
        );
    }
}

SearchPage.propTypes = {
    movies: ImmutablePropTypes.list.isRequired,
    search: PropTypes.string.isRequired,
    fetchMovies: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
    movies: getSearchMovies(state),
    search: ownProps.match.params.search,
});

export default connect(mapStateToProps, { fetchMovies })(SearchPage);
