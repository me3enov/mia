//import default class
import MenuItem from './MenuItem.js';

export class MenuItemCenter extends MenuItem {
  //constructor for the "MenuItemCenter" class
  constructor(settings) {
    super(settings);
  }

  //generate menu item center
  generateMenuItem() {
    //get menu item template
    this._menuItemElement = this._getMenuItemTemplate();
    //set variables menu item center
    this._titleElement = this._menuItemElement.querySelector(this._titleSelector);
    this._titleElement.textContent = this._toUpperCase(this._title)
    this._imageElement = this._menuItemElement.querySelector(this._imageSelector);
    this._imageElement.style.backgroundImage = `url(${this._image})`;
    this._links.forEach(link => {
      //get menu link template
      this._menuLinks = this._generateLink(link);
      //add menu link template to menu item
      this._menuItemElement.querySelector(this._linkContainer).append(this._menuLinks);
    });

    return this._menuItemElement;
  }

  //change item center
  changeItem(data) {
    //it works width window size < 1024 px & height window size 590 px
    if (window.innerWidth <= 1024 | window.innerHeight <= 590) {
      //set variables menu item center
      this._titleElement.textContent = data.titleValue;
      this._imageElement.style.backgroundImage = `url(${data.imageValue})`;
      //remove old links
      const oldLinks = this._menuItemElement.querySelectorAll(this._menuILinkSelector);
      oldLinks.forEach(link => {
        link.remove();
        link = null;
      });
      //create new links
      data.linksValue.forEach(link => {
        //get template menu link
        this._menuLinks = this._generateLink(link);
        //add template menu link to menu item
        this._menuItemElement.querySelector(this._linkContainer).append(this._menuLinks);
      });
    }
    if (window.innerHeight <= 390) {
      this._openWork();
    }
  }
}