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
const projectWindows = [
  {
    title: 'Keeping track of hundreds  of components website',
    technologies: 'HTML CSS JavaScript',
    image: 'images/portfolioPng.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    liveLink: '#',
    sourceLink: '#',
  }]

const openButton = document.querySelectorAll('.project-open-button');
  
  function popupProjectWindow() {

    // creating overlay
    const overlay = document.createElement('div');
    overlay.id = 'overlay';
    document.body.appendChild(overlay);

    //creating container of window
    let ProjectWindow = document.createElement('div');
    ProjectWindow.className= 'popup-window';
    document.body.appendChild(ProjectWindow);
    
    //creating header
    let ProjectWindowHeader = document.createElement('div');
    ProjectWindowHeader.className='popup-window-header';
    ProjectWindowHeader.innerHTML = '<h2 class="popup-title blue">'+projectWindows[0].title+'</h2>';
    document.querySelector('.popup-window').appendChild(ProjectWindowHeader);

    let Xmark = document.createElement('nav');
    Xmark.className = 'popup-window-closeMark';
    Xmark.innerHTML = '<i class="fa-solid blue fa-xmark project-closeIcon"></i>';
    document.querySelector('.popup-window-header').appendChild(Xmark);

    // creating technology list
    let technologiesList = document.createElement('ul');
    technologiesList.className='works-ul flexUl';
    technologiesList.id = 'technologies-List';
    document.querySelector('.popup-window').appendChild(technologiesList);

    // adding li tags
    const techMenu = document.querySelector('#technologies-List');
    let li = document.createElement('li');
    li.innerHTML ='<a class="popup-tabs works-tabs MRWTabs blue" href="#">'+projectWindows[0].technologies.split(' ')[0]+'</a>';
    techMenu.appendChild(li);

    li = document.createElement('li');
    li.innerHTML = '<a class="popup-tabs works-tabs MRWTabs blue" href="#">'+projectWindows[0].technologies.split(' ')[1]+'</a>';
    techMenu.appendChild(li);

    li = document.createElement('li');
    li.innerHTML = '<a class="popup-tabs works-tabs MRWTabs blue" href="#">'+projectWindows[0].technologies.split(' ')[2]+'</a>';
    techMenu.appendChild(li);

    // creating content part
    let content = document.createElement('div');
    content.className = 'popup-window-content';
    content.innerHTML = '<img class="popup-image" src="'+projectWindows[0].image+'" alt="project-image">';
    document.querySelector('.popup-window').appendChild(content);

    // creating description part
    let description = document.createElement('div');
    description.className = 'popup-window-text';
    description.innerHTML = '<p class="blue">'+projectWindows[0].description+'</p>';
    document.querySelector('.popup-window-content').appendChild(description);

    // creating description button part
    let button = document.createElement('div');
    button.className = 'popup-window-buttons';
    button.innerHTML = '<button class="btn popup-button">See Project <img src="images/githubPng.png" alt="button-github-symbol"></i></button>';
    document.querySelector('.popup-window-text').appendChild(button);

    let button1 = document.createElement('button');
    button1.className = 'btn popup-button';
    button1.innerHTML = 'See Live <img src="images/projectbuttonImage.png" alt="button-image">';
    document.querySelector('.popup-window-buttons').appendChild(button1);

    function closeProjectWindow() {
      if(document.querySelector('.popup-window')) {
        document.querySelector('.popup-window').remove();
        document.querySelector('#overlay').remove();
      }
    }
    
    const closeButton = document.querySelector('.project-closeIcon');
    closeButton.addEventListener('click', closeProjectWindow);
  }

  openButton.forEach(button => {
    button.addEventListener('click', popupProjectWindow)});

// Client side validation
const form = document.getElementById('contact-form');
const email = document.getElementById('email');
const regex = /[^A-Za-z0-9]/g; // to remove all non-alphanumeric characters
const submit = document.getElementById('submit-btn');
const errorDiv = document.getElementById('error');

  submit.addEventListener ("click", function (event) {
    var emailAddress = email.value.replace(regex, '');
    if (emailAddress === emailAddress.toLowerCase()) {
      email.setCustomValidity("");
    } else {
      event.preventDefault();
    }
  });

