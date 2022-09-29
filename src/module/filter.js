/* eslint-disable import/prefer-default-export */
import Task from './update.js';

export const clear = (event) => {
  event.preventDefault();
  let tasks = Task.task();
  tasks = tasks.filter((t) => t.completed !== true);
  tasks.forEach((e, i) => {
    e.index = i + 1;
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
  Task.showTasks(tasks);
  window.location.reload();
};