const form = document.querySelector('.login-form');
form.addEventListener('submit', submitOn);

function submitOn (event){
event.preventDefault()
const{
    elements: { email, password},
}= event.currentTarget

if (email.value === '' || password.value ===''){
    return alert ('Заповніть, будь ласка, всі поля!')
}
const newUser = {email: email.value, password: password.value}
console.log(newUser);
event.currentTarget.reset()
};
