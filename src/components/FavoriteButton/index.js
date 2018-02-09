import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toggleFavorite } from '../../actions';

import MdStarOutline from 'react-icons/lib/md/star-outline';
import MdStar from 'react-icons/lib/md/star';

import './styles.css';

class FavoriteButton extends Component {
    handleClick = (e) => {
        e.preventDefault();

        this.props.toggleFavorite(this.props.id);
    }

    render() {
        const {
            active,
            size,
            className,
        } = this.props;

        return (
            <button
                className={`favorite-button ${className}`}
                type="button"
                onClick={this.handleClick}
                >
                    {
                        active
                        ? <MdStar size={size} />
                        : <MdStarOutline size={size} />
                    }
                </button>
            );
    }
}

FavoriteButton.defaultProps = {
    size: 30,
    className: '',
};

FavoriteButton.propTypes = {
    id: PropTypes.number.isRequired,
    toggleFavorite: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
    size: PropTypes.number,
    className: PropTypes.string,
};

export default connect(null, { toggleFavorite })(FavoriteButton);
