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
    this._config = config;
    this._formElement = formElement;
  }

  enableValidation(config, formElement) {
    this._setEventListeners(config, formElement);
  }

  _setEventListeners(config, formElement) {
    const inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));

    const buttonElement = this._formElement.querySelector(this._config.buttonSelector);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(formElement, inputElement, config);
        this._toggleButtonState(inputList, buttonElement, config);
      })
    })
  }

  _toggleButtonState(inputList, buttonElement, config) {
    if (this._hasInvalidInput(inputList)) {

      this._disablingButton(buttonElement);
    } else {

      buttonElement.classList.remove(this._config.inactiveButtonClass);
      buttonElement.disabled = false;
    }
  }

  _disablingButton(button) {
    utton.classList.add('popup__submit_disabled');
    button.disabled = true;
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {

      return !inputElement.validity.valid;
    })
  }

  _isValid(formElement, inputElement, config) {
    if (inputElement.validity.valid) {
      this._hideInputError(this._formElement, inputElement, this._config);
    }
    else {
      this._showInputError(this._formElement, inputElement, this._config);
    }
  }

  _hideInputError(formElement, inputElement, config) {
    const errorElement = this._formElement.querySelector(`.popup__${inputElement.name}-error`);

    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = '';
    inputElement.classList.remove(this._config.inputErrorClass);
  }

  _showInputError(formElement, inputElement, config) {
    const errorElement = this._formElement.querySelector(`.popup__${inputElement.name}-error`);

    errorElement.classList.add(this._config.errorClass);
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(this._config.inputErrorClass);
  }
}

const ProfileValidator = new FormValidator(validationConfig, '.popup-profile__form');
const CreateValidator = new FormValidator(validationConfig, '.popup-create__form');
ProfileValidator.enableValidation();
CreateValidator.enableValidation();
