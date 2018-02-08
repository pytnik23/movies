import React from 'react';
import PropTypes from 'prop-types';

const MovieVote = ({ average, count }) => (
    <div>
        <span style={{ color: '#ef8354' }}>{average}</span>
        {' '}
        <span>{`(${count})`}</span>
    </div>
);

MovieVote.propTypes = {
    average: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
};

export default MovieVote;
