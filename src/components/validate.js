const showInputError = (formElement, inputElement, errorMessage, validitySettings) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(validitySettings.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validitySettings.errorClass);
};

const hideInputError = (formElement, inputElement, validitySettings) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(validitySettings.inputErrorClass);
  errorElement.classList.remove(validitySettings.errorClass);
  errorElement.textContent = '';
};

const isValid = (formElement, inputElement, validitySettings) => {
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
    inputElement.setCustomValidity("");
  }

  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, validitySettings);
  } else {
    hideInputError(formElement, inputElement, validitySettings);
  }
};


// состояние кнопки

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

export const toggleButtonState = (inputList, buttonElement, validitySettings) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(validitySettings.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(validitySettings.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
};

const setEventListeners = (formElement, validitySettings) => {
  const inputList = Array.from(formElement.querySelectorAll(validitySettings.inputSelector));
  const buttonElement = formElement.querySelector(validitySettings.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, validitySettings);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
     isValid(formElement, inputElement, validitySettings);
     toggleButtonState(inputList, buttonElement, validitySettings);
    });
  });
};


export const enableValidation = (validitySettings) => {
const formList = Array.from(document.querySelectorAll(validitySettings.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
      setEventListeners(formElement, validitySettings);
  });
}

