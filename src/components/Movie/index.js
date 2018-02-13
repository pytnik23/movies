import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MovieYear from '../MovieYear';
import MovieTime from '../MovieTime';
import MovieVote from '../MovieVote';
import MoviePoster from '../MoviePoster';
import FavoriteButton from '../FavoriteButton';

import {
    getMovies,
    getBackdropBase,
    getPosterBase,
} from '../../selectors';

import {
    getImageUrl,
    formatPrice
} from '../../utils';

import './styles.css';

const Movie = ({
    id,
    title,
    releaseDate,
    voteAverage,
    voteCount,
    poster,
    backdrop,
    overview,
    runtime,
    budget,
    revenue,
    imdbId,
    isFavorite,
}) => (
    <div className="movie">
        <div className="movie__main-info">
            <div
                className="movie__backdrop"
                style={{ backgroundImage: `url(${backdrop})` } }
            ></div>
            <div className="movie__content">
                <div className="container">
                    <div className="movie__row">
                        <div className="movie__left-col">
                            <MoviePoster
                                poster={poster}
                                title={title}
                                className="movie__poster"
                            />
                        </div>
                        <div className="movie__right-col">
                            <MovieYear releaseDate={releaseDate} />
                            <h2 className="movie__title">{ title }</h2>
                            <MovieVote
                                average={voteAverage}
                                count={voteCount}
                            />
                            <MovieTime
                                time={runtime}
                                className="movie__time"
                            />
                            <div>Budget: {budget}</div>
                            <div>Revenue: {revenue}</div>
                            <a
                                href={`http://www.imdb.com/title/${imdbId}`}
                                target="_blank"
                                className="movie__imdb-link"
                            >
                                Go to IMDB
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="movie__additional-info">
                <div className="movie__row">
                    <div className="movie__left-col"></div>
                    <div className="movie__right-col">
                        <h3 className="movie__subtitle">Overview</h3>
                        <p className="movie__overview">{ overview }</p>
                    </div>
                </div>
                <FavoriteButton
                    className="movie__favorite-button"
                    id={id}
                    size={40}
                    active={isFavorite}
                />
            </div>
        </div>
    </div>
);

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    voteAverage: PropTypes.number.isRequired,
    voteCount: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    poster: PropTypes.string,
    backdrop: PropTypes.string,
    runtime: PropTypes.number,
    budget: PropTypes.string,
    revenue: PropTypes.string,
    imdbId: PropTypes.string,
    isFavorite: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, ownProps) => {
    const movie = getMovies(state).get(ownProps.movieId);

    return {
        id: movie.get('id'),
        title: movie.get('title'),
        releaseDate: movie.get('release_date'),
        voteAverage: movie.get('vote_average'),
        voteCount: movie.get('vote_count'),
        overview: movie.get('overview'),
        backdrop: getImageUrl(getBackdropBase(state), movie.get('backdrop_path')),
        poster: getImageUrl(getPosterBase(state), movie.get('poster_path')),
        runtime: movie.get('runtime'),
        budget: formatPrice(movie.get('budget')),
        revenue: formatPrice(movie.get('revenue')),
        imdbId: movie.get('imdb_id'),
        isFavorite: !!movie.get('isFavorite'),
    }
};

export default connect(mapStateToProps)(Movie);
