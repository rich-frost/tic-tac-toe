import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [score, setScore] = useState({ human: 0, computer: 0, draw: 0 });
    const [playerName, setPlayerName] = useState('Player 1');

    return (
        <AppContext.Provider value={{ score, setScore, playerName, setPlayerName }}>
            {children}
        </AppContext.Provider>
    );
};

AppContextProvider.propTypes = {
    children: PropTypes.element.isRequired,
};

export const useAppContext = () => useContext(AppContext);
