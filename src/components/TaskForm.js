import React, { useState } from 'react';

const TaskForm = ({ userId, storeTask }) => {
    const [name, setName] = useState('');
    const [daysCompleted, setDaysCompleted] = useState('');
    const [q1, setQ1] = useState('');
    const [q2, setQ2] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (q1 && q2) {
            const task = { name, daysCompleted, q1, q2 };
            storeTask(userId, task);
        }
    };

    return (
        <div className="task-form">
            <form onSubmit={handleSubmit}>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Days Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={daysCompleted}
                                    onChange={(e) => setDaysCompleted(e.target.value)}
                                    required
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h3>Daily Disciplines</h3>
                <p>You MUST complete ALL questions in order to complete the day.</p>
                <div className="questions">
                    <div className="question">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="question">
                        <label htmlFor="q1">Q1*</label>
                        <select
                            id="q1"
                            value={q1}
                            onChange={(e) => setQ1(e.target.value)}
                            required
                        >
                            <option value=""></option>
                            <option value="Answer 1">Answer 1</option>
                            <option value="Answer 2">Answer 2</option>
                            <option value="Answer 3">Answer 3</option>
                        </select>
                    </div>
                    <div className="question">
                        <label htmlFor="q2">Q2*</label>
                        <select
                            id="q2"
                            value={q2}
                            onChange={(e) => setQ2(e.target.value)}
                            required
                        >
                            <option value=""></option>
                            <option value="Answer 1">Answer 1</option>
                            <option value="Answer 2">Answer 2</option>
                            <option value="Answer 3">Answer 3</option>
                        </select>
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default TaskForm;
