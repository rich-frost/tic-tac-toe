import React from 'react';
import { render } from '@testing-library/react';
import Scoreboard from './';
import { useAppContext } from '../../context/AppContext';

jest.mock('../../context/AppContext');

test('renders default scoreboard', () => {
    useAppContext.mockImplementation(() => ({
        score: { human: 0, computer: 0, draw: 0 },
        setScore: () => {},
        playerName: 'Richard',
    }));
    const { container } = render(<Scoreboard />);
    expect(container).toMatchSnapshot();
});

test('renders scoreboard with values and reset button', () => {
    useAppContext.mockImplementation(() => ({
        score: { human: 1, computer: 3, draw: 6 },
        setScore: () => {},
        playerName: 'Rich',
    }));
    const { container } = render(<Scoreboard />);
    expect(container).toMatchSnapshot();
});
