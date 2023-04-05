import './style.css';

const todo = [
  {
    index: 0,
    description: 'samuel',
    completed: false,
  },
  {
    index: 1,
    description: 'lemma',
    completed: false,
  },
  {
    index: 2,
    description: 'fita',
    completed: false,
  },

];

const el = document.createElement('div');
const lists = document.querySelector('.lists');

const len = todo.length;

for (let i = 0; i < len; i += 1) {
  el.innerHTML += `<div class="items">
    <div class="for1">
        <input class="box" type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
        <label for="vehicle1">${todo[i].description}</label>
    </div>
    <div class="dots">
        <svg class="box" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
          </svg>
    </div>
  </div>
  <hr>`;
  lists.appendChild(el);
}
