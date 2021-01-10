const baseUrl = 'https://5ffacff987478d0017d9a8a0.mockapi.io/tasks/grom/tasks';

const mapTasks = tasks => {
    tasks.map(({ id, ...rest}) => ({ ...rest, id: task._id }));
}

export const getTasksList = () => {
    return fetch(baseUrl)
        .then(response => response.json())
        .then(tasks => mapTasks(tasks));
}

export const createTasks = tasksData => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(tasksData),
    });
}

export const changeTasks = (taskId, updatedTasksData) => {
    return fetch(`baseUrl/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(updatedTasksData),
    });
}

export const deleteTasks = taskId => {
    return fetch(`baseUrl/${taskId}`, {
        method: 'DELETE',
    });
}