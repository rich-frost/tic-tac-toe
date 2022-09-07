import React from 'react';
import PropTypes from 'prop-types';
import './Square.css';

export default function Square({ onClick, children }) {
    return (
        <div className="square" onClick={() => onClick()}>
            {children}
        </div>
    );
}

Square.propTypes = {
    children: PropTypes.element,
    onClick: PropTypes.func.isRequired,
};

PropTypes.defaultProps = {
    children: null,
};
