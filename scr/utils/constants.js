//menu item center class
export const menuItemCenterClass = {
  item: ''
};

//FORMS START
export const forms = {
  formPlaceWork: document.querySelector('.form_place_work')
};
//FORMS END

//SELECTORS START
export const selectors = {
  //menu items container selector
  menuItemsContainerSelector: '.menu__list',
  //template main item selector
  templateMainItemSelector: '#menu-item-template',
  //template center item selector
  templateCenterItemSelector: '#menu-item-center-template',
  //popup work selector
  popupWorkSelector: '.main-content__block_type_work',
  //popup menu selector
  popupMenuSelector: '.menu',
  //layer index selector
  layerIndexSelector: '.main-content__block_type_index',
  //layer index overlay selector
  layerOverlaySelector: '.main-content__overlay',
  //layer ShowReel selector
  layerShowReelSelector: '.main-content__showreel',
  //play ShowReel button
  playShowReelBtnSelector: '.video-icons__btn_type_play',
  //mute ShowReel button
  muteShowReelBtnSelector: '.video-icons__btn_type_mute',
  //social icons container selection
  socialIconsContainerSelection: '.social-list'
};
//SELECTORS END


//STATE CLASSES START
export const stateClasses = {
  //popup work opened class
  popupWorkOpenedClass: 'main-content__block_opened',
  //popup menu opened class
  popupMenuOpenedClass: 'menu_opened',
  //layer index opened class
  layerIndexOpenedClass: 'main-content__block_active',
  //layer index overlay opened class
  layerOverlayOpenedClass: 'main-content__overlay_active',
  //layer ShowReel opened class
  layerShowReelOpenedClass: 'main-content__showreel_active',
  //play ShowReel button active class
  playShowReelBtnOpenedClass: 'video-icons__btn_state_play',
  //mute ShowReel button active class
  muteShowReelBtnOpenedClass: 'video-icons__btn_state_mute'
};
//STATE CLASSES END

//CONFIG FOR CLASSES START
//social icons config for "SocialIcons" class
export const configSocialIcons = {
  templateSelector: '#social-icon-template',
  liIconSelector: '.social-list__item',
  linkSelector: '.social-list__link',
  iconSelector: '.social-list__btn'
};
//menu item config for "MenuItem" class
export const configMenu = {
  menuItemSelector: '.menu-item',
  titleSelector: '.menu-item__title',
  imageSelector: '.menu-item__img',
  linkSelector: '.menu-item__text'
};
//menu item config for "MenuItemMain" class and "MenuItemCenter" class
export const configMenuItem = {
  templateLinkSelector: '#menu-item-link',
  menuILinkSelector: '.menu-item__item',
  menuLinksListSelector: '.menu-item__list'
};
//menu item config for "SetMenuItem" class
export const configSetMenuItem = {
  containerMainSelector: '.menu__list',
  containerCenterSelector: '.menu',
  linkSelector: '.menu-item__text',
  switchClass: 'menu-item_state_switch',
  redTitleClass: 'menu-item__title_color_red'
};
//popup config for "SetMenuItem" class
export const configPopupWork = {
  templateSelector: '#placeholder-template',
  formSelector: '.form',
  formInputSelector: '.form__input',
  itemContainerSelector: '.form__input_string_service',
  optGroupSelector: '.form__opt-group',
  optionSelector: '.form__option'
};
//header config for "Header" class
export const configHeader = {
  headerSelector: '.header',
  btnWorkSelector: '.header__btn_align_left',
  btnMenuSelector: '.header__btn_align_right',
  btnTextSelector: '.header__btn-text'
};
//button text popup work
export const workBtnTextValue = {
  workClosed: 'work with us',
  workOpened: 'home'
};
//button text popup menu
export const menuBtnTextValue = {
  menuClosed: 'more',
  menuOpened: 'close'
};
//popup config for "FormValidator" class
export const configFormValidator = {
  formSelector: '.form',
  formInputSelector: '.form__input-selector',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active',
  errorPrefix: `-error`
};
//CONFIG FOR CLASSES END