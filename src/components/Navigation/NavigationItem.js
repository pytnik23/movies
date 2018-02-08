import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationItem = ({ children, to, exact }) => {
    return (
        <li className="nav__item">
            <NavLink
                exact={exact}
                className="nav__link"
                activeClassName="nav__link_active"
                to={to}
            >
                { children }
            </NavLink>
        </li>
    );
};

export default NavigationItem;
