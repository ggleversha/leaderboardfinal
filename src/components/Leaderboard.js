import React from 'react';

const Leaderboard = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || {};

    return (
        <div className="leaderboard">
            <h3>Leaderboard</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Days Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(tasks).map((userId) => (
                        <tr key={userId}>
                            <td>{tasks[userId].name}</td>
                            <td>{tasks[userId].daysCompleted}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Leaderboard;
