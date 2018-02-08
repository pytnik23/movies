import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const PageCaption = ({ children }) => (
    <p className="page-caption">{ children }</p>
);

PageCaption.propTypes = {
    children: PropTypes.string.isRequired,
};

export default PageCaption;
