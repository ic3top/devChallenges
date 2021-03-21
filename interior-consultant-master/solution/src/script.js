const menu = document.querySelector('.menu');
const btn = menu.querySelector('.nav-tgl');
const linksContainer = menu.querySelector('ul')

btn.addEventListener('click', () => {
  setTimeout(() => { linksContainer.classList.toggle('d-none') }, 300);
  menu.classList.toggle('active-menu');
  document.body.classList.toggle('overflow-y-hidden');
});