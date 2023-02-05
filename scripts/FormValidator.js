const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  buttonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'form__input-error_active'
};

export default class FormValidator {
  constructor(config, formElement) {
    this._formEl = formElement;
    this._inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    this._buttonElement = formElement.querySelector(config.buttonSelector);
    this._errorElement = formElement.querySelector(`.popup__${inputElement.name}-error`);
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
    this._errorElement.classList.add(config.errorClass);
    this._errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(config.inputErrorClass);
  }

  _hideInputError(inputElement) {
    this._errorElement.classList.remove(config.errorClass);
    this._errorElement.textContent = '';
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

const ProfileValidator = new FormValidator(validationConfig, '.popup-profile__form');
const CreateValidator = new FormValidator(validationConfig, '.popup-create__form');
ProfileValidator.enableValidation();
CreateValidator.enableValidation();
