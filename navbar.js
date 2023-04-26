const toggleBtn = document.querySelector(".menu");
const menu = document.querySelector(".nav_main_user");

toggleBtn.addEventListener('click', () =>{
    menu.classList.toggle("show");
});