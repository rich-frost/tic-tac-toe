import React from 'react';
import { useAppContext } from '../../context/AppContext';
import './Welcome.css';

function Welcome() {
    const { playerName, setPlayerName } = useAppContext();
    const handleFocus = (e) => e.target.select();
    return (
        <div className="info">
            <h2>
                Welcome{' '}
                <input
                    type="text"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    onFocus={handleFocus}
                />
                *!!!
            </h2>
            <p>To start the game, click on a square</p>
            <p>* Click on the text to change your name</p>
        </div>
    );
}

export default Welcome;
