import React from 'react';
import PropTypes from 'prop-types';

import MdStarOutline from 'react-icons/lib/md/star-outline';
import MdStar from 'react-icons/lib/md/star';

import './styles.css';

const FavoriteButton = ({
    id,
    onClick,
    active,
    size,
    className,
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

FavoriteButton.defaultProps = {
    size: 30,
    className: '',
};

FavoriteButton.propTypes = {
    id: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
    size: PropTypes.number,
    className: PropTypes.string,
};

export default FavoriteButton;
