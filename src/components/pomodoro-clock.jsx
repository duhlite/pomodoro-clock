import React from 'react';
import BreakTimer from './break-timer';
import SessionTimer from './session-timer';
import Timer from './timer';

const PomodoroClock = () => {
    return (
        <div>
        <BreakTimer />
        <SessionTimer />
        <Timer />
        </div>
    )
}

export default PomodoroClock;