import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const MoviePoster = ({ poster, title }) => (
    <div className="movie-poster">
        { poster &&
            <img
                src={poster}
                alt={title}
            />
        }
    </div>
);

MoviePoster.propTypes = {
    poster: PropTypes.string,
    title: PropTypes.string,
};

export default MoviePoster;
