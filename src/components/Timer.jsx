import React, { useState, useEffect } from 'react';

function Timer() {
    const [timeLeft, setTimeLeft] = useState(10000000); // Replace with your time logic
    const [isVotingActive, setIsVotingActive] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prev) => prev - 1000);
            if (timeLeft <= 0) {
                setIsVotingActive(true);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [timeLeft]);

    const formatTime = (time) => {
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((time / (1000 * 60)) % 60);
        const seconds = Math.floor((time / 1000) % 60);

        return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };

    return (
        <div className="timer">
            <p>{isVotingActive ? 'Voting ends in:' : 'Voting starts in:'} {formatTime(timeLeft)}</p>
        </div>
    );
}

export default Timer;
