import React, { useReducer, useEffect, useMemo } from 'react';
import { COMPUTER_DELAY, PLAYERS } from '../../constants';
import { useAppContext } from '../../context/AppContext';
import useCheckWinner from '../../hooks/useCheckWinner';
import { getInitalBoardState } from '../../utils';
import BoardSquare from './BoardSquare';
import PlayState from './PlayState';
import './Board.css';

export default function Board() {
    const { score, setScore, playerName } = useAppContext();

    const [{ board, isPlayerNext }, setBoardPlay] = useReducer(
        (oldState, newState) => {
            return { ...oldState, ...newState };
        },
        { board: getInitalBoardState(), isPlayerNext: true }
    );

    const winner = useMemo(() => {
        return useCheckWinner({ board });
    }, [board]);

    useEffect(() => {
        if (!winner) return;
        const newScore = { ...score };
        newScore[winner] = score[winner] + 1;
        setScore(newScore);
    }, [winner]);

    useEffect(() => {
        if (winner) return;

        if (!isPlayerNext) {
            setTimeout(() => {
                computersPlay();
            }, COMPUTER_DELAY);
        }
    }, [isPlayerNext]);

    function onPlay(arrayIndex, index) {
        if (!isPlayerNext) return;
        if (winner) return;
        const emptySpaces = getEmptySpaces();
        const alreadyTaken = emptySpaces.find(
            (space) => space.arrayIndex === arrayIndex && space.index === index
        );
        if (!alreadyTaken) return;
        board[arrayIndex][index] = PLAYERS.human.symbol;

        setBoardPlay({ board: [...board], isPlayerNext: false });
    }

    function computersPlay() {
        const computersMove = getComputersTurn();
        board[computersMove.arrayIndex][computersMove.index] = PLAYERS.computer.symbol;

        setBoardPlay({ board: [...board], isPlayerNext: true });
    }

    function getEmptySpaces() {
        const emptyIndexes = [];
        board.forEach((row, arrayIndex) => {
            row.forEach((cell, index) => {
                if (cell === '') {
                    emptyIndexes.push({ arrayIndex, index });
                }
            });
        });

        return emptyIndexes;
    }

    function getComputersTurn() {
        const emptySpaces = getEmptySpaces();
        const randomIndex = Math.floor(Math.random() * emptySpaces.length);
        return emptySpaces[randomIndex];
    }

    function onPlayAgain() {
        setBoardPlay({ board: getInitalBoardState(), isPlayerNext: true });
    }

    const squares = [];
    for (let i = 0; i < 9; i++) {
        squares.push(<BoardSquare key={i} {...{ i, onPlay, board }} />);
    }

    return (
        <main className="content panel">
            <PlayState {...{ winner, onPlayAgain, playerName, isPlayerNext }} />
            <div className="board-container">
                <div className="board">{squares}</div>
            </div>
        </main>
    );
}
