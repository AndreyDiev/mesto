export default class FormValidator {
  constructor(config, formElement) {
    this._formEl = formElement;
    this._inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    this._buttonElement = formElement.querySelector(config.buttonSelector);
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
    if (inputElement.validity.valid) {
      this._hideInputError()
    } else {
      this._showInputError();
    }
  }

  _showInputError(inputElement) {
    const errorElement = this._formEl.querySelector(`.popup__${inputElement.name}-error`);

    errorElement.classList.add(config.errorClass);
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(config.inputErrorClass);
  }

  _hideInputError(inputElement, errorElement) {
    errorElement.classList.remove(config.errorClass);
    errorElement.textContent = '';
    inputElement.classList.remove(config.inputErrorClass);
  }

  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {

      disablingButton(this._buttonElement);
    } else {

      this._buttonElement.classList.remove(config.inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {

      return !inputElement.validity.valid;
    })
  }

  _disablingButton(button) {
    button.classList.add('popup__submit_disabled');
    button.disabled = true;
  }
}
