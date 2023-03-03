export default class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
  }

  open() {
    this._popup.classList.add('popup_active');
    document.addEventListener('keydown', (evt) => { this._handleEscClose(evt) }  );
  }

  close() {
    this._popup.classList.remove('popup_active');
    document.addEventListener('keydown', (evt) => { this._handleEscClose(evt) }  );
  }

  _handleEscClose(evt) {
    if (evt.keyCode === 27) {
      this.close();
    };
  }

  _handleCloseByOverlay(evt) {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
  }

  setEventListeners() {
    this._closeButton = this._popup.querySelector('.popup__close');
    this._closeButton.addEventListener('click', () => { this.close() } );
    this._popup.addEventListener('click', (evt) => { this._handleCloseByOverlay(evt) } );
  }
}
