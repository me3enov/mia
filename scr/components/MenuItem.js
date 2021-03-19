//export class to default layer
export default class MenuItem {
  //constructor for the "MenuItem" class
  constructor(settings) {
    //handle click to links function init
    this._openWork = settings.openWork;

    //template selector
    this._templateSelector = settings.selector;

    //data variables
    this._data = settings.data;
    //title variable
    this._title = this._data.titleValue;
    //image variable
    this._image = this._data.imageValue;
    //links variable
    this._links = this._data.linksValue;

    //menu element selector
    this._menuItemSelector = settings.config.menuItemSelector;
    //title element selector
    this._titleSelector = settings.config.titleSelector;
    //image element selector
    this._imageSelector = settings.config.imageSelector;
    //link element selector
    this._linkSelector = settings.config.linkSelector;

    //link template selector
    this._templateLinkSelector = settings.extend.templateLinkSelector;
    //menu link element selector
    this._menuILinkSelector = settings.extend.menuILinkSelector;
    //link container selector
    this._linkContainer = settings.extend.menuLinksListSelector;

    //form select element selector
    this._selectSelector = settings.selectSelector;
    //form select element
    this._select = document.querySelector(this._selectSelector);
  }

  //get menu item from template
  _getMenuItemTemplate() {
    const menuItem = document
      .querySelector(this._templateSelector)
      .content
      .querySelector(this._menuItemSelector)
      .cloneNode(true);
    return menuItem;
  }

  //get menu link from template
  _getLinkTemplate() {
    const linkElement = document
      .querySelector(this._templateLinkSelector)
      .content
      .querySelector(this._menuILinkSelector)
      .cloneNode(true);
    return linkElement;
  }

  //upper first letter
  _toUpperCase(text) {
    return text.slice(0, 1).toUpperCase() + text.slice(1);;
  }

  //_generate link
  _generateLink(link) {
    //get template menu link
    this._menuLinkElement = this._getLinkTemplate();
    this._link = this._menuLinkElement.querySelector(this._linkSelector);
    this._link.textContent = this._toUpperCase(link);
    //set event listeners menu link
    this._setEventListenerLink(this._link);
    return this._menuLinkElement;
  }

  //set event listeners to menu link
  _setEventListenerLink(item) {
    item.addEventListener('click', () => {
      this._openWork();
      this._select.value = item.textContent;
    })
  }

}