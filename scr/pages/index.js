//import CSS
import './index.css';
//IMPORT MODULES START
import {menuItemsData} from '../utils/menuItemsData.js';
import {socialIconsData} from '../utils/socialIconsData.js';
import {
  menuItemCenterClass,
  forms,
  selectors,
  stateClasses,
  configSocialIcons,
  configMenu,
  configMenuItem,
  configPopupWork,
  configHeader,
  configFormValidator,
  workBtnTextValue,
  menuBtnTextValue,
}
from '../utils/constants.js';
import {Section} from '../components/Section.js';
import Layer from '../components/Layer.js';
import {LayerIndex} from '../components/LayerIndex.js';
import {LayerShowReel} from '../components/LayerShowReel.js';
import {PopupWork} from '../components/PopupWork.js';
import {PopupMenu} from '../components/PopupMenu.js';
import {MenuItemMain} from '../components/MenuItemMain.js';
import {MenuItemCenter} from '../components/MenuItemCenter.js';
import {Header} from '../components/Header.js';
import {SocialIcon} from '../components/SocialIcon.js';
import {FormValidator} from '../components/FormValidator.js';
import {itemData, getFirstMenuItemData} from '../utils/getFirstMenuItemData.js';
//IMPORT MODULES END

//INIT INDEX LAYER START
//main text and video button container
const layerIndex = new LayerIndex ({
  selector: selectors.layerIndexSelector,
  openedClass: stateClasses.layerIndexOpenedClass
});
//INIT INDEX LAYER END


//INIT SOCIAL ICONS LAYER START
//init social icons
const socialIcons = new Section({renderer: renderSocialIcon}, selectors.socialIconsContainerSelection);

//render social icon
function renderSocialIcon (item) {
  const socialIcon = createSocialIcon(item);
  socialIcons.addItem(socialIcon);
}

//create new social icon
const createSocialIcon = (item) => {
  const socialIcon = new SocialIcon ({
    data: item,
    config: configSocialIcons
  });
  return socialIcon.generateIcon();
}
//INIT ALL ICONS
socialIcons.renderItems(socialIconsData);
//INIT SOCIAL ICONS LAYER END

//INIT OVERLAY LAYER START
//main overlay layer
const layerOverlay = new Layer ({
  selector: selectors.layerOverlaySelector,
  openedClass: stateClasses.layerOverlayOpenedClass
});
//INIT OVERLAY LAYER END

//INIT VIDEO LAYER START
//main ShowReel layer
const layerShowReel = new LayerShowReel ({
  selector: selectors.layerShowReelSelector,
  openedClass: stateClasses.layerShowReelOpenedClass,
  playBtnSelector: selectors.playShowReelBtnSelector,
  playBtnActiveClass: stateClasses.playShowReelBtnOpenedClass,
  muteBtnSelector: selectors.muteShowReelBtnSelector,
  muteBtnActiveClass: stateClasses.muteShowReelBtnOpenedClass
});
layerShowReel.setEventListeners();
//INIT VIDEO LAYER END

//CREATE WORK PAGE START
//create new work page
const popupWork = new PopupWork ({
  data: menuItemsData,
  selector: selectors.popupWorkSelector,
  openedClass: stateClasses.popupWorkOpenedClass,
  config: configPopupWork,
  handleCloseWork,
  submit: () =>{console.log('submit')}
});
//get all options for forms
popupWork.getElem();
//open work popup
function handleOpenWork () {
  popupWork.open();
  layerIndex.close();
  layerOverlay.close();
  layerShowReel.close();
}
//close work popup
function handleCloseWork () {
  popupWork.close();
  layerIndex.open();
  layerOverlay.open();
  layerShowReel.open();
  formWork.clearValidation();
}
//CREATE WORK PAGE END

//CREATE MENU PAGE START
//create new menu page
const popupMenu = new PopupMenu ({
  selector: selectors.popupMenuSelector,
  openedClass: stateClasses.popupMenuOpenedClass
});
//open menu popup
function handleOpenMenu () {
  popupMenu.open();
}
//close menu popup
function handleCloseMenu () {
  popupMenu.close();
}
//CREATE MENU PAGE END


//CREATE HEADER START
//init header
const header = new Header ({
  workOpenedClass: stateClasses.popupWorkOpenedClass,
  menuOpenedClass: stateClasses.popupMenuOpenedClass,
  configHeader: configHeader,
  workBtnTextValue: workBtnTextValue,
  menuBtnTextValue: menuBtnTextValue,
  handleOpenWork,
  handleOpenMenu,
  handleCloseWork,
  handleCloseMenu
});
//init event listeners
header.setEventListeners();
//CREATE HEADER END

//CREATE MENU ITEMS START
//menu items init
const menuItems = new Section({renderer: renderMenuItem}, selectors.menuItemsContainerSelector);

//render menu item
function renderMenuItem (item) {
  const menuItem = createMenuItem(item);
  menuItems.addItem(menuItem);
}

//create new menu item
const createMenuItem = (item) => {
  const menuItem = new MenuItemMain ({
    data: item,
    selector: selectors.templateMainItemSelector,
    config: configMenu,
    extend: configMenuItem,
    openWork: header.openWork,
    selectSelector: configPopupWork.itemContainerSelector
  });
  return menuItem.generateMenuItem();
}

//INIT ALL ITEMS
menuItems.renderItems(menuItemsData);
itemData.addSpecialClasses();
//CREATE MENU ITEMS END

//CREATE MENU CENTER ITEM START
//menu center item init
const menuItemCenter = new Section({renderer: renderMenuItemCenter}, selectors.popupMenuSelector);

//render menu item center
function renderMenuItemCenter (item) {
  const menuItem = createMenuItemCenter(item);
    menuItemCenter.addItem(menuItem);
}

//create new menu center item
const createMenuItemCenter = () => {
  const menuItem = new MenuItemCenter ({
    data: getFirstMenuItemData(),
    selector: selectors.templateCenterItemSelector,
    config: configMenu,
    extend: configMenuItem,
    openWork: header.openWork,
    closeMenu: header.closeMenu,
    selectSelector: configPopupWork.itemContainerSelector
  });
  menuItemCenterClass.item = menuItem;
  return menuItem.generateMenuItem();
}
//add menu center item
function addItemCenter () {
  //set menu center item values
  const itemData = getFirstMenuItemData();
  //create menu center item
  const item = createMenuItemCenter(itemData);
  menuItemCenter.addItem(item);
}
addItemCenter ();
//INIT CENTER ITEM END

//enable form validation
const formWork = new FormValidator({
  selector: forms.formPlaceWork,
  config: configFormValidator
});
formWork.enableValidation();