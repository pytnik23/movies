import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const MoviePoster = ({
    poster,
    title,
    className,
}) => (
    <div className={`movie-poster ${className}`}>
        { poster &&
            <img
                src={poster}
                alt={title}
            />
        }
    </div>
);

MoviePoster.defaultProps = {
    className: '',
};

MoviePoster.propTypes = {
    poster: PropTypes.string,
    title: PropTypes.string,
    className: PropTypes.string,
};

export default MoviePoster;
