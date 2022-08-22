export const validateSettings = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active"
};

// ВАЛИДАЦИЯ

const showInputError = (formElement, inputElement, errorMessage, validateSettings) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(validateSettings.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validateSettings.errorClass);
};

const hideInputError = (formElement, inputElement, validateSettings) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(validateSettings.inputErrorClass);
  errorElement.classList.remove(validateSettings.errorClass);
  errorElement.textContent = '';
};

const isValid = (formElement, inputElement, validateSettings) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, validateSettings);
  } else {
    hideInputError(formElement, inputElement, validateSettings);
  }
};

const setEventListeners = (formElement, validateSettings) => {
  const inputList = Array.from(formElement.querySelectorAll(validateSettings.inputSelector));
  const buttonElement = formElement.querySelector(validateSettings.submitButtonSelector);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
     isValid(formElement, inputElement, validateSettings);
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

const toggleButtonState = (inputList, buttonElement, validateSettings) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(validateSettings.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(validateSettings.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
};

export const enableValidation = (validateSettings) => {
const formList = Array.from(document.querySelectorAll(validateSettings.formSelector));
  formList.forEach((formElement) => {
      setEventListeners(formElement, validateSettings);
  });}
