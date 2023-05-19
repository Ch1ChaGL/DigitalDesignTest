'use strict';

const burger = document.querySelector('.menu__burger');
//Назначение класса active при нажатии на меню-бургер
burger.addEventListener('click', event => {
  burger.classList.toggle('active');
  document.querySelector('.menu__body').classList.toggle('open');
});

const theme = document.querySelector('.menu__theme');

theme.addEventListener('click', event => {
  const image = document.getElementById('theme');
  image.classList.toggle('light');
  if (image.classList.contains('light')) {
    image.src = './img/nav/moon.png';
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './css/light.css';
    link.id = 'lightThemeStyleSheet';

    //Сохраняем прокрутку
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    document.head.appendChild(link);

    //восстанавливаем прокрутку
    requestAnimationFrame(() => {
      window.scrollTo(0, scrollPosition);
    });
  } else {
    image.src = './img/nav/sun.png';
    const lightThemeStyleSheet = document.getElementById(
      'lightThemeStyleSheet',
    );
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    lightThemeStyleSheet.remove();
    requestAnimationFrame(() => {
      window.scrollTo(0, scrollPosition);
    });
  }
});
