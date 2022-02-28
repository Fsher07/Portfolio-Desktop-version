const menu = document.querySelector('.desktop-nav');
const navbarItems = document.querySelectorAll('.navbarItem');
const hamburgerMenu = document.querySelector('#hamburgerMenu');
const menuIcon = document.querySelector('#menuIcon');
const closeIcon = document.querySelector("#closeIcon");

function toggleMenu() {
  if (menu.classList.contains('openMenu')) {
    menu.classList.remove('openMenu');
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add('openMenu');
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburgerMenu.addEventListener("click", toggleMenu);

navbarItems.forEach(
  function(navbarItems) {
    navbarItems.addEventListener("click", toggleMenu);
  }
)