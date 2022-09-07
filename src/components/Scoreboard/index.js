import React, { useMemo } from 'react';
import { useAppContext } from '../../context/AppContext';
import './Scoreboard.css';
import Panel from './Panel';
import ResetScoreButton from './ResetScoreButton';

export default function Scoreboard() {
    const { score, setScore, playerName } = useAppContext();
    const labelMappings = useMemo(
        () => ({
            human: playerName,
            computer: 'Computer',
            draw: 'Draws',
        }),
        [playerName]
    );
    const hasScore = useMemo(() => {
        return Object.values(score).some((item) => item > 0);
    }, [score]);
    return (
        <div className="scoreboard panel">
            <h3>SCORE BOARD</h3>
            {Object.entries(score).map(([label, value]) => (
                <Panel key={label} {...{ label: labelMappings[label], value }} />
            ))}
            {hasScore && <ResetScoreButton setScore={setScore} />}
        </div>
    );
}
