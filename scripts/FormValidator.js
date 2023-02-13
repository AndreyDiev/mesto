export default class FormValidator {
  constructor(config, formElement) {
    this._formEl = formElement;
    this._inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    this._buttonElement = formElement.querySelector(config.buttonSelector);
    this._errorClass = config.errorClass;
    this._inactiveButton = config.inactiveButtonClass;
  }

  enableValidation() {
    this._setEventListeners();
  }

  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState();
      });
    });
  }

  _isValid(inputElement) {
    const errorElement = this._formEl.querySelector(`.popup__${inputElement.name}-error`);

    if (inputElement.validity.valid) {
      this._hideInputError(inputElement, errorElement)
    } else {
      this._showInputError(inputElement, errorElement);
    }
  }

  _showInputError(inputElement, errorElement) {
    errorElement.classList.add(this._errorClass);
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement, errorElement) {
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
    inputElement.classList.remove(this._errorClass);
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      //this._buttonElement.classList.add('popup__submit_disabled');
      //this._buttonElement.disabled = true;
      this.disablingButton(this._buttonElement);
    } else {
      this._buttonElement.classList.remove(this._inactiveButton);
      this._buttonElement.disabled = false;
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {

      return !inputElement.validity.valid;
    })
  }

  disablingButton(button) {
    button.classList.add('popup__submit_disabled');
    button.disabled = true;
  }
}
