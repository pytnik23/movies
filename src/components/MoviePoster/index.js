import React from 'react';

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

export default MoviePoster;
