import React from 'react';
import PropTypes from 'prop-types';

const MovieYear = ({ releaseDate }) => {
    const year = releaseDate.slice(0, 4);

    return <time dateTime={year}>{ year }</time>
};

MovieYear.propTypes = {
    releaseDate: PropTypes.string.isRequired,
};

export default MovieYear;
