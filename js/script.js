'use strict';

const btnHamburger = document.querySelector('.promo__nav_btn');
const btnCloseHamburger = document.querySelector('.menu__close');
const menu = document.querySelector('.menu');

btnHamburger.addEventListener('click', (e)=>{
    e.preventDefault();
    menu.classList.add('active');
});

btnCloseHamburger.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.remove('active');
});