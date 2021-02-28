'use strict';

//Hamburger
const menuAdaptive = document.querySelector('.menu__adaptive');
const btnBurger = document.querySelector('.menu__item--burger');

btnBurger.addEventListener('click', () => {
  menuAdaptive.classList.toggle('menu__adaptive--active');
  btnBurger.classList.toggle('close');
});