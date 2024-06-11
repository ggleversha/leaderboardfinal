import React, { useEffect, useState } from 'react';
import CountdownTimer from './components/CountdownTimer';
import TaskForm from './components/TaskForm';
import Leaderboard from './components/Leaderboard';
import './App.css';

const generateUserId = () => {
    return 'user_' + Math.floor(Math.random() * 1000000);
};

const App = () => {
    const [userId, setUserId] = useState(localStorage.getItem('userId') || generateUserId());
    const [stopTimerForUser, setStopTimerForUser] = useState(false);

    useEffect(() => {
        localStorage.setItem('userId', userId);
        checkTaskCompletion(userId);
    }, [userId]);

    const storeTask = (userId, task) => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || {};
        tasks[userId] = task;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        setStopTimerForUser(true);
    };

    const checkTaskCompletion = (userId) => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || {};
        if (tasks[userId]) {
            setStopTimerForUser(true);
        }
    };

    return (
        <div className="app-container">
            <header className="app-header">
                <h1 className="app-title">Papps Self Master - Daily</h1>
                <h2 className="app-subtitle">ANSWER DAILY QUESTIONS HERE</h2>
            </header>
            <CountdownTimer stopTimerForUser={stopTimerForUser} />
            <TaskForm userId={userId} storeTask={storeTask} />
            <Leaderboard />
        </div>
    );
};

export default App;
