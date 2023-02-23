const refs = {
    input: document.getElementById("name-input"),
    span: document.getElementById("name-output"),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event){
    console.log(event.currentTarget.value);
    refs.span.textContent = event.currentTarget.value.trim();

    if (refs.span.textContent.length === 0) {
        refs.span.textContent = 'Anonymous';
    }
}