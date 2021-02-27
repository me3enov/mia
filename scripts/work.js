//import modules
import {menuItems} from './menu.js'
import {vid} from './video.js'

//title items
const navTitle = document.querySelectorAll('.menu-item__title');

//nav items
const navItems = document.querySelectorAll('.nav_item-label');

//select items
const service = document.querySelector(`.form__item_string_service`);

//index content
const index = document.querySelector('.main-content__block_type_index');

//background
const back = document.querySelector('.main-content__back');

//work content
const work = document.querySelector('.main-content__block_type_work');

//work button
const workBtn = document.querySelector('.header__block_align_left');
const textBtnWork = workBtn.querySelector('.header__btn-text');

//menu items
const workItems = {
  hide: index,
  item: work,
  vid: vid,
  back: back,
  btn: workBtn,
  text: textBtnWork
};

navTitle.forEach((item) => {
  item.addEventListener('click', () => {
    menuItems.item.classList.remove('menu_opened');
    workItems.item.classList.add('main-content__block_active');
    workItems.item.classList.add('main-content__block_opened');
    workItems.hide.classList.remove('main-content__block_opened');
    workItems.vid.classList.remove('main-content__showreel_active');
    workItems.back.classList.remove('main-content__back_active');
    closeWork();
  });
})

for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener('click', () => {
    let a = i+1;
    if (i < 6) {
      a = i+1;
    }
    else {
      a = i-4;
    }
    service[a].selected = true;
    menuItems.item.classList.remove('menu_opened');
    workItems.item.classList.add('main-content__block_active');
    workItems.item.classList.add('main-content__block_opened');
    workItems.hide.classList.remove('main-content__block_opened');
    workItems.vid.classList.remove('main-content__showreel_active');
    workItems.back.classList.remove('main-content__back_active');
    closeWork();
  });
}

//play video
function toggleWork() {
  const isOpened = document.querySelector('.main-content__block_active');
  isOpened ? closeWork() : openWork();
  menuItems.item.classList.remove('menu_opened');
  workItems.item.classList.toggle('main-content__block_active');
  workItems.item.classList.toggle('main-content__block_opened');
  workItems.hide.classList.toggle('main-content__block_opened');
  workItems.vid.classList.toggle('main-content__showreel_active');
  workItems.back.classList.toggle('main-content__back_active');
}

function openWork() {
  menuItems.text.textContent = 'more';
  workItems.text.textContent = 'home';
}

function closeWork() {
  menuItems.text.textContent = 'more';
  workItems.text.textContent = 'work with us';
}

//set event work listener
workItems.btn.addEventListener('click', toggleWork);