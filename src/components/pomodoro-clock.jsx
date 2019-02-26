import React from 'react';
import BreakTimer from './break-timer';
import SessionTimer from './session-timer';

const PomodoroClock = () => {
    return (
        <div>
        <BreakTimer />
        <SessionTimer />
        </div>
    )
}

export default PomodoroClock;