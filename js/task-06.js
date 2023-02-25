// const inputEl = document.getElementById("validation-input");

// inputEl.addEventListener("blur", handleInputBlur);

// function handleInputBlur(value){
  
// inputEl.dataset.length === inputEl.value.length ? inputEl.classList.toggle("valid"):
// inputEl.classList.toggle("invalid");

// }

const onInput = document.getElementById("validation-input");
const inputValue = onInput.getAttribute('data-length');

onInput.addEventListener("blur", onInputBlur)
function onInputBlur(){
    onInput.classList.remove('valid','invalid')
  if( Number(inputValue) === onInput.value.length)
  { 
    onInput.classList.toggle("valid");
     }
   else{
 
  onInput.classList.toggle("invalid");}
}
