import React from 'react';

import MovieSearch from '../../containers/MovieSearch';
import Navigation from '../Navigation';

import './styles.css';

const Header = () => (
    <header className="header">
        <div className="container header-container">
            <Navigation />
            <MovieSearch />
        </div>
    </header>
);

export default Header;
