import React from 'react';
import './App.css';
import Board from './components/Board';
import Scoreboard from './components/Scoreboard';
import PageTitle from './components/PageTitle';
import { AppContextProvider } from './context/AppContext';
import Welcome from './components/Welcome';

function App() {
    return (
        <AppContextProvider>
            <div className="app">
                <header className="header">
                    <PageTitle />
                </header>
                <Welcome />

                <Board />

                <Scoreboard />
            </div>
        </AppContextProvider>
    );
}

export default App;
