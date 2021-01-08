import { renderTasks } from './render';
import { getItem, setItem } from './storage';

export const toggleTask = event => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');

  if (!isCheckbox) {
    return;
  }
  const taskList = getItem('tasksList');
  const newTasksList = taskList.map(task => {
    if (task.id === event.target.dataset.id) {
      const done = event.target.checked;
      return {
        ...task,
        done,
      };
    }
    return task;
  });
  setItem('tasksList', newTasksList);

  renderTasks();
};
