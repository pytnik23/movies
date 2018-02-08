import React from 'react';

const MovieYear = ({ releaseDate }) => {
    const year = releaseDate.slice(0, 4);

    return <time dateTime={year}>{ year }</time>
};

export default MovieYear;
