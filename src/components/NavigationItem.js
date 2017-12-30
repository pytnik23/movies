import React from 'react';

const NavigationItem = ({ children, active = false }) => {
    let className = 'nav__item';

    if (active) {
        className += ' nav__item_active';
    }

    return (
        <li className={className}>
            <a
                className="nav__link"
                href="#"
            >
                { children }
            </a>
        </li>
    );
};

export default NavigationItem;
