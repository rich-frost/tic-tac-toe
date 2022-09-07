import { PLAYERS } from '../../constants';

export default function useCheckWinner({ board }) {
    const { id: playerId, symbol: humanSymbol } = PLAYERS.human;
    const { id: computerId, symbol: computerSymbol } = PLAYERS.computer;

    // check same row
    for (let index = 0; index < board.length; index++) {
        const row = board[index];
        if (row.every((cell) => cell === humanSymbol)) {
            return playerId;
        } else if (row.every((cell) => cell === computerSymbol)) {
            return computerId;
        }
    }

    // check same column
    for (let i = 0; i < 3; i++) {
        const column = board.map((row) => row[i]);
        if (column.every((cell) => cell === humanSymbol)) {
            return playerId;
        } else if (column.every((cell) => cell === computerSymbol)) {
            return computerId;
        }
    }

    // check same diagonal
    const diagonal1 = [board[0][0], board[1][1], board[2][2]];
    const diagonal2 = [board[0][2], board[1][1], board[2][0]];
    if (diagonal1.every((cell) => cell === humanSymbol)) {
        return playerId;
    } else if (diagonal1.every((cell) => cell === computerSymbol)) {
        return computerId;
    } else if (diagonal2.every((cell) => cell === humanSymbol)) {
        return playerId;
    } else if (diagonal2.every((cell) => cell === computerSymbol)) {
        return computerId;
    } else if (board.flat().every((cell) => cell !== '')) {
        return 'draw';
    } else {
        return null;
    }
}
