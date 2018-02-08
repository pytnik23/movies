import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MoviePoster from '../../components/MoviePoster';
import MovieYear from '../../components/MovieYear';
import MovieVote from '../../components/MovieVote';
import FavoriteButton from '../../components/FavoriteButton';

class MovieGridItem extends Component {
    handleFavoriteClick = (e) => {
        e.preventDefault();

        this.props.onFavoriteClick(this.props.id + '');
    }

    render() {
        const {
            id,
            title,
            poster,
            releaseDate,
            voteAverage,
            voteCount,
            isFavorite,
        } = this.props;

        return (
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
                        active={isFavorite}
                        id={id}
                        onClick={this.handleFavoriteClick}
                    />
                </Link>
            </li>
        );
    }
}

export default MovieGridItem;
