import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmit) {
    super(popupSelector);
    this._formSubmitCallback = formSubmit;

    this._popupForm = this._popup.querySelector('.popup__form');
    this._inputList = this._popupForm.querySelectorAll('.popup__input');
  }

  _getInputValues() {
    this._inputValues = {};
    this._inputList.forEach(inputElem => {
      this._inputValues[inputElem.name] = inputElem.value;
    });

    return this._inputValues;
  }

  setEventListeners() {
    super.setEventListeners();

    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();

      this._formSubmitCallback(this._getInputValues());
    })
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
}
