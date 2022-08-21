import { placeSubmit } from "./index.js";

const formProfile = document.forms.profile_data;
const name = formProfile.elements.name;
const description = formProfile.elements.description;
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const avatar = document.querySelector('.profile__pic');

// состояние кнопки

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('form__button_disabled');
  } else {
    buttonElement.classList.remove('form__button_disabled');
  }
};

function setPlaceSubmitButtonState(isFormValid){
  if (isFormValid) {
    placeSubmit.removeAttribute('disabled');
    placeSubmit.classList.remove('form__button_disabled');
  }
  else {
    placeSubmit.setAttribute('disabled', true);
    placeSubmit.classList.add('form__button_disabled');
  }
};

//  изменение профиля

function editProfile(nameValue, descriptionValue) {
  profileName.textContent = name.value;
  profileDescription.textContent = description.value;
}

export { hasInvalidInput, toggleButtonState, editProfile, setPlaceSubmitButtonState, formProfile, name, description, profileName, profileDescription, avatar };
