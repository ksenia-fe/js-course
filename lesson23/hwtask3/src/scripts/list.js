import { createTask } from './createTask';
import { toggleTask } from './updateTask';

export const initToDoHandlers = () => {
  const btnEl = document.querySelector('.create-task-btn');
  btnEl.addEventListener('click', createTask);

  const listEl = document.querySelector('.list');
  listEl.addEventListener('click', toggleTask);
};
