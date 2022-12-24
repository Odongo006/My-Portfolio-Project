/* eslint-disable prefer-destructuring */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
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

function myFunction() {
  hamburger.classList.add('hamburger-disappear');
  ulCont.classList.add('ul-cont-appear');
}

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
  },
  {
    name: 'Multi Post Stories',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    imagesrc: 'imgs/poster2.svg',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    link: 'link_to_live_version.com',
  },
  {
    name: 'Facebook 360',
    description: 'Exploring the future of media in Facebook,s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    imagesrc: 'imgs/poster 3.svg',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    link: 'link_to_live_version.com',
  },
  {
    name: 'Uber Navigation',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    imagesrc: 'imgs/poster 4.svg',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    link: 'link_to_live_version.com',
  },
];

const projectImgSrc = document.querySelectorAll('.tonic');
const projectLanguagesHtml = document.querySelectorAll('.project-languages-html');
const projectLanguagesRuby = document.querySelectorAll('.project-languages-ruby');
const projectLanguagesCss = document.querySelectorAll('.project-languages-css');
const projectLanguagesJs = document.querySelectorAll('.project-languages-js');
const projectsDescription = document.querySelectorAll('.projects-description');

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

const openModal = function () {
  overlay.classList.remove('hidden');
  modal.style.display = 'flex';
  // eslint-disable-next-line no-use-before-define
  popupsProjectImage.src = storeData[0].imagesrc2;
  popupsProjectTitle.innerHTML = storeData[0].name;
};

openModalBtn.addEventListener('click', openModal);

const openModal2 = function () {
  overlay.classList.remove('hidden');
  modal.style.display = 'flex';
  // eslint-disable-next-line no-use-before-define
  popupsProjectImage.src = storeData[1].imagesrc;
  popupsProjectTitle.innerHTML = storeData[1].name;
  popupsProjectTitle.style.fontSize = '20px';
};

openModalBtn2.addEventListener('click', openModal2);

const openModal3 = function () {
  overlay.classList.remove('hidden');
  modal.style.display = 'flex';
  // eslint-disable-next-line no-use-before-define
  popupsProjectImage.src = storeData[2].imagesrc;
  popupsProjectTitle.innerHTML = storeData[2].name;
  popupsProjectTitle.style.fontSize = '17px';
};

openModalBtn3.addEventListener('click', openModal3);

const openModal4 = function () {
  overlay.classList.remove('hidden');
  modal.style.display = 'flex';
  // eslint-disable-next-line no-use-before-define
  popupsProjectImage.src = storeData[0].imagesrc;
  popupsProjectTitle.innerHTML = storeData[0].name;
};

openModalBtn4.addEventListener('click', openModal4);

const closeModal = function () {
  modal.style.display = 'none';
  overlay.classList.add('hidden');
};

closeModalBtn.addEventListener('click', closeModal);
