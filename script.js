const menu = document.querySelector('nav-menu');
const navbarItems = document.querySelectorAll('.navbar-item');
const hamburgerMenu = document.querySelector('#hamburgerMenu');
const menuIcon = document.querySelector('#menuIcon');
const closeIcon = document.querySelector('#closeIcon');

function toggleMenu() {
  if (menu.classList.contains('.openMenu')) {
    menu.classList.remove('openMenu');
    menuIcon.classList.display('block');
  } else {
    menu.classList.add('openMenu');
  }
}

hamburgerMenu.addEventListener("click", toggleMenu);