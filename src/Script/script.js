const hamburger = document.querySelector(".hamburger")
const closeBtn = document.querySelector(".mobile_menu--close")
const menu = document.querySelector(".mobile_menu")



hamburger.addEventListener("click" , () => {

        menu.classList.add("show")
        
})
closeBtn.addEventListener("click" , () => {

        menu.classList.remove("show")
        
})

