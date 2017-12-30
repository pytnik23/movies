import React from 'react';

import Search from './Search';
import FavoritesFilter from './FavoritesFilter';
import Navigation from './Navigation';

import './Header.css';

const Header = () => (
    <header className="header">
        <div className="container header-container">
            <Navigation />
            <FavoritesFilter />
            <Search />
        </div>
    </header>
);

export default Header;
