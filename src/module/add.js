const desc = document.querySelector('.inp');
const el = document.createElement('div');
const lists = document.querySelector('.lists');

const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

class Task {
  constructor(desc, complete) {
    this.description = desc.value;
    this.complete = false;
  }
}

function created(tasks) {
  el.innerHTML += `<div class="items">
      <div class="for1">
          <input class="box" type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
          <label for="vehicle1">${tasks.description}</label>
      </div>
      <div class="dots">
          <svg id=() class="box" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
            </svg>
      </div>
    </div>
    <hr>`;
  lists.appendChild(el);
}

if (localStorage.getItem('tasks')) {
  tasks.map((task) => {
    created(task);
    return task;
  });
}

function added() {
  let complete;
  const obj = new Task(desc, complete);
  tasks.push(obj);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  created(obj);
  desc.value = '';
  desc.focus();
}

export { tasks, desc, added };