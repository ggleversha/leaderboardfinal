let tasks = {};

const storeTask = (userId, task) => {
    tasks[userId] = task;
};

const getTasks = () => {
    return tasks;
};

module.exports = {
    storeTask,
    getTasks,
};
