const form = document.querySelector("form");
const email = document.querySelector("form input[type=email]");

form.addEventListener('submit', ()=>{
    //let emailValue = email.value;
    let rta = validateEmail(email);
    if(rta==true){
        form.classList.remove('error');
    }else{
        form.classList.add('error');
    }
});
function validateEmail(email) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.value.match(validRegex)) {
        return true;
    }else{
        return false;
    }
}
