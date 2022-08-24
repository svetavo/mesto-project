// импорт
import '../styles/index.css';
import { enableValidation, toggleButtonState } from "./validate";
import { formProfile, formPlace, editButton, popUpEdit, addButton, popUpPlace, placeImgInput, placeNameInput, placesItems, profileName, profileDescription, profileNameInput, profileDescriptionInput, placesCards, validitySettings, popups } from './utils';
import { createPlace } from "./card";
import { openPopup, closePopup} from './modal';

// изображения
// const closeImage = new URL('../images/CloseIcon.svg', import.meta.url);
const likeSymbol = new URL('../images/symbols/like.png', import.meta.url);
const likeActiveSymbol = new URL('../images/symbols/like_active.png', import.meta.url);
const pencilSymbol = new URL('../images/symbols/pencil.png', import.meta.url);
const plusSymbol = new URL('../images/symbols/plus.png', import.meta.url);
const trashSymbol = new URL('../images/symbols/trash.svg', import.meta.url);
const logoImage = new URL('../images/logo_header.svg', import.meta.url);
const CloseSymbol = new URL('../images/closeicon.svg', import.meta.url);

// СЛУШАТЕЛИ

// закрытие крестиком и кликом на оверлей
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
          closePopup(popup)
      };
      if (evt.target.classList.contains('popup__close-button')) {
        closePopup(popup)
      };
  });
});

// редактировать профиль
editButton.addEventListener('click', () => {
  openPopup(popUpEdit);
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
});

formProfile.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(popUpEdit);
});

// добавить место
addButton.addEventListener('click', () => {
  openPopup(popUpPlace);
});

formPlace.addEventListener('submit',(evt) => {
  evt.preventDefault();
  placesItems.prepend(createPlace(placeNameInput.value, placeImgInput.value));
  closePopup(popUpPlace);
  formPlace.reset();
  toggleButtonState(false);
});

// загрузка массива карточек
placesCards.forEach((item) => {
  placesItems.append(createPlace(item.name,item.link));
});

enableValidation({
formSelector: '.form',
inputSelector: '.form__input',
submitButtonSelector: '.form__button',
inactiveButtonClass: 'form__button_disabled',
inputErrorClass: 'form__input_type_error',
errorClass: 'form__input-error_active'
});
