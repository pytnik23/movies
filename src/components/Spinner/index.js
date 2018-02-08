import React from 'react';

import FaSpinner from 'react-icons/lib/fa/spinner';

import './styles.css';

const Spinner = () => (
    <div className="spinner">
        <FaSpinner
            className="spinner__icon"
            size={40}
        />
    </div>
);

export default Spinner;
