const form = document.querySelector("form");
//let input = document.querySelectorAll("input");
let firstName = document.getElementsByClassName("name");
let lastName = document.getElementsByClassName("last-name");
let mail = document.getElementsByClassName("mail");
let pass = document.getElementsByClassName("pass");
// const email = document.getElementsByClassName("form input[type=text]");
form.addEventListener('submit', ()=>{
    (firstName[0].value ? firstName[0].classList.remove("error-input","error") : firstName[0].classList.add("error-input", "error"));
    (lastName[0].value ? lastName[0].classList.remove("error-input") : lastName[0].classList.add("error-input"));
    (mail[0].value ? mail[0].classList.remove("error-input") : mail[0].classList.add("error-input"));
    (pass[0].value ? pass[0].classList.remove("error-input") : pass[0].classList.add("error-input"));
});