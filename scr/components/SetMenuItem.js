export class SetMenuItem {
  //constructor for the "SetMenuItem" class
  constructor(settings) {
    //menu item element selector
    this._menuItemSelector = settings.config.menuItemSelector;
    //title item menu element selector
    this._titleSelector = settings.config.titleSelector;
    //image item menu element selector
    this._imageSelector = settings.config.imageSelector;

    //container selector for item menu
    this._containerMainSelector = settings.extend.containerMainSelector;
    //container selector for item menu center
    this._containerCenterSelector = settings.extend.containerCenterSelector;
    //link element selector
    this._linkSelector = settings.extend.linkSelector;
    //switch class for first item menu element
    this._switchClass = settings.extend.switchClass;
    //red title class for title item menu element
    this._redTitleClass = settings.extend.redTitleClass;

    //container element for item menu element
    this._containerMain = document.querySelector(this._containerMainSelector);
    //container element for item menu center element
    this._containerCenter = document.querySelector(this._containerCenterSelector);
  }

  //add special class to first menu item
  addSpecialClasses() {
    this._containerMain.querySelector(this._menuItemSelector).classList.add(this._switchClass);
    this._containerMain.querySelector(this._titleSelector).classList.add(this._redTitleClass);
  }

  //get all menu item data
  getData(data) {
    this._itemElem = this._containerMain.querySelector(data);
    this._titleValue = this._itemElem.querySelector(this._titleSelector).textContent;
    this._imageValue = this._itemElem.querySelector(this._imageSelector).style.backgroundImage.slice(5, -2);
    this._linksElem = this._itemElem.querySelectorAll(this._linkSelector);
    this._linksValue = [];
    this._linksElem.forEach(elem => {this._linksValue.push(elem.textContent)});
    this._itemData = {
      titleValue: this._titleValue,
      imageValue: this._imageValue,
      linksValue: this._linksValue
    };

    return this._itemData;
  }
}