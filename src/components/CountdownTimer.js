import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ stopTimerForUser }) => {
    const [time, setTime] = useState('');

    useEffect(() => {
        if (!stopTimerForUser) {
            const interval = setInterval(() => {
                const now = new Date();
                const midnight = new Date();
                midnight.setHours(24, 0, 0, 0);
                const diff = midnight - now;

                const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((diff / (1000 * 60)) % 60);
                const seconds = Math.floor((diff / 1000) % 60);

                setTime(`${hours}h ${minutes}m ${seconds}s`);
            }, 1000);

            return () => clearInterval(interval);
        } else {
            setTime('Task completed for today!');
        }
    }, [stopTimerForUser]);

    return <div id="timer">{time}</div>;
};

export default CountdownTimer;
