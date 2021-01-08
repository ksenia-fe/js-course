const createCheckbox = ({ done, id }) => {
  const checkboxEl = document.createElement('input');
  checkboxEl.setAttribute('type', 'checkbox');
  checkboxEl.setAttribute('data-id', id);
  checkboxEl.checked = done;
  checkboxEl.classList.add('list-item__checkbox');

  return checkboxEl;
};

const createListItem = ({ text, done, id }) => {
  const listItemEl = document.createElement('li');
  listItemEl.classList.add('list__item');
  const checkboxEl = createCheckbox({ done, id });
  if (done) {
    listItemEl.classList.add('list__item_done');
  }
  listItemEl.append(checkboxEl, text);

  return listItemEl;
};

export const renderTasks = tasksList => {
  const tasksList = getItem('tasksList');
  listEl.innerHTML = '';
  const tasksElems = tasksList.sort((a, b) => a.done - b.done).map(createListItem);
  list.append(...tasksElems);
};
