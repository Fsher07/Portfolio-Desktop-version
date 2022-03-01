// Popup mobile navbar menu
const menu = document.querySelector('.desktop-nav');
const navbarItems = document.querySelectorAll('.navbarItem'); // Get all the navbar items
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

// Popup desktop project window
const projectWindow = document.querySelector('.popup-window');
const projectOpenButton = document.querySelectorAll('.popup-window-button');
const projectCloseButton = document.querySelector('.project-closeIcon');

function openProjectWindow () {
 if (projectWindow.classList.contains('active')) {
    projectWindow.classList.remove('active');
 }else {
    projectWindow.classList.add('active');
 }
}

projectOpenButton.forEach(
  function(projectOpenButton) {
    projectOpenButton.addEventListener("click", openProjectWindow);
  }
)
