const onInput = document.getElementById("validation-input")
onInput.addEventListener("blur", onInputBlur)
function onInputBlur(value){
    
        onInput.classList.toggle("valid",onInput.value.length === 6)
    ;

    onInput.classList.toggle("invalid", onInput.value.length > 6);
}