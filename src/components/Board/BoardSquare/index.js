import React from 'react';
import PropTypes from 'prop-types';
import Counter from '../Counter';
import Square from '../Square';
import './BoardSquare.css';

export default function BoardSquare({ i, onPlay, board }) {
    const x = i % 3;
    const y = Math.floor(i / 3);
    const usedSpace = board[x][y];
    const piece = usedSpace ? <Counter>{usedSpace}</Counter> : null;
    const onClick = () => onPlay(x, y);

    return (
        <div key={i} className="board-square">
            <Square onClick={onClick}>{piece}</Square>
        </div>
    );
}

BoardSquare.propTypes = {
    i: PropTypes.number.isRequired,
    onPlay: PropTypes.func.isRequired,
    board: PropTypes.arrayOf(PropTypes.array),
};
