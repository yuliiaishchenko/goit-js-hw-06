const increment = document.querySelector('[data-action="increment"]'),
decrement = document.querySelector('[data-action="decrement"]'),
counterValue = document.querySelector('#value');

var count = 0;

counterValue.innerHTML = count;

const handleIncrement = () => {
    count++;
    counterValue.innerHTML = count;
};

const handleDecrement = () => {
    count--;
    counterValue.innerHTML = count;
};

increment.addEventListener("click", handleIncrement);
decrement.addEventListener("click",handleDecrement);