import React, { useEffect, useState } from 'react';

const CountdownTimer = ({ stopTimerForUser }) => {
    const calculateTimeLeft = () => {
        const now = new Date();
        const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
        const difference = midnight - now;
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        if (!stopTimerForUser) {
            const timer = setTimeout(() => {
                setTimeLeft(calculateTimeLeft());
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft, stopTimerForUser]);

    return (
        <div className="countdown-timer">
            {stopTimerForUser ? (
                <span>Tasks completed for the day!</span>
            ) : (
                <span>
                    {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
                </span>
            )}
        </div>
    );
};

export default CountdownTimer;
