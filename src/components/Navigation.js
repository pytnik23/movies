import React from 'react';

import NavigationItem from './NavigationItem';

import './Navigation.css';

const Navigation = () => (
    <nav className="nav">
        <ul className="nav__list">
            <NavigationItem active={true}>Popular</NavigationItem>
            <NavigationItem>Top Rated</NavigationItem>
            <NavigationItem>Now Playing</NavigationItem>
        </ul>
    </nav>
);

export default Navigation;
