const hamburger = document.querySelector('.header__hamburger');
const menu = document.querySelector('.menu');
const closer = document.querySelector('.menu__close');
const { body } = document;
const links = document.querySelectorAll('.menu__link');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
  body.style.overflowY = 'hidden';
});

closer.addEventListener('click', () => {
  menu.classList.remove('active');
  body.style.overflowY = 'visible';
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});
