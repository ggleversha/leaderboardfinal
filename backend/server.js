const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const database = require('./database');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'build')));

// Endpoint to handle form submissions
app.post('/api/submit-task', (req, res) => {
    const { userId, task } = req.body;
    database.storeTask(userId, task);
    res.send({ message: 'Task submitted successfully!' });
});

// Endpoint to get leaderboard data
app.get('/api/leaderboard', (req, res) => {
    const tasks = database.getTasks();
    res.send(tasks);
});

// Serve React application
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
