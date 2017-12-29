import React from 'react';

import MdFavoriteOutline from 'react-icons/lib/md/favorite-outline';
import MdFavorite from 'react-icons/lib/md/favorite';

const ListItem = ({
    title,
    poster,
    isFavorite,
    saveToFavorites,
    removeFromFavorites
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
            onClick={isFavorite ? removeFromFavorites : saveToFavorites}
        >
            {
                isFavorite
                ? <MdFavorite size={30} />
                : <MdFavoriteOutline size={30} />
            }
        </button>
    </li>
);

export default ListItem;
