import { renderTasks } from './render.js';
import { getItem, setItem } from './storage.js';
import { changeTask, getTasksList } from './tasksGateway';

export const changeTask = event => {
  const tasksList = getItem('tasksList');
  const { text, createDate} = tasksList
    .then(tasks => tasks.id === taskId);
  const done = event.target.checked;
  
  const taskId = event.target.dataset.id;
  const updatedTask = {
    text,
    createDate,
    done,
    finishDate: done ? new Date().toISOString() : null,
  };

  changeTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};


//1. prepare data
//2. update data in db
//3. read new data from server
//4. save new data to front-end storage
//5. update UI based on new data