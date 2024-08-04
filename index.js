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