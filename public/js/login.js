let inputPassword = document.querySelectorAll(".formulario-login-password")
let btnPassword = document.querySelector("#view-password")

btnPassword.addEventListener("click",e => {
    e.preventDefault();
    console.log("hola")
    inputPassword[index].getAttribute("type") == "password" ?  inputPassword[index].setAttribute("type","text") : inputPassword[index].setAttribute("type","password") 
})
