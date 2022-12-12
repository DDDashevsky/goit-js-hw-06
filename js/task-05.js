const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', queryInput);

function queryInput(evt) {
  const query = evt.currentTarget.value;

  if (!query) {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = query;
  }
}
