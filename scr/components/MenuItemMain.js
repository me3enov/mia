//import menu item center class
import {menuItemCenterClass} from '../utils/constants.js';
//import default class
import MenuItem from './MenuItem.js';

export class MenuItemMain extends MenuItem {
  //constructor for the "MenuItemMain" class
  constructor(settings) {
    //default settings
    super(settings);
    //data variables
    super._data = settings.data;
    //title variable
    super._title = this._data.title;
    //image variable
    super._image = this._data.img;
    //links variable
    super._links = this._data.itemList;
  }

  //set event listeners to menu title
  _setEventListenerTitle(item) {
    item.addEventListener('click', () => {
      //get data from menu item
      const data = this._getData();
      //change data in item center
      menuItemCenterClass.item.changeItem(data);
    })
  }

  //get menu item data
  _getData() {
    //get all variables
    this._titleValue = this._menuItemElement.querySelector(this._titleSelector).textContent;
    this._imageValue = this._menuItemElement.querySelector(this._imageSelector).style.backgroundImage.slice(5, -2);
    this._linksElem = this._menuItemElement.querySelectorAll(this._linkSelector);
    this._linksValue = [];
    //add all links to array
    this._linksElem.forEach(elem => {this._linksValue.push(elem.textContent)});
    this._itemData = {
      titleValue: this._titleValue,
      imageValue: this._imageValue,
      linksValue: this._linksValue
    };

    return this._itemData;
  }

  generateMenuItem() {
    //get menu item template
    this._menuItemElement = this._getMenuItemTemplate();
    //set variables menu link
    this._titleElement = this._menuItemElement.querySelector(this._titleSelector);
    this._titleElement.textContent = this._toUpperCase(this._title)
    this._setEventListenerTitle(this._titleElement);
    this._menuItemElement.querySelector(this._imageSelector).style.backgroundImage = `url(${this._image})`;
    this._links.forEach(link => {
      //get menu link template
      this._menuLinks = this._generateLink(link);
      //add menu link template to menu item
      this._menuItemElement.querySelector(this._linkContainer).append(this._menuLinks);
    });

    return this._menuItemElement;
  }

}