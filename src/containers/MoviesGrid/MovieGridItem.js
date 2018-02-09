import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import MoviePoster from '../../components/MoviePoster';
import MovieYear from '../../components/MovieYear';
import MovieVote from '../../components/MovieVote';
import FavoriteButton from '../../components/FavoriteButton';

const MovieGridItem = ({
    id,
    title,
    poster,
    releaseDate,
    voteAverage,
    voteCount,
    isFavorite,
}) =>  (
    <li className="movies-grid__item">
        <Link
            to={`/movie/${id}`}
            className="movies-grid__link"
        >
            <MoviePoster
                poster={poster}
                title={title}
            />
            <h3
                className="movies-grid__title"
                title={title}
            >
                {title}
            </h3>
            <div className="movies-grid__item-footer">
                <MovieYear releaseDate={releaseDate} />
                <MovieVote
                    average={voteAverage}
                    count={voteCount}
                />
            </div>
            <FavoriteButton
                className={`movies-grid__button ${isFavorite ? 'movies-grid__button_active' : ''}`}
                id={id}
                active={isFavorite}
            />
        </Link>
    </li>
);

MovieGridItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string,
    releaseDate: PropTypes.string.isRequired,
    voteAverage: PropTypes.number.isRequired,
    voteCount: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
};

export default MovieGridItem;
