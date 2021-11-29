const form = document.querySelector("form");
//let input = document.querySelectorAll("input");
let firstName = document.getElementsByClassName("name");
let lastName = document.getElementsByClassName("last-name");
let mail = document.getElementsByClassName("mail");
let pass = document.getElementsByClassName("pass");
// const email = document.getElementsByClassName("form input[type=text]");
form.addEventListener('submit', ()=>{
    if(firstName[0].value){
        firstName[0].classList.remove("error-input","error")
    }  else{
        firstName[0].classList.add("error-input", "error");
    } 
    if(lastName[0].value){
        lastName[0].classList.remove("error-input");
    }else{
        lastName[0].classList.add("error-input");
    }   
    if(mail[0].value){
        mail[0].classList.remove("error-input");
    }else{
        mail[0].classList.add("error-input");
    }
    if(pass[0].value){
        pass[0].classList.remove("error-input");
    }else{
        pass[0].classList.add("error-input");
    }   
});

// const input = document.querySelectorAll("input");
// input.forEach((elem)=>{
//     elem.addEventListener("click", (e)=>{
//         alert("hola");
//         //elem.style.display='none';
        
//     })
// })
const clean = (elem) => {
    document.getElementsByClassName("error-txt")[elem].style.display='none';
    console.log("joal");
}
firstName[0].addEventListener("onkeypress", (e)=>{
    document.getElementsByClassName("error-txt")[0].style.display='none';
});
lastName[0].addEventListener("onkeyup", (e)=>{
    document.getElementsByClassName("error-txt")[1].style.display='none';
});
firstName[0].addEventListener("onkeyup", (e)=>{
    document.getElementsByClassName("error-txt")[0].style.display='none';
});



// document.getElementsByClassName("name")[0].addEventListener("click", function(){
//     alert("hola");
//   });