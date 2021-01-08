const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const setItem = (key, value) => {
  console.log(tasksList);
  localStorage.setItem(key, JSON.stringify(value));
};

const getItem = key => JSON.parse(localStorage.getItem(key));

const renderTasks = tasksList => {
  const listElement = document.querySelector('.list');
  listElement.innerHTML = '';
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });
  list.append(...tasksElems);
};

const changeBtn = document.querySelector('.create-task-btn');
const list = document.querySelector('.list');

const addTask = () => {
  // const input = document.querySelector('.task-input');
  // if (input.value === '') {
  //   return;
  // }
  // tasks.push({
  //   text: input.value,
  //   done: false,
  // });
  // input.value = '';
  // renderTasks(tasks);
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

const changeTask = event => {
  // if (event.target.checked) {
  //   event.target.closest('li').classList.add('list__item_done');
  // } else {
  //   event.target.closest('li').classList.remove('list__item_done');
  // }
  // if (event.target.tagName != 'input') {
  //   return;
  // }
  // renderTasks(tasks);
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

renderTasks(tasks);
changeBtn.addEventListener('click', addTask);
list.addEventListener('click', changeTask);

const storageChange = event => {
  if (event.key === 'tasksList') {
    renderTasks();
  }
};

window.addEventListener('storage', storageChange);
