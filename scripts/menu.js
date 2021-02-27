//menu
const menu = document.querySelector('.menu');
//menu button
const menuBtn = document.querySelector('.header__btn_align_right');
const textBtn = menuBtn.querySelector('.header__btn-text');

//menu items
const menuItems = {
  item: menu,
  btn: menuBtn,
  text: textBtn
};

//play video
function toggleMenu() {
  const isOpened = document.querySelector('.menu_opened');
  isOpened ? closeMenu() : openMenu();
  menuItems.item.classList.toggle('menu_opened');
}

function openMenu() {
  menuItems.text.textContent = 'close';
}

function closeMenu() {
  menuItems.text.textContent = 'more';
}

//set event menu listener
menuItems.btn.addEventListener('click', toggleMenu);

export {menuItems};