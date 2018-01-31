import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchTopRatedMovies } from '../actions';

import PageCaption from '../components/PageCaption';
import MoviesGrid from '../containers/MoviesGrid';
import Spinner from '../components/Spinner';

class TopRated extends Component {
    componentWillMount() {
        this.props.fetchTopRatedMovies();
    }

    render() {
        const { ids, isFetching } = this.props;
        return (
            <div>
                <PageCaption>
                    Top rated movies
                </PageCaption>
                { !!ids && <MoviesGrid ids={ids} /> }
                { isFetching && <Spinner /> }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ids: state.getIn(['movies', 'topRated']),
    isFetching: state.getIn(['movies', 'isFetching']),
});

export default connect(mapStateToProps, { fetchTopRatedMovies })(TopRated);
