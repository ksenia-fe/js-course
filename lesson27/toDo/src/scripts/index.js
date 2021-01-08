import { renderTasks } from './render.js';
import { addTask } from './addTask.js';
import { changeTask } from './changeTask.js';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();

  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', addTask);

  const todoListElem = document.querySelector('.list');
  todoListElem.addEventListener('click', changeTask);
});

const onStorageChange = event => {
  if (event.key === tasks) {
    renderTasks();
  }
};

window.addEventListener('storage', onStorageChange);
