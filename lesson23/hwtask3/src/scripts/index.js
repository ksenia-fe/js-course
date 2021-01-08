import { initToDoListHandlers } from './list';
import { renderTasks } from './render';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  initToDoListHandlers();
});

const storageChange = event => {
  if (event.key === 'tasksList') {
    renderTasks();
  }
};

window.addEventListener('storage', storageChange);

// const tasks = [
//   { text: 'Buy milk', done: false },
//   { text: 'Pick up Tom from airport', done: false },
//   { text: 'Visit party', done: false },
//   { text: 'Visit doctor', done: true },
//   { text: 'Buy meat', done: true },
// ];

// const changeBtn = document.querySelector('.create-task-btn');
// const list = document.querySelector('.list');

// const changeTask = event => {
//   if (event.target.checked) {
//     event.target.closest('li').classList.add('list__item_done');
//   } else {
//     event.target.closest('li').classList.remove('list__item_done');
//   }
//   if (event.target.tagName != 'input') {
//     return;
//   }
//   renderTasks(tasks);
// };

// renderTasks(tasks);
// changeBtn.addEventListener('click', addTask);
// list.addEventListener('click', changeTask);
// const changeTask = event => {
//   if (!event.target.tagName != 'input') {
//     return;
//   }
//   const checkbox = document.querySelector(`input[data-id="${event.target.dataset.id}"]`);
//   if (event.target.checked) {
//     tasks.forEach(el => {
//       if (el.text === checkbox.parentElement.textContent) {
//         el.done = true;
//       }
//     });
//   }
//   tasks.forEach(el => {
//     if (el.text === checkbox.parentElement.textContent) {
//       el.done = false;
//     }
//   });

//   renderTasks();
// };
