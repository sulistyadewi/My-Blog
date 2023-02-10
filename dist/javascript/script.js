const menu = document.querySelector("#menu")
const navbar_menu = document.querySelector("#navbar-mobile")

menu.addEventListener('click',()=>{
    navbar_menu.classList.toggle('hidden')
})