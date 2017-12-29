import React from 'react';

import Search from './Search';
import FavoritesFilter from './FavoritesFilter';

import './Header.css';

const Header = () => (
    <header className="header">
        <div className="container header-container">
            <Search />
            <FavoritesFilter />
        </div>
    </header>
);

export default Header;
