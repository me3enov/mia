//export class to default layer
export default class Layer {
  //constructor for the "Layer" class
  constructor(settings) {
    //layer selector
    this._layerSelector = settings.selector;
    //layer element
    this._layer = document.querySelector(this._layerSelector);
    //layer element class opened
    this._layerOpenedClass = settings.openedClass;
  }

  //show layer
  open() {
    this._layer.classList.add(this._layerOpenedClass);
  }

  //close layer
  close() {
    this._layer.classList.remove(this._layerOpenedClass);
  }
}