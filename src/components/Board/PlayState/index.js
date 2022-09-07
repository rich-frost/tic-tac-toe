import React from 'react';
import PropTypes from 'prop-types';
import './PlayState.css';

function PlayState({ winner, isPlayerNext, playerName, onPlayAgain }) {
    function displayTurn() {
        if (!isPlayerNext) {
            return "It's the Computers turn";
        } else {
            return "It's your turn";
        }
    }
    function displayWinner() {
        if (winner === 'draw') {
            return "It's a draw!";
        } else if (winner === 'computer') {
            return `Computer won!`;
        }
        return `${playerName} won!`;
    }

    return (
        <div className="play-state-panel">
            {!winner && displayTurn()}
            {winner && <h2>{displayWinner()}</h2>}
            {winner && <button onClick={onPlayAgain}>Play Again</button>}
        </div>
    );
}

PlayState.propTypes = {
    winner: PropTypes.string,
    isPlayerNext: PropTypes.bool.isRequired,
    playerName: PropTypes.string.isRequired,
    onPlayAgain: PropTypes.func.isRequired,
};

PlayState.defaultProps = {
    winner: null,
};

export default PlayState;
