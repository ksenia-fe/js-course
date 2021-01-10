import { renderTasks } from './render.js';
import { addTask } from './addTask.js';
import { getTasksList } from './tasksGateway';
import { changeTask } from './changeTask.js';
import { setItem } from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
  getTasksList()
    .then(tasksList => {
      setItem('tasksList', tasksList);
      renderTasks();
    })

  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', addTask);

  const todoListElem = document.querySelector('.list');
  todoListElem.addEventListener('click', changeTask);
});

const onStorageChange = event => {
  if (event.key === 'tasksList') {
    renderTasks();
  }
};

window.addEventListener('storage', onStorageChange);


// 1. get data from server
// 2. save data to front-end storage