import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchNowPlayingMovies } from '../actions';
import {
    isMoviesFetching,
    getNowPlayingMovies,
} from '../selectors';

import PageCaption from '../components/PageCaption';
import MoviesGrid from '../containers/MoviesGrid';
import Spinner from '../components/Spinner';

class NowPlaying extends Component {
    componentWillMount() {
        this.props.fetchNowPlayingMovies();
    }

    render() {
        const { isFetching } = this.props;

        return (
            <div className="container">
                <PageCaption>
                    Now playing movies
                </PageCaption>
                <MoviesGrid
                    getCurrentMovies={getNowPlayingMovies}
                />
                { isFetching && <Spinner /> }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isFetching: isMoviesFetching(state),
});

export default connect(mapStateToProps, { fetchNowPlayingMovies })(NowPlaying);
