import Task from '../module/update';
export let task = new Task("Task1",1);

module.exports.addTask = (task) => {
  return ` completed: ${task.completed} ,description :${task.description},index: ${task.index}`;
}