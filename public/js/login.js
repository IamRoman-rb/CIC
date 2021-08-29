let inputPassword = Array.from(document.querySelectorAll(".formulario-login-password"))
let btnPassword = Array.from(document.querySelectorAll("#view-password"))

btnPassword.forEach((btn,index) => btn.addEventListener("click",e => {
    e.preventDefault();
    inputPassword[index].getAttribute("type") == "password" ?  inputPassword[index].setAttribute("type","text") : inputPassword[index].setAttribute("type","password") 
}))
