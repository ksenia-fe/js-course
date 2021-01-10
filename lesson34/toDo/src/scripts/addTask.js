import { renderTasks } from './render.js';
import { getItem, setItem } from './storage';
import { createTasks, getTasksList} from './tasksGateway';

export const addTask = () => {
  const taskTitleInputElem = document.querySelector('.task-input');

  const text = taskTitleInputElem.value;

  if (!text) {
    return;
  }
  taskTitleInputElem.value = '';

  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
    id: Math.random().toString(),
  };

  createTasks(newTask)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};


//1. prepare data
//2. add data to db
//3. read new data from server
//4. save new data to front-end storage
//5. update UI based on new data