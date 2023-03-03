import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.popupTitle = this._popup.querySelector('.popup-image__title');
    this.popupPhoto = this._popup.querySelector('.popup-image__photo');
  }

  open(link, place) {
    this.popupPhoto.src = link;
    this.popupPhoto.alt = place;
    this.popupTitle.textContent = place;

    super.open();
  }
}
