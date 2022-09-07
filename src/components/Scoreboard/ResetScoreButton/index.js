import React from 'react';
import PropTypes from 'prop-types';

export default function ResetScoreButton({ setScore }) {
    return (
        <button onClick={() => setScore({ human: 0, computer: 0, draw: 0 })}>Reset score</button>
    );
}

ResetScoreButton.propTypes = {
    setScore: PropTypes.func.isRequired,
};
