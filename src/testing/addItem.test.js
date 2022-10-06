import Task from '../module/update.js';
import clear from '../module/filter.js';

jest.mock('../module/filter.js', () => jest.fn());
require('../module/filter');
const clearItem = require('../module/filter');

const task1 = new Task('Task1', 1);
const task2 = new Task('Task2', 2);
const task3 = new Task('Task3', 3);
const task4 = new Task('Task4', 4);
describe('add  items', () => {
  test('Add first item', () => {
    expect(Task.addTask(task1)).toEqual({
      completed: false,
      description: 'Task1',
      index: 1,
    });
  });
  test('Add second items', () => {
    expect(Task.addTask(task2)).toEqual({
      completed: false,
      description: 'Task2',
      index: 2,
    });
  });
  test('Add third items', () => {
    expect(Task.addTask(task3)).toEqual({
      completed: false,
      description: 'Task3',
      index: 3,
    });
  });
  test('Add fourth items', () => {
    expect(Task.addTask(task4)).toEqual({
      completed: false,
      description: 'Task4',
      index: 4,
    });
  });
});

test('removing an item after click Clear ', () => {
  clearItem.clear = jest.fn(() => {
    {
      document.body.innerHTML = `<div id='listContainer'><div id='1'></div><div id='2'></div></div>`;
      clear(`<div id='1'></div>`, {
        description: 'Task1',
        completed: true,
        index: 1,
      });
    }
    expect(task1).toEqual(task2);
  });
});
