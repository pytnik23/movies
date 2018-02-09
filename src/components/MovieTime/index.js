import React from 'react';
import PropTypes from 'prop-types';

import MdAccessTime from 'react-icons/lib/md/access-time';

import './styles.css';

const MovieTime = ({ time, className }) => (
    <div className={`movie-time ${className}`}>
        <MdAccessTime
            size={22}
            className="movie-time__icon"
        />
        <span className="movie-time__minutes">
            { time } minutes
        </span>

    </div>
);

MovieTime.defaultProps = {
    className: '', 
};

MovieTime.propTypes = {
    time: PropTypes.number.isRequired,
};

export default MovieTime;
