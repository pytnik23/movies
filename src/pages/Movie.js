import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        return (
            <div>
                <div className="container">
                    { this.props.match.params.id }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    title: someMovie.original_title,
    year: someMovie.release_date,
});

export default connect(mapStateToProps)(Movie);
