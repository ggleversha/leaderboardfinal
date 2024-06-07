import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await fetch('/api/leaderboard');
            const data = await response.json();
            setTasks(Object.entries(data));
        };

        fetchTasks();
    }, []);

    return (
        <div id="leaderboard">
            <h2>Leaderboard</h2>
            <ul id="leaderboardList">
                {tasks.map(([userId, task]) => (
                    <li key={userId}>{`User: ${userId}, Task: ${task}`}</li>
                ))}
            </ul>
        </div>
    );
};

export default Leaderboard;
