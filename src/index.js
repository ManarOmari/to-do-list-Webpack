import './style.css';

const mainContainer = document.querySelector('.container');
const todoTasks = [{
  description: 'wash the dishes',
  completed: true,
  index: 1,
},
{
  description: 'complete to do list project',
  completed: true,
  index: 2,
},
];

document.addEventListener('DOMContentLoaded', () => {
  todoTasks.forEach((n) => {
    const output = document.createElement('div');
    output.classList.add('listitem');
    output.setAttribute('id', `${n.index}`);
    output.innerHTML = `<div><input type="checkbox"> ${n.description}</div> <span class="listitemIcon"><i class="fa-solid fa-ellipsis-vertical"></i></span>`;
    mainContainer.appendChild(output);
  });
});