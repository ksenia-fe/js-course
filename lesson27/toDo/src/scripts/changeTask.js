import { renderTasks } from './render.js';
import { getItem, setItem } from './storage.js';

export const changeTask = event => {
  const tasksList = getItem('tasksList');

  const listWithAdded = tasksList.map(task => {
    if (task.id === event.target.dataset.id) {
      const done = event.target.checked;
      return {
        ...task,
        done,
        finishDate: done ? new Date().toISOString() : null,
      };
    }
    return task;
  });
  setItem('tasksList', listWithAdded);

  renderTasks();
};
