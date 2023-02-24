const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const navEl = document.getElementById('ingredients');
const newArray = [];

ingredients.forEach(ingredient => {
  const ingredientsItem = document.createElement('li');
  ingredientsItem.className = 'item';
  ingredientsItem.textContent = ingredient;
  newArray.push(ingredientsItem)
});
navEl.append(...newArray);


  console.log(navEl)


