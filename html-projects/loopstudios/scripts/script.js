
let menu = () => {
    let menu = document.querySelector("#menu");
    let hamburger = document.querySelector("#hamburger");
    let navbar = document.querySelector("#test");
    
    menu.addEventListener('click', () => {
    
        hamburger.src = '/images/icon-close.svg';

       
        navbar.classList.add("navbar-open");
    
    })
}

menu();

