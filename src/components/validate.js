import { toggleButtonState } from "./utils";

// ВАЛИДАЦИЯ

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('form__input_type_error');
  errorElement.textContent = errorMessage;
  // errorElement.classList.add('form__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('form__input_type_error');
  // errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = '';
};

const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  const buttonElement = formElement.querySelector('.form__button');

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
     isValid(formElement, inputElement);
     toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    });
      setEventListeners(formElement);
  });}

export {showInputError, hideInputError, isValid, setEventListeners, enableValidation }
