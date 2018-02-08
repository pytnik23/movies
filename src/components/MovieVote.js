import React from 'react';

const MovieVote = ({ average, count }) => (
    <div>
        <span style={{ color: '#ef8354' }}>{average}</span>
        {' '}
        <span>{`(${count})`}</span>
    </div>
);

export default MovieVote;
