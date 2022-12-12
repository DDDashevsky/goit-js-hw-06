const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

input.addEventListener('input', rangeInput);

function rangeInput(evt) {
  console.log(evt.currentTarget.value);
  text.style.fontSize = `${evt.currentTarget.value}px`;
}
