/* eslint-disable linebreak-style */
/* eslint-disable prefer-destructuring */
/* eslint-disable linebreak-style */
const hamburger = document.querySelector('.hamburger');
const ulCont = document.querySelector('.ul-cont');
const modal = document.querySelector('.popup-window');
const overlay = document.querySelector('.overlay');
const openModalBtn = document.querySelector('.card-button');
const openModalBtn2 = document.querySelector('.card-button2');
const openModalBtn3 = document.querySelector('.card-button3');
const openModalBtn4 = document.querySelector('.card-button4');

const closeModalBtn = document.querySelector('.closeIcon-popup');

ulCont.addEventListener('click', ((e) => {
  if (e.target.classList[0] === 'closeIcon') {
    hamburger.classList.remove('hamburger-disappear');
    ulCont.classList.remove('ul-cont-appear');
  } else if (e.target.classList[0] === 'nav-link') {
    hamburger.classList.remove('hamburger-disappear');
    ulCont.classList.remove('ul-cont-appear');
  }
}));

const storeData = [
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign- ups required',
    imagesrc: 'imgs/poster.svg',
    imagesrc2: 'imgs/snaps.png',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    link: 'link_to_live_version.com',
    content1: 'Lorem ipsum it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    content2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellendus mollitia saepe maxime vitae nostrum repellat eligendi amet voluptas modi repudiandae necessitatibus animi harum obcaecati at omnis laboriosam sapiente eum rem velit molestias',
    tags1: ['HTML', 'css', 'Javascript'],
    tags2: ['Github', 'Ruby', 'Frontend'],
  },
  {
    name: 'Multi Post Stories',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    imagesrc: 'imgs/poster2.svg',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    link: 'link_to_live_version.com',
    content1: 'Lorem ipsum it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    content2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellendus mollitia saepe maxime vitae nostrum repellat eligendi amet voluptas modi repudiandae necessitatibus animi harum obcaecati at omnis laboriosam sapiente eum rem velit molestias',
  },
  {
    name: 'Facebook 360',
    description: 'Exploring the future of media in Facebook,s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    imagesrc: 'imgs/poster 3.svg',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    link: 'link_to_live_version.com',
    content1: 'Lorem ipsum it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    content2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellendus mollitia saepe maxime vitae nostrum repellat eligendi amet voluptas modi repudiandae necessitatibus animi harum obcaecati at omnis laboriosam sapiente eum rem velit molestias',
  },
  {
    name: 'Uber Navigation',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    imagesrc: 'imgs/poster 4.svg',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    link: 'link_to_live_version.com',
    content1: 'Lorem ipsum it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    content2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellendus mollitia saepe maxime vitae nostrum repellat eligendi amet voluptas modi repudiandae necessitatibus animi harum obcaecati at omnis laboriosam sapiente eum rem velit molestias',
  },
];

const projectImgSrc = document.querySelectorAll('.tonic');
const projectLanguagesHtml = document.querySelectorAll('.project-languages-html');
const projectLanguagesRuby = document.querySelectorAll('.project-languages-ruby');
const projectLanguagesCss = document.querySelectorAll('.project-languages-css');
const projectLanguagesJs = document.querySelectorAll('.project-languages-js');
const projectsDescription = document.querySelectorAll('.projects-description');

// eslint-disable-next-line no-plusplus
for (let i = 0; i < projectLanguagesHtml.length; i++) {
  projectImgSrc[i].src = storeData[i].imagesrc;
  projectLanguagesHtml[i].innerHTML = storeData[i].technologies[0];
  projectLanguagesRuby[i].innerHTML = storeData[i].technologies[1];
  projectLanguagesCss[i].innerHTML = storeData[i].technologies[2];
  projectLanguagesJs[i].innerHTML = storeData[i].technologies[3];
  projectsDescription[i].innerHTML = storeData[i].description;
}

const popupsProjectImage = document.querySelector('.popup-img');
const popupsProjectTitle = document.querySelector('.popups-proj-title');
const popupsProjectDesktop = document.querySelector('.popups-project-p-desktop');
const popupsProjectMobile = document.querySelector('.popups-project-p-mobile');
const tagsUp = document.querySelectorAll('.card-tagsLi');
const tagsDown = document.querySelectorAll('.card-tagsLi1');

const openModal = function () {
  overlay.classList.remove('hidden');
  modal.style.display = 'flex';
  // eslint-disable-next-line no-use-before-define
  popupsProjectImage.src = storeData[0].imagesrc2;
  popupsProjectTitle.innerHTML = storeData[0].name;
  popupsProjectDesktop.innerHTML = storeData[0].content1;
  popupsProjectMobile.innerHTML = storeData[0].content2;
  tagsUp.innerHTML = storeData[0].tags1;
  tagsDown.innerHTML = storeData[0].tags2;
  document.documentElement.scrollTop = 0;
};

openModalBtn.addEventListener('click', openModal);

const openModal2 = function () {
  overlay.classList.remove('hidden');
  modal.style.display = 'flex';
  // eslint-disable-next-line no-use-before-define
  popupsProjectImage.src = storeData[1].imagesrc;
  popupsProjectTitle.innerHTML = storeData[1].name;
  popupsProjectDesktop.innerHTML = storeData[1].content1;
  popupsProjectMobile.innerHTML = storeData[1].content2;
  document.documentElement.scrollTop = 0;
};

openModalBtn2.addEventListener('click', openModal2);

const openModal3 = function () {
  overlay.classList.remove('hidden');
  modal.style.display = 'flex';
  // eslint-disable-next-line no-use-before-define
  popupsProjectImage.src = storeData[2].imagesrc;
  popupsProjectTitle.innerHTML = storeData[2].name;
  popupsProjectDesktop.innerHTML = storeData[2].content1;
  popupsProjectMobile.innerHTML = storeData[2].content2;
  document.documentElement.scrollTop = 0;
};

openModalBtn3.addEventListener('click', openModal3);

const openModal4 = function () {
  overlay.classList.remove('hidden');
  modal.style.display = 'flex';
  // eslint-disable-next-line no-use-before-define
  popupsProjectImage.src = storeData[3].imagesrc;
  popupsProjectTitle.innerHTML = storeData[3].name;
  popupsProjectDesktop.innerHTML = storeData[3].content1;
  popupsProjectMobile.innerHTML = storeData[3].content2;
  document.documentElement.scrollTop = 0;
};

openModalBtn4.addEventListener('click', openModal4);

const closeModal = function () {
  modal.style.display = 'none';
  overlay.classList.add('hidden');
};

closeModalBtn.addEventListener('click', closeModal);

// Form validation
const form = document.querySelector('.form-group');
const email = document.getElementById('email');

// Invalid error message
const setError = (message) => {
  const errorDisplay = document.querySelector('.error');
  errorDisplay.innerText = message;
};

// valid success message
const setSuccess = () => {
  const errorDisplay = document.querySelector('.error');
  errorDisplay.innerText = '';
};

const inputvalidation = (e) => {
  const emailValue = email.value.trim();

  if (emailValue === '') {
    setError('Email is required');
    e.preventDefault();
  } else if (emailValue.toLowerCase() !== emailValue) {
    setError('Provide a valid email address');
    e.preventDefault();
  } else {
    setSuccess();
  }
};

form.addEventListener('submit', (e) => {
  inputvalidation(e);
});
