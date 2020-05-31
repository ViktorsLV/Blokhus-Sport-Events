// Selecting items from HTML
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
/* const menuLogo = document.querySelector('.menu-logo'); */ // all of the above need adding classes
const navItems = document.querySelectorAll('.nav-item'); // needs looping through 

// Setting state of menu 

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    menuBtn.classList.toggle('close');
    menu.classList.toggle('show');
    menuNav.classList.toggle('show');
    /* menuLogo.classList.toggle('show'); */
    navItems.forEach(item => item.classList.toggle('show'));
    showMenu = !showMenu;
}