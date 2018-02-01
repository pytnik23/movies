import React from 'react';
import { Link } from 'react-router-dom';

import MdStarOutline from 'react-icons/lib/md/star-outline';
import MdStar from 'react-icons/lib/md/star';

const MovieGridItem = ({
    id,
    title,
    poster,
    year,
    voteAverage,
    voteCount,
    isFavorite,
    onFavoriteClick,
}) => (
    <li className="movies-grid__item">
        <Link
            to={`/movie/${id}`}
            className="movies-grid__link"
        >
            <div className="movies-grid__poster">
                { poster &&
                    <img
                        src={poster}
                        alt={title}
                    />
                }
            </div>
            <h3
                className="movies-grid__title"
                title={title}
            >
                {title}
            </h3>
            <div className="movies-grid__item-footer">
                <span className="movies-grid__item-year">{ year.slice(0, 4) }</span>
                <span className="movies-grid__item-votes-average">{ voteAverage }</span>
                <span className="movies-grid__item-votes-count">{ ` (${voteCount})` }</span>

            </div>
            <button
                className={`movies-grid__button ${isFavorite ? 'movies-grid__button_active' : ''}`}
                type="button"
                data-id={id}
                onClick={onFavoriteClick}
            >
                {
                    isFavorite
                    ? <MdStar size={30} />
                    : <MdStarOutline size={30} />
                }
            </button>
        </Link>
    </li>
);

export default MovieGridItem;
