const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");


for (const ingredient of ingredients) {
  const item = document.createElement('li');
  item.textContent = ingredient;
  item.classList.add('item');
  ingredientsList.append(item)
}




/* const markup = ingredients
  .map((item) => `<li class="list-item">${item}</li>`)
  .join("");


console.log(markup);


ingredientsList.innerHTML = markup; */