let counterValue = 0;

const value = document.querySelector('#value');

const incrementBtn = document.querySelector('[data-action="increment"]');

const decrementBtn = document.querySelector('[data-action="decrement"]');

const increment = () => {
  counterValue += 1;
  value.textContent = counterValue;
  console.log(counterValue);
};
const decrement = () => {
  counterValue -= 1;
  value.textContent = counterValue;
  console.log(counterValue);
};

incrementBtn.addEventListener('click', increment);

decrementBtn.addEventListener('click', decrement);
