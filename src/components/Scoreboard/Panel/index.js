import React from 'react';
import PropTypes from 'prop-types';
import './Panel.css';

export default function Panel({ label, value }) {
    return (
        <div className="scoreboard-panel">
            <h4>{label}</h4>
            <div className="scoreboard-panel-value">{value}</div>
        </div>
    );
}

Panel.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
};
