export class Header{
  //constructor for the "Header" class
  constructor(settings) {
    //handle click function init
    this._handleOpenWork = settings.handleOpenWork;
    this._handleOpenMenu = settings.handleOpenMenu;
    this._handleCloseWork = settings.handleCloseWork;
    this._handleCloseMenu = settings.handleCloseMenu;

    //header element selector
    this._headerSelector = settings.configHeader.headerSelector;
    //header element
    this._headerItem = document.querySelector(this._headerSelector);

    //text btn element selector
    this._btnTextSelector = settings.configHeader.btnTextSelector;

    //BTN WORK INIT START
    //btn work element selector
    this._btnWorkSelector = settings.configHeader.btnWorkSelector;
    //btn work element
    this._btnWorkItem = this._headerItem.querySelector(this._btnWorkSelector);

    //text btn work data
    this._workClosed = settings.workBtnTextValue.workClosed;
    this._workOpened = settings.workBtnTextValue.workOpened;

    //text btn work element
    this._btnTextWork = this._btnWorkItem.querySelector(this._btnTextSelector);

    //popup work opened class
    this._workOpenedClass = settings.workOpenedClass;

    //bind handle click toggle work function
    this._toggleWorkPopup = this._toggleWorkPopup.bind(this);
    //bind handle click open work function
    this.openWork = this.openWork.bind(this);
    //bind by "Esc" close work popup function
    this._handleEscWorkClose = this._handleEscWorkClose.bind(this);
    //BTN WORK INIT END

    //BTN MENU INIT START
    //btn menu element selector
    this._btnMenuSelector = settings.configHeader.btnMenuSelector;
    //btn menu element
    this._btnMenuItem = this._headerItem.querySelector(this._btnMenuSelector);

    //text btn menu data
    this._menuClosed = settings.menuBtnTextValue.menuClosed;
    this._menuOpened = settings.menuBtnTextValue.menuOpened;

    //text btn menu element
    this._btnTextMenu = this._btnMenuItem.querySelector(this._btnTextSelector);

    //popup menu opened class
    this._menuOpenedClass = settings.menuOpenedClass;

    //bind handle click toggle menu function
    this._toggleMenuPopup = this._toggleMenuPopup.bind(this);
    //bind by "Esc" close menu popup function
    this._handleEscMenuClose = this._handleEscMenuClose.bind(this);
    //BTN MENU INIT END
  }

  //FUNCTIONS BTN WORK INIT START
  //toggle work popup state
  _toggleWorkPopup() {
    this._isOpened = document.querySelector(`.${this._workOpenedClass}`);
    this._isOpened ? this._closeWork() : this.openWork();
  }

  //open work popup
  openWork() {
    this._handleOpenWork();
    this._btnTextWork.textContent = this._workOpened;
    document.addEventListener('keydown', this._handleEscWorkClose);
    this._closeMenu()
  }

  //close work popup
  _closeWork() {
    this._handleCloseWork();
    this._btnTextWork.textContent = this._workClosed;
    document.removeEventListener('keydown', this._handleEscWorkClose);
  }

  //close popup work by "Esc"
  _handleEscWorkClose(evt) {
    if (evt.key === "Escape" || evt.key === "Esc") {
      this._closeWork();
    }
  }
  //FUNCTIONS BTN WORK INIT END

  //FUNCTIONS BTN WORK INIT START
  //toggle work popup state
  _toggleMenuPopup() {
    this._isOpened = document.querySelector(`.${this._menuOpenedClass}`);
    this._isOpened ? this._closeMenu() : this._openMenu();
  }

  //open menu popup
  _openMenu() {
    this._handleOpenMenu();
    this._btnTextMenu.textContent = this._menuOpened;
    document.addEventListener('keydown', this._handleEscMenuClose);
  }

  //close menu popup
  _closeMenu() {
    this._handleCloseMenu();
    this._btnTextMenu.textContent = this._menuClosed;
    document.removeEventListener('keydown', this._handleEscMenuClose);
  }
  //close popup menu by "Esc"
  _handleEscMenuClose(evt) {
    if (evt.key === "Escape" || evt.key === "Esc") {
      this._closeMenu();
    }
  }

  //set event listeners
  setEventListeners() {
    //set event listener to button open work
    this._btnWorkItem.addEventListener('click', this._toggleWorkPopup);

    //set event listener to button open menu
    this._btnMenuItem.addEventListener('click', this._toggleMenuPopup);
  }
}