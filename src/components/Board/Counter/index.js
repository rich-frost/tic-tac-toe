import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

function Counter({ children }) {
    return <div className="counter">{children}</div>;
}

Counter.propTypes = {
    children: PropTypes.string.isRequired,
};

export default Counter;
