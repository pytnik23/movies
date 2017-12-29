import React from 'react';

import { connect } from 'react-redux';

import { toggleShowFavorites } from '../actions';

import MdFavoriteOutline from 'react-icons/lib/md/favorite-outline';
import MdFavorite from 'react-icons/lib/md/favorite';

import './FavoritesFilter.css';

const FavoritesFilter = ({ showOnlyFavorites, toggleShowFavorites }) =>  (
    <button
        className="favorite-filter"
        type="button"
        onClick={toggleShowFavorites}
    >
        <span className="favorite-filter__icon">
            {
                showOnlyFavorites
                ? <MdFavorite size={30} />
                : <MdFavoriteOutline size={30} />
            }
        </span>
        <span>Favorites</span>
    </button>
);

const mapStateToProps = state => {
    return {
        showOnlyFavorites: state.showOnlyFavorites
    };
};

export default connect(mapStateToProps, { toggleShowFavorites })(FavoritesFilter);
