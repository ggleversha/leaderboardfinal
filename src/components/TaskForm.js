import React, { useState } from 'react';

const TaskForm = ({ userId, storeTask }) => {
    const [task, setTask] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        storeTask(userId, task);
        setTask('');

        const response = await fetch('/api/submit-task', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId, task }),
        });

        if (response.ok) {
            alert('Task submitted successfully!');
        }
    };

    return (
        <form id="taskForm" onSubmit={handleSubmit}>
            <input
                type="text"
                id="taskInput"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter your task"
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default TaskForm;
