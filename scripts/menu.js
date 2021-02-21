//menu
const menu = document.querySelector('.menu');
//menu button
const menuBtn = document.querySelector('.header__btn_align_right');
const textBtn = menuBtn.querySelector('.header__btn-text');

//play video
function toggleMenu() {
  const isOpened = document.querySelector('.menu_opened');
  isOpened ? closeMenu() : openMenu();
  menu.classList.toggle('menu_opened');
}

function openMenu() {
  textBtn.textContent = 'close';
}

function closeMenu() {
  textBtn.textContent = 'more';
}

//set event listeners video
menuBtn.addEventListener('click', toggleMenu);