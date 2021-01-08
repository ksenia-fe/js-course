const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';

export const getTasksList = () => {
  return fetch('https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks')
    .then(data => data.json())
    .then(data => console.log(data));
};

export const getTaskById = taskId => {
    return fetch(`https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks/${taskId}`)
    .then(data => data.json())
    .then(data => console.log(data));
};

// getTasksList();
// getTaskById(8);
