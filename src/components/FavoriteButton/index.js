import React from 'react';

import MdStarOutline from 'react-icons/lib/md/star-outline';
import MdStar from 'react-icons/lib/md/star';

import './styles.css';

const FavoriteButton = ({
    id,
    onClick,
    active,
    size = 30,
    className = ''
}) => (
    <button
        className={`favorite-button ${className}`}
        type="button"
        onClick={onClick}
    >
        {
            active
            ? <MdStar size={size} />
            : <MdStarOutline size={size} />
        }
    </button>
);

export default FavoriteButton;
