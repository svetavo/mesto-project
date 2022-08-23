// импорт
import '../styles/index.css';
import { enableValidation, setPlaceSubmitButtonState } from "./validate";
import { formProfile, formPlace, editButton, popUpEdit, addButton, popUpPlace, popUpCloseBtns, placeImgInput, placeNameInput, placesItems, overlays, profileName, profileDescription, profileNameInput, profileDescriptionInput, placesCards, validitySettings } from './utils';
import { createPlace } from "./card";
import { openPopup, closePopup } from './modal';

const closeImage = new URL('../images/CloseIcon.svg', import.meta.url);
const likeSymbol = new URL('../images/symbols/like.png', import.meta.url);
const likeActiveSymbol = new URL('../images/symbols/like_active.png', import.meta.url);
const pencilSymbol = new URL('../images/symbols/pencil.png', import.meta.url);
const plusSymbol = new URL('../images/symbols/plus.png', import.meta.url);
const trashSymbol = new URL('../images/symbols/trash.svg', import.meta.url);
const logoImage = new URL('../images/logo_header.svg', import.meta.url);


// слушатаели
editButton.addEventListener('click', () => {
  openPopup(popUpEdit);
});

addButton.addEventListener('click', () => {
  openPopup(popUpPlace);
});

popUpCloseBtns.forEach((button) => {
  button.addEventListener("click", () => {
      closePopup(button.closest(".popup"));
  });
});

overlays.forEach((overlay) => {
  overlay.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup')) {
      closePopup(overlay.closest(".popup"));
    };
  });
});

formProfile.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(popUpEdit);
});

formPlace.addEventListener('submit',(evt) => {
  evt.preventDefault();
  placesItems.prepend(createPlace(placeNameInput.value, placeImgInput.value));
  closePopup(popUpPlace);
  formPlace.reset();
  setPlaceSubmitButtonState(false);
});

// загрузка массива карточек
placesCards.forEach((item) => {
  placesItems.append(createPlace(item.name,item.link))
})

enableValidation(validitySettings);
