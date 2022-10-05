
//const myFunctions = require('../module/update');

import Task from '../module/update';
let task1 = new Task("Task1",1);
let task2= new Task("Task2",2);
let task3= new Task("Task3",3);
let task4= new Task("Task4",4);
describe('add  items', () => {
  test('Add first item', () => {
    expect(Task.addTask(task1)).toEqual({"completed": false ,"description" : "Task1" , "index": 1});
  });

  test('Add second items', () => {
    expect(Task.addTask(task2)).toEqual({"completed": false ,"description" : "Task2" , "index": 2});
  });

  test('Add third items', () => {
    expect(Task.addTask(task3)).toEqual({"completed": false ,"description" : "Task3" , "index": 3});
  });

  test('Add fourth items', () => {
    expect(Task.addTask(task4)).toEqual({"completed": false ,"description" : "Task4" , "index": 4});
  });

});

