function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

createBtn.addEventListener('click', create);

function create(evt) {
  let x = 20;
  let y = 20;
  for (let i = 1; i <= input.value; i += 1) {
    let markup = `<div style="height:${(y += 10)}px; width:${(x += 10)}px ; background-color:${getRandomHexColor()} ;"></div>`;
    boxes.insertAdjacentHTML('afterbegin', markup);
  }
}

destroyBtn.addEventListener('click', destroy);

function destroy(evt) {
  boxes.innerHTML = '';
  input.value = '';
}
