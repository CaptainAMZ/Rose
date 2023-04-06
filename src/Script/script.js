const hamburger = document.querySelector(".hamburger")
const closeBtn = document.querySelector(".mobile_menu--close")
const menu = document.querySelector(".mobile_menu")



hamburger.addEventListener("click" , () => {

        menu.style.display = "flex"
        
})
closeBtn.addEventListener("click" , () => {

        menu.style.display = "none"
        
})

