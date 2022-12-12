function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const button = document.querySelector('.change-color');
const hexOutput = document.querySelector('.color');

button.addEventListener('click', changeColor);

function changeColor(evt) {
  hexOutput.textContent = String(getRandomHexColor());
  document.querySelector('body').style.backgroundColor = hexOutput.textContent;
}
