import { renderTasks } from './render';
import { getItem, setItem, tasks } from './storage';

export const createTask = () => {
  const input = document.querySelector('.task-input');
  if (input.value === '') {
    return;
  }
  input.value = '';

  const tasksList = getItem('tasksList');

  const newTasksList = tasksList.concat({
    text,
    done: false,
    id: Math.random().toString(),
  });

  setItem('tasksList', newTasksList);
  renderTasks(tasks);
};
