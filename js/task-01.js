const liItem = document.querySelectorAll('li.item');


const numberOfAllCategories = liItem.length;
console.log(`Number of categories: ${numberOfAllCategories}`);

const categoryIt = liItem.forEach (el =>{
    const categoryName = el.firstElementChild.textContent;
    const numberOfElement = el.lastElementChild.children.length;

    console.log(`Category: ${categoryName}
    Elements: ${numberOfElement}`)
})