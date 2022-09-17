// Popup mobile navbar menu

// Popup mobile navbar menu

const menu = document.querySelector('.desktop-nav');
const navbarItems = document.querySelectorAll('.navbarItem'); // Get all the navbar items
const hamburgerMenu = document.querySelector('#hamburgerMenu');
const menuIcon = document.querySelector('#menuIcon');
const closeIcon = document.querySelector('#closeIcon');

function toggleMenu() {
  if (menu.classList.contains('openMenu')) {
    menu.classList.remove('openMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('openMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
}

hamburgerMenu.addEventListener('click', toggleMenu);

navbarItems.forEach((navbarItems) => {
  navbarItems.addEventListener('click', toggleMenu);
});

// Popup desktop project window
const projectWindows = [
  {
    title: 'Keeping track of hundreds  of components website',
    technologies: 'HTML CSS JavaScript',
    image: 'images/portfolioPng.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    liveLink: '#',
    sourceLink: '#',
    id: 1,
  },
  {
    title: 'Data Dashboard Healthcare',
    technologies: 'Bootstrap html Google',
    image: 'images/card2.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industrys standard',
    liveLink: '#',
    sourceLink: '#',
    id: 2,
  },
  {
    title: 'Space Travelers Hub',
    technologies: 'React Redux Router',
    image: 'images/snip.JPG',
    description: 'This website is for a company that provides commercial and scientific space travel services. The website allow users to book rockets and join selected space missions.',
    liveLink: 'https://delightful-granita-29f9c1.netlify.app',
    sourceLink: 'https://github.com/Fsher07/Space-Travelers-Hub',
    id: 'space',
  },
  {
    title: 'Restaurant Reviews',
    technologies: 'HTML CSS JavaScript',
    image: 'images/restaurantwebsite.png',
    description: 'This website is built based on an external API. It consists of various meals and their short informations. You can see meals on homepage. Besides, you can click on comments button to see brief intro and comments about the meal. Also on that popup window, you can add new comment by clicking comment button.',
    liveLink: '#',
    sourceLink: '#',
    id: 'restaurant',
  },
  {
    title: 'Data Dashboard Healthcare',
    technologies: 'Bootstrap html Google',
    image: 'images/card5.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industrys standard',
    liveLink: '#',
    sourceLink: '#',
    id: 4,
  },
  {
    title: 'Data Dashboard Healthcare',
    technologies: 'Bootstrap html Google',
    image: 'images/card3.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industrys standard',
    liveLink: '#',
    sourceLink: '#',
    id: 5,
  }];

// project card 1 is created seperately because it is different from the other 5 cards
function projectCard1() {
  return `<div class="card card1 ProjectPage">
  <h3 class="project-titles ProjectPage-h2 none-btn">${projectWindows[1].title}</h3>
  <p class="none-btn">${projectWindows[1].description}</p>
  <ul class="project-ul none-btn">
    <li><a class="Tags" href="#">${projectWindows[1].technologies.split(' ')[0]}</a></li>
    <li><a class="Tags" href="#">${projectWindows[1].technologies.split(' ')[1]}</a></li>
    <li><a class="Tags" href="#">${projectWindows[1].technologies.split(' ')[2]}</a></li>
  </ul>
  <button type="button" class="projectbtn btn project-open-button">See Project</button>
  </div>`;
}

// other project cards
function projectCardContent(info) {
  return `<div class="card ProjectPage" id=${info.id} style="background-image: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 70%), url('${info.image}');">
  <h3 class="project-titles ProjectPage-h2">${info.title}</h3>
  <p>${info.description}</p>
  <ul class="project-ul">
    <li><a class="Tags" href="#">${info.technologies.split(' ')[0]}</a></li>
    <li><a class="Tags" href="#">${info.technologies.split(' ')[1]}</a></li>
    <li><a class="Tags" href="#">${info.technologies.split(' ')[2]}</a></li>
  </ul>
  <button type="button" class="projectbtn btn none-btn">See Project</button>
</div>`;
}

const projectCardsContainer = document.querySelector('.works-projects');
if (projectCardsContainer) {
  projectCardsContainer.innerHTML += projectCard1();
  for (let i = 1; i < projectWindows.length; i += 1) {
    projectCardsContainer.innerHTML += projectCardContent(projectWindows[i]);
  }
}

// Popup project window
const openButton = document.querySelectorAll('.project-open-button');
function popupProjectWindow() {
  // creating overlay
  const overlay = document.createElement('div');
  overlay.id = 'overlay';
  document.body.appendChild(overlay);

  //  creating container of window
  const ProjectWindow = document.createElement('div');
  ProjectWindow.className = 'popup-window';
  document.body.appendChild(ProjectWindow);
  //  creating header
  const ProjectWindowHeader = document.createElement('div');
  ProjectWindowHeader.className = 'popup-window-header';
  ProjectWindowHeader.innerHTML = `<h2 class="popup-title blue"> ${projectWindows[0].title}</h2>`;
  document.querySelector('.popup-window').appendChild(ProjectWindowHeader);

  const Xmark = document.createElement('nav');
  Xmark.className = 'popup-window-closeMark';
  Xmark.innerHTML = '<i class="fa-solid blue fa-xmark project-closeIcon"></i>';
  document.querySelector('.popup-window-header').appendChild(Xmark);

  // creating technology list
  const technologiesList = document.createElement('ul');
  technologiesList.className = 'works-ul flexUl';
  technologiesList.id = 'technologies-List';
  document.querySelector('.popup-window').appendChild(technologiesList);

  // adding li tags
  const techMenu = document.querySelector('#technologies-List');
  let li = document.createElement('li');
  li.innerHTML = `<a class="popup-tabs works-tabs MRWTabs blue" href="#"> ${projectWindows[0].technologies.split(' ')[0]}</a>`;
  techMenu.appendChild(li);

  li = document.createElement('li');
  li.innerHTML = `<a class="popup-tabs works-tabs MRWTabs blue" href="#"> ${projectWindows[0].technologies.split(' ')[1]}'</a>`;
  techMenu.appendChild(li);

  li = document.createElement('li');
  li.innerHTML = `<a class="popup-tabs works-tabs MRWTabs blue" href="#"> ${projectWindows[0].technologies.split(' ')[2]}</a>`;
  techMenu.appendChild(li);

  // creating content part
  const content = document.createElement('div');
  content.className = 'popup-window-content';
  content.innerHTML = `<img class="popup-image" src=" ${projectWindows[0].image}" alt="project-image">`;
  document.querySelector('.popup-window').appendChild(content);

  // creating description part
  const description = document.createElement('div');
  description.className = 'popup-window-text';
  description.innerHTML = `<p class="blue"> ${projectWindows[0].description}</p>`;
  document.querySelector('.popup-window-content').appendChild(description);

  // creating description button part
  const button = document.createElement('div');
  button.className = 'popup-window-buttons';
  button.innerHTML = '<button class="btn popup-button">See Project <img src="images/githubPng.png" alt="button-github-symbol"></i></button>';
  document.querySelector('.popup-window-text').appendChild(button);

  const button1 = document.createElement('button');
  button1.className = 'btn popup-button';
  button1.innerHTML = 'See Live <img src="images/projectbuttonImage.png" alt="button-image">';
  document.querySelector('.popup-window-buttons').appendChild(button1);

  function closeProjectWindow() {
    if (document.querySelector('.popup-window')) {
      document.querySelector('.popup-window').remove();
      document.querySelector('#overlay').remove();
    }
  }
  const closeButton = document.querySelector('.project-closeIcon');
  closeButton.addEventListener('click', closeProjectWindow);
}

openButton.forEach((button) => {
  button.addEventListener('click', popupProjectWindow);
});

// Client side validation
const email = document.getElementById('email');
const regex = /[^A-Za-z0-9]/g; // to remove all non-alphanumeric characters
const submit = document.getElementById('submit-btn');
const errorDiv = document.getElementById('error');

submit.addEventListener('click', (event) => {
  const emailAddress = email.value.replace(regex, '');
  if (emailAddress === emailAddress.toLowerCase()) {
    email.setCustomValidity('');
  } else {
    event.preventDefault();
    errorDiv.innerHTML = 'E-mail address must contain only lower cases <i class="fa-solid fa-circle-exclamation"></i>';
  }
});

// document.addEventListener('click', (e) => {
//   if (e.target.classList.contains('ProjectPage')) {
//     window.location.href = 'https://gorgeous-piroshki-a86cd5.netlify.app/';
//   }
// });

if ($('#restaurant')) {
  $('#restaurant').click(() => {
    window.location.href = 'https://gorgeous-piroshki-a86cd5.netlify.app/';
  });
} else if ($('#space')) {
  $('#space').click(() => {
    window.location.href = 'https://delightful-granita-29f9c1.netlify.app/';
  });
}

// Local storage
const fullName = document.getElementById('name');
const textArea = document.getElementById('textA');
const datas = [fullName, textArea, email];

function saveValuesObj() {
  const obj = {};
  datas.forEach((data) => {
    obj[data.id] = data.value;
  });
  localStorage.setItem('data', JSON.stringify(obj));
}

fullName.onchange = saveValuesObj;
textArea.onchange = saveValuesObj;
email.onchange = saveValuesObj;

function preFilled() {
  datas.forEach((data) => {
    data.value = JSON.parse(localStorage.getItem('data'))[`${data.id}`];
  });
}
preFilled();