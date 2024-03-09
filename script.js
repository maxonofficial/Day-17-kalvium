const toggleButton = document.querySelector(".app");
const navBarLinks = document.querySelector('.nav-bar');

toggleButton.addEventListener('click', ()=>{
    navBarLinks.classList.toggle('active')
})