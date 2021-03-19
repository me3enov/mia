export class SocialIcon {
  //constructor for the "SocialIcon" class
  constructor(settings) {
    //data variables
    this._data = settings.data;
    //link variable
    this._linkValue = this._data.linkValue;
    //image variable
    this._imageClass = this._data.imageClass;

    //template selector
    this._templateSelector = settings.config.templateSelector;
    //<li> icon element selector
    this._liIconSelector = settings.config.liIconSelector;
    //<a> link icon element selector
    this._linkSelector = settings.config.linkSelector;
    //<button> icon element selector
    this._iconSelector = settings.config.iconSelector;
  }

  //get link icon from template
  _getLinkTemplate() {
    const icon = document
      .querySelector(this._templateSelector)
      .content
      .querySelector(this._liIconSelector)
      .cloneNode(true);
    return icon;
  }

  //_generate link icon
  generateIcon() {
    //get template link icon
    this._liIconElement = this._getLinkTemplate();
    //get link icon
    this._linkElement = this._liIconElement.querySelector(this._linkSelector);
    //set link value
    this._linkElement.setAttribute('href', this._linkValue);
    //set icon image
    this._iconElement = this._linkElement.querySelector(this._iconSelector).classList.add(this._imageClass);
    return this._liIconElement;
  }
}