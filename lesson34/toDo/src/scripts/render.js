import { getItem } from './storage.js';

const list = document.querySelector('.list');

const createCheckbox = el => {
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('data-id', el.id);
  checkbox.checked = el.done;
  checkbox.classList.add('list__item-checkbox');

  return checkbox;
};

export const renderTasks = () => {
  const tasksList = getItem('tasksList') || [];

  list.innerHTML = '';
  const tasksElems = tasksList
    .sort((a, b) => {
      if (a.done - b.done !== 0) return a.done - b.done;
      if (a.done) return new Date(b.finishDate) - new Date(a.finishDate);
      return new Date(b.createDate) - new Date(a.createDate);
    })
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkboxElem = createCheckbox({ done, id });
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      const textEl = document.createElement('span');
      textEl.classList.add('list__item_text');
      textEl.textContent = text;
      const deleteBtnEl = document.createElement('button');
      deleteBtnEl.classList.add('list__item_delete-btn');
      listItemElem.append(checkboxElem, textEl, deleteBtnEl);
      return listItemElem;
    });

  list.append(...tasksElems);
};
