
//menuHamburguer
const hambuguer = document.getElementById("hambuguer")
const MenuHamburer = document.getElementById("HamBar")

hambuguer.addEventListener("click",(e)=>{

    MenuHamburer.classList.toggle("visible")

    if(MenuHamburer.classList.contains("visible")){
        hambuguer.innerHTML = `<i class="fa-solid fa-xmark"></i>`
    }
    else{
        hambuguer.innerHTML = `<i class="fa-solid fa-bars"></i>`
    }
    
    
})
MenuHamburer.addEventListener("click",()=>{
    hambuguer.innerHTML = `<i class="fa-solid fa-bars"></i>`
    MenuHamburer.classList.remove("visible")
})


//enviando email

document.getElementById("form1").addEventListener('click',(e)=>{
    e.preventDefault()
    
})

let SubmitForm = document.getElementById("submit")


function validarEmail(email) {
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

function Toast(texto, color) {
    return Toastify({

                text: texto,
                className: "info",
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "bottom",
                position: "right",
                stopOnFocus: true,
                style: {
                    background: `${color}`
                },
            
            }).showToast();
}

function ValidateNumber(tel) {

    if(String(tel).length  === 9 || String(tel).length  === 11 || String(tel).length  === 16 ||  String(tel).length  === 14){
        return true
    } 
    return false
    
}

SubmitForm.addEventListener("click",(e)=>{

    const email = document.getElementById("email")
    const name = document.getElementById("name")
    const tel = document.getElementById("tel")
    const subject = document.getElementById("subject")
    const message = document.getElementById("msg")

    if(!email.value || !name.value || !tel.value || !subject.value || !message.value){
        Toast("Preencha Todos os Campos", "#007bff")
    }else if(!validarEmail(email.value)){

        Toast("Email Inválido", "#e63553")
    }else if(!ValidateNumber(tel.value)){
        Toast("Número Inválido", "#e63553")
    }
    else{

        //API-Email
    }
})