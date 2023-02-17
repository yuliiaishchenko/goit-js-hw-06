const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const navFirstItemEl = document.createElement('li');
navFirstItemEl.classList.add('item');
navFirstItemEl.textContent = 'Potatoes';

const navSecondItemEl = document.createElement('li');
navSecondItemEl.classList.add('item');
navSecondItemEl.textContent = 'Mushrooms';

const navThirdItemEl = document.createElement('li');
navThirdItemEl.classList.add('item');
navThirdItemEl.textContent = 'Garlic';

const navFourthItemEl = document.createElement('li');
navFourthItemEl.classList.add('item');
navFourthItemEl.textContent = 'Tomatos';

const navFifthItemEl = document.createElement('li');
navFifthItemEl.classList.add('item');
navFifthItemEl.textContent = 'Herbs';

const navSixthItemEl = document.createElement('li');
navSixthItemEl.classList.add('item');
navSixthItemEl.textContent = 'Condiments';

const navEl = document.getElementById('ingredients');
navEl.append(navFirstItemEl, navSecondItemEl, navThirdItemEl, navFourthItemEl, navFifthItemEl, navSixthItemEl);

  console.log(navEl)

// console.log(navFirstItemEl)
// console.log(navSecondItemEl)
// console.log(navThirdItemEl)
// console.log(navFourthItemEl)
// console.log(navFifthItemEl)
// console.log(navSixthItemEl)
