"use strict";

//code to menu burguer
var header = document.querySelector(".header");
var burgerMenu = document.querySelector("#burger-menu");
burgerMenu.addEventListener('click', hideShow);

function hideShow() {
  if (header.classList.contains('is-active')) {
    header.classList.remove('is-active');
  } else {
    header.classList.add('is-active');
  }
}