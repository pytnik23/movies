import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchNowPlayingMovies } from '../actions';

import PageCaption from '../components/PageCaption';
import MoviesGrid from '../containers/MoviesGrid';
import Spinner from '../components/Spinner';

class NowPlaying extends Component {
    componentWillMount() {
        this.props.fetchNowPlayingMovies();
    }

    render() {
        const { ids, isFetching } = this.props;
        return (
            <div>
                <PageCaption>
                    Now playing movies
                </PageCaption>
                { !!ids && <MoviesGrid ids={ids} /> }
                { isFetching && <Spinner /> }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ids: state.getIn(['movies', 'nowPlaying']),
    isFetching: state.getIn(['movies', 'isFetching']),
});

export default connect(mapStateToProps, { fetchNowPlayingMovies })(NowPlaying);
