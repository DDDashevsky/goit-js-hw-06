const list = document.querySelector('#categories');

const categories = list.children;
console.log('Number of categories:', categories.length);

for (const category of categories) {
  console.log(category.querySelector('h2').textContent);
  console.log(category.querySelector('ul').children.length);
}

/* const firstItem = list.firstElementChild;
const secondItem = firstItem.nextElementSibling;
const thirdItem = list.lastElementChild;



console.log("Category:",firstItem.querySelector('h2').textContent);
const firstItemList = firstItem.querySelector('ul')
console.log("Elements:", firstItemList.children.length);



console.log("Category:",secondItem.querySelector('h2').textContent);
const secondItemList = secondItem.querySelector('ul');
console.log("Elements:", secondItemList.children.length);



console.log("Category:",thirdItem.querySelector('h2').textContent);
const thirdItemList = thirdItem.querySelector('ul');
console.log("Elements:", thirdItemList.children.length); */
