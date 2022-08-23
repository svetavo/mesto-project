import {validitySettings, placeSubmit} from './utils';

export function setPlaceSubmitButtonState(isValid){
  if (isValid) {
    placeSubmit.removeAttribute('disabled');
    placeSubmit.classList.remove('form__button_disabled');
  }
  else {
    placeSubmit.setAttribute('disabled', true);
    placeSubmit.classList.add('form__button_disabled');
  }
};

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(validitySettings.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validitySettings.errorClass);
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(validitySettings.inputErrorClass);
  errorElement.classList.remove(validitySettings.errorClass);
  errorElement.textContent = '';
};

const isValid = (formElement, inputElement) => {
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
    inputElement.setCustomValidity("");
  }
  
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(validitySettings.inputSelector));
  const buttonElement = formElement.querySelector(validitySettings.submitButtonSelector);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
     isValid(formElement, inputElement);
     toggleButtonState(inputList, buttonElement);
    });
  });
};

// состояние кнопки

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(validitySettings.inactiveButtonClass);
    // buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(validitySettings.inactiveButtonClass);
    // buttonElement.removeAttribute('disabled');
  }
};

export const enableValidation = () => {
const formList = Array.from(document.querySelectorAll(validitySettings.formSelector));
  formList.forEach((formElement) => {
      setEventListeners(formElement);
  });
}
