const btnsEdit = Array.from(document.querySelectorAll(".btn-labels"))
const btnsPasswords = Array.from(document.querySelectorAll(".btn-password"))
const inputsProfile = Array.from(document.querySelectorAll(".form-input"))
btnsEdit.forEach(btn => btn.addEventListener("click",(e) => {
    e.preventDefault();
    const target = e.target;
    const label = target.classList.contains("fas") ? target.parentNode.parentNode: target.parentNode;
    const btn = label.querySelector("button");
    const icon = btn.querySelector("i")
    const input = label.querySelector("input");
    const disabled = input.getAttribute("disabled");
    const type = input.getAttribute("type")

    if(btn.classList.contains("btn-labels")){
        
        if(disabled != undefined){
            input.removeAttribute("disabled");
            input.focus();
        }else{
            input.setAttribute("disabled",null);
            input.blur();
        }
    
        if(type == "password" && disabled != undefined){
            btn.className = "btn-password";
            icon.className = "fas fa-eye";
        }else if(type == "password" && disabled == undefined){
            btn.className = "btn-labels";
            icon.className = "fas fa-pencil-alt"
        }
    }
    if(btn.classList.contains("btn-password")){
        if(type == "password") {
            input.setAttribute("type","text");
            icon.className = "fas fa-eye-slash";
        }else{
            input.setAttribute("type","password");
            icon.className = "fas fa-eye";
        }
    }

}))


inputsProfile.forEach(input => input.addEventListener("blur",e =>{
    e.preventDefault();
    const target = e.target;

    const label = target.parentNode;

    const btn = label.querySelector("button");

    const icon = btn.querySelector("i")
    
    const name = target.getAttribute("name")
    
    btn.className="btn-labels";
    
    icon.className="fas fa-pencil-alt";
    
    target.setAttribute("disabled",null);
    
    name == "password" ? target.setAttribute("type","password") : null;
}))


document.forms["usuario-actualizar"].addEventListener('submit',e =>{
    e.preventDefault();
    Array.from(document.forms["usuario-actualizar"].elements).filter(input => input.getAttribute("disabled") != undefined).forEach(input => input.removeAttribute("disabled"));
    document.forms["usuario-actualizar"].submit()
})