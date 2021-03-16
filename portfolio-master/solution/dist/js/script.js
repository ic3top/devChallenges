document.addEventListener('DOMContentLoaded', () => {
  const bars = document.querySelectorAll('.skills__bar');

  const [...projects] = document.querySelectorAll('.portfolio__block');
  const portfolio = document.querySelector('.portfolio__wrapper');

  const [...buttons] = document.querySelectorAll('.projects .btn');
  const [reactElements, vueElements, responsiveElements] = sort(projects);
  responsiveElements.forEach((el) => el.style.display = 'block');

  buttons.forEach((el) => {
    el.addEventListener('click', () => {
      buttons.forEach((el) => el.classList.remove('btn_bg-blue'));
      el.classList.add('btn_bg-blue');
      if (el.dataset.type === 'react') {
        insertProjects(reactElements);
      } else if (el.dataset.type === 'vue') {
        insertProjects(vueElements);
      } else {
        insertProjects(responsiveElements);
      }
    });
  });

  setWidth(bars[0], '186px');
  setWidth(bars[1], '236.85px');
  setWidth(bars[2], '236.85px');
  setWidth(bars[3], '236.85px');
  setWidth(bars[4], '203px');
  setWidth(bars[5], '208px');

  function setWidth(el, width) {
    el.style.width = width;
  }

  function sort(arr) {
    const react = [];
    const vue = [];
    const responsive = [];

    arr.forEach((el) => {
      el.style.display = 'none';
      if (el.dataset.type == 'responsive') {
        responsive.push(el);
      } else if (el.dataset.type == 'vue') {
        vue.push(el);
      } else {
        react.push(el);
      }
    });
    return [react, vue, responsive];
  }

  function insertProjects(arr) {
    reactElements.forEach((el) => el.style.display = 'none');
    vueElements.forEach((el) => el.style.display = 'none');
    responsiveElements.forEach((el) => el.style.display = 'none');
    arr.forEach((el) => {
      el.style.display = 'block';
      portfolio.appendChild(el);
    });
  }
});
