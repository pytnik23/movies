import React from 'react';

import NavigationItem from './NavigationItem';

import './Navigation.css';

const Navigation = () => (
    <nav className="nav">
        <ul className="nav__list">
            <NavigationItem exact to="/">Popular</NavigationItem>
            <NavigationItem to="/top-rated">Top Rated</NavigationItem>
            <NavigationItem to="/now-playing">Now Playing</NavigationItem>
            <NavigationItem to="/favorites">Favorites</NavigationItem>
        </ul>
    </nav>
);

export default Navigation;
