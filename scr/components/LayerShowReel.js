//import default class
import Layer from './Layer.js';

export class LayerShowReel extends Layer {
  //constructor for the "LayerShowReel" class
  constructor(settings) {
    //default settings
    super(settings);

    //video element selector
    this._videoSelector = settings.selector;
    //video element
    this._video = document.querySelector(this._videoSelector);

    //play video button selector
    this._playBtnSelector = settings.playBtnSelector;
    //play video button element
    this._playBtn = document.querySelector(this._playBtnSelector);
    //play video button state active class
    this._playBtnActiveClass = settings.playBtnActiveClass;
    //play video button bind this
    this.togglePlay = this.togglePlay.bind(this);

    //mute video button selector
    this._muteBtnSelector = settings.muteBtnSelector;
    //mute video button element
    this._muteBtn = document.querySelector(this._muteBtnSelector);
    //mute video button state active class
    this._muteBtnActiveClass = settings.muteBtnActiveClass;
    //mute video button bind this
    this.toggleMute = this.toggleMute.bind(this);
  }

  //toggle state play
  togglePlay() {
    this._playBtn.classList.toggle(this._playBtnActiveClass);
    return this._video.paused ? this._video.play() : this._video.pause();
  }

  //toggle state mute
  toggleMute() {
    this._muteBtn.classList.toggle(this._muteBtnActiveClass);
    return this._video.muted ? this._video.muted = false : this._video.muted = true;
  }

  //set event listeners to video buttons
  setEventListeners() {
    this._playBtn.addEventListener('click', this.togglePlay);
    this._muteBtn.addEventListener('click', this.toggleMute);
  }
}