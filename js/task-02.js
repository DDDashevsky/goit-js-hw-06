const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");



const markup = ingredients
  .map((item) => `<li class="item">${item}</li>`)
  .join('');

ingredientsList.insertAdjacentHTML("afterbegin", markup);




/* for (const ingredient of ingredients) {
  const item = document.createElement('li');
  item.textContent = ingredient;
  item.classList.add('item');
  ingredientsList.append(item)
}
 */

