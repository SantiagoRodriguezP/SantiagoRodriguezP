const form = document.querySelector("form");
const email = document.querySelector("form input[type=email]");

form.addEventListener('submit', ()=>{
    
    let emailValue = email.value;
    console.log(emailValue);
    if(validateEmail(email)){
        console.log("valido");
        form.classList.remove('error');
    }else{
        console.log("no valido");
        form.classList.add('error');
    }
});
function validateEmail(email) {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}