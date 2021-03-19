import Layer from './Layer.js';

export class PopupWork extends Layer {
  //constructor for the "PopupWork" class
  constructor(settings) {
    //default settings
    super(settings);
    //data variables
    this._data = settings.data;
    //template selector
    this._templateSelector = settings.config.templateSelector;
    //form selector
    this._formSelector = settings.config.formSelector;
    //form element
    this._form = document.querySelector(this._formSelector);
    //form input element selector
    this._formInputSelector = settings.config.formInputSelector;
    //container selector for form
    this._itemContainerSelector = settings.config.itemContainerSelector;
    //option group element selector
    this._optGroupSelector = settings.config.optGroupSelector;
    //option element selector
    this._optionSelector = settings.config.optionSelector;

    //submit function
    this._submit = settings.submit;
    //bind submit function
    this._submitEvtHandler = this._submitEvtHandler.bind(this);
    this._handleCloseWork = settings.handleCloseWork;
  }

  //if submit evt handler
  _submitEvtHandler(evt) {
    evt.preventDefault();
    this._submit(this._getInputValues());
    this._handleCloseWork();
  }

  //get input values
  _getInputValues() {
    const inputsList = Array.from(this._form.querySelectorAll(this._formInputSelector));
    const data = {};
    inputsList.forEach(input => {
      data[input.name] = input.value;
    })
    console.log(data)
    return data;
  }

  //get opt-group element from template
  _getOptGroupTemplate() {
    const optGroup = document
      .querySelector(this._templateSelector)
      .content
      .querySelector(this._optGroupSelector)
      .cloneNode(true);
    return optGroup;
  }

  //get option element from template
  _getOptionTemplate() {
    const option = document
      .querySelector(this._templateSelector)
      .content
      .querySelector(this._optionSelector)
      .cloneNode(true);
    return option;
  }

  //upper first letter
  _toUpperCase(text) {
    return text.slice(0, 1).toUpperCase() + text.slice(1);;
  }

  //generate option group element
  _generateOptionGroup() {
    //get template select option group
    this._optGroup = this._getOptGroupTemplate();
    this._optGroup.setAttribute('label', this._toUpperCase(this._title));
    return this._optGroup;
  }

  //generate option element
  _generateOption(link) {
    //get template select option
    this._optionElement = this._getOptionTemplate();
    this._optionElement.textContent = this._toUpperCase(link);
    this._optionElement.setAttribute('value', this._toUpperCase(link));
    return this._optionElement;
  }

  //generate select option element
  _generateSelectOption(item) {
    this._options = item.itemList;
    this._title = item.title;
    //get option group element
    this._selectOptionGroup = this._generateOptionGroup();
    //add option group to form
    this._form.querySelector(this._itemContainerSelector).append(this._selectOptionGroup);
    this._formItemElement = this._options.forEach(option => {
      //get select option element
      this._selectOption = this._generateOption(option);
      //add select option element to form
      this._form.querySelector(this._itemContainerSelector).append(this._selectOption);
    });

    return this._formItemElement;
  }

  //set event listeners
  _setEventListeners() {
    this._form.addEventListener('submit', this._submitEvtHandler);
  }

  //close popup menu
  close() {
    super.close();
    this._form.reset();
  }

  //get element from array
  getElem() {
    this._data.forEach(item => {
      this._generateSelectOption(item);
      this._setEventListeners();
    })
  }
}