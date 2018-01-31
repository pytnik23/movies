import React from 'react';

import MdFavoriteOutline from 'react-icons/lib/md/favorite-outline';
import MdFavorite from 'react-icons/lib/md/favorite';

const Movie = ({
    id,
    title,
    poster,
    isFavorite,
    toggleFavorite,
}) => (
    <li className="movie">
        <figure className="movie__poster">
            { poster &&
                <img
                    className="movie__image"
                    src={poster}
                    alt={title}
                />
            }
        </figure>
        <h3 className="movie__title">{title}</h3>
        <button
            className={`movie__button ${isFavorite ? 'movie__button_active' : ''}`}
            type="button"
            data-id={id}
            onClick={toggleFavorite}
        >
            {
                isFavorite
                ? <MdFavorite size={30} />
                : <MdFavoriteOutline size={30} />
            }
        </button>
    </li>
);

export default Movie;
