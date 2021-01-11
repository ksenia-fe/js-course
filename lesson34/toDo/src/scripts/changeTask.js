import { renderTasks } from './render.js';
import { getItem, setItem } from './storage.js';
import { changeTasks, getTasksList } from './tasksGateway.js';

export const changgeTask = event => {
  const taskId = event.target.dataset.id;
  const tasksList = getItem('tasksList');
  const { text, createDate } = tasksList.find(tasks => tasks.id === taskId);
  const done = event.target.checked;

  const updatedTask = {
    text,
    createDate,
    done,
    finishDate: done ? new Date().toISOString() : null,
  };

  changeTasks(taskId, updatedTask)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};

// 1. prepare data
// 2. update data in db
// 3. read new data from server
// 4. save new data to front-end storage
// 5. update UI based on new data
