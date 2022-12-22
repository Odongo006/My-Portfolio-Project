/* eslint-disable func-names */
/* eslint-disable linebreak-style */
const hamburger = document.querySelector('.hamburger');
const ulCont = document.querySelector('.ul-cont');
const modal = document.querySelector('.popup-window');
const overlay = document.querySelector('.overlay');
const openModalBtn = document.querySelector('.card-button');
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

const openModal = function () {
  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
};

openModalBtn.addEventListener('click', openModal);

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

closeModalBtn.addEventListener('click', closeModal);
