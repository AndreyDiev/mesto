/*

const showInputError = (formElement, inputElement, errorMessage, inputErrorClass, errorClass) => {

  const errorElement = formElement.querySelector(`.popup__${inputElement.name}-error`);

  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
};

const hideInputError = (formElement, inputElement, inputErrorClass) => {

  const errorElement = formElement.querySelector(`.popup__${inputElement.name}-error`);

  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove('popup__error_active');
  errorElement.textContent = '';
};

const isValid = (formElement, inputElement, inputErrorClass) => {
  if (!inputElement.validity.valid) {

    showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass);
    inputElement.classList.add(inputErrorClass);
  } else {

    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement, inputSelector, buttonSelector) => {

  const inputList = Array.from(formElement.querySelectorAll(inputSelector));

  const buttonElement = formElement.querySelector(buttonSelector);
  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement);

      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = (formSelector, inputSelector, buttonSelector, inactiveButtonClass, inputErrorClass, errorClass) => {

  const formList = Array.from(document.querySelectorAll(formSelector));
  console.log(formSelector);

  formList.forEach((formElement) => {

    setEventListeners(formElement);
  });
};

const hasInvalidInput = (inputList) => {

  return inputList.some((inputElement) => {

    return !inputElement.validity.valid;
  })
};

const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {

  if (hasInvalidInput(inputList)) {

    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.disabled = true;
  } else {

    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

*/
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  buttonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'form__input-error_active'
};

function showInputError(formElement, inputElement, config) {
  const errorElement = formElement.querySelector(`.popup__${inputElement.name}-error`);

  errorElement.classList.add(config.errorClass);
  errorElement.textContent = inputElement.validationMessage;
  inputElement.classList.add(config.inputErrorClass);
}

function hideInputError(formElement, inputElement, config) {
  const errorElement = formElement.querySelector(`.popup__${inputElement.name}-error`);

  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = '';
  inputElement.classList.remove(config.inputErrorClass);
}

function isValid(formElement, inputElement, config) {
  if (inputElement.validity.valid) {
    hideInputError(formElement, inputElement, config);
  }
  else {
    showInputError(formElement, inputElement, config);
  }
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {

    return !inputElement.validity.valid;
  })
}

function toggleButtonState(inputList, buttonElement, config) {
  if (hasInvalidInput(inputList)) {

    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {

    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.disabled = false;
  }
}

function setEventListeners(formElement, config) {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));

  const buttonElement = formElement.querySelector(config.buttonSelector);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, config);
      toggleButtonState(inputList, buttonElement, config);
    })
  })
}

function enableValidation (config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  formList.forEach((formElement) => {
    setEventListeners(formElement, config);
  })
}

enableValidation(validationConfig);


