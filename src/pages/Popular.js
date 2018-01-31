import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPopularMovies } from '../actions';

import PageCaption from '../components/PageCaption';
import MoviesGrid from '../containers/MoviesGrid';
import Spinner from '../components/Spinner';

class Popular extends Component {
    componentWillMount() {
        this.props.fetchPopularMovies();
    }

    render() {
        const { ids, isFetching } = this.props;
        
        return (
            <div>
                <PageCaption>
                    Current popular movies
                </PageCaption>
                { !!ids && <MoviesGrid ids={ids} /> }
                { isFetching && <Spinner /> }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ids: state.getIn(['movies', 'popular']),
    isFetching: state.getIn(['movies', 'isFetching']),
});

export default connect(mapStateToProps, { fetchPopularMovies })(Popular);
