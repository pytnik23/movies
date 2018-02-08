import React, { Component } from 'react';
import { connect } from 'react-redux';

import MovieYear from '../../components/MovieYear';

import { getBackdropBase } from '../../selectors';
import { getImageUrl } from '../../utils';

import './styles.css';

const someMovie = {
    release_date: '2014-09-10',
    isFavorite: false,
    original_language: 'en',
    vote_average: 7,
    original_title: 'The Maze Runner',
    backdrop_path: '/lkOZcsXcOLZYeJ2YxJd3vSldvU4.jpg',
    popularity: 462.631829,
    poster_path: '/coss7RgL0NH6g4fC2s5atvf3dFO.jpg',
    title: 'The Maze Runner',
    overview: 'Set in a post-apocalyptic world, young Thomas is deposited in a community of boys after his memory is erased, soon learning they\'re all trapped in a maze that will require him to join forces with fellow “runners” for a shot at escape.',
    adult: false,
    vote_count: 6638,
    video: false,
    id: 198663,
    genre_ids: [ 28, 9648, 878, 53 ],
    "budget": 63000000,
    "revenue": 100853753,
    "runtime": 139,
    "imdb_id": "tt0137523",
};

class Movie extends Component {
    render() {
        const {
            title,
            releaseDate,
        } = this.props;
        return (
            <div className="movie">
                <div className="movie__main-info">
                    <div className="container">
                        <h2>{ title }</h2>
                        <MovieYear releaseDate={releaseDate} />
                    </div>
                </div>
                <div className="movie__content">
                    <div className="container">
                        { this.props.match.params.id }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    title: someMovie.title,
    releaseDate: someMovie.release_date,
    voteAverage: someMovie.vote_average,
    voteCount: someMovie.vote_count,
    overview: someMovie.overview,
    runtime: someMovie.runtime,
    backdrop: getImageUrl(getBackdropBase(state), someMovie.backdrop_path),
});

export default connect(mapStateToProps)(Movie);
