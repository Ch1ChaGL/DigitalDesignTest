'use strict';

const burger = document.querySelector('.menu__burger');
//Назначение класса active при нажатии на меню-бургер
burger.addEventListener('click', event => {
  burger.classList.toggle('active');
  document.querySelector('.menu__body').classList.toggle('open');
});
