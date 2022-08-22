// импорт
import '../styles/index.css';
import { enableValidation, validateSettings } from "./validate";
import { editProfile, setPlaceSubmitButtonState, formProfile, name, description, } from './utils';
import { createPlace, placeImgInput, placeNameInput} from "./card";
import { openPopup, closePopup } from './modal';
import { newInfo, newCard, renderCards, renderInfo } from './api';

//изображения
const closeImage = new URL('../images/CloseIcon.svg', import.meta.url);
const likeSymbol = new URL('../images/symbols/like.png', import.meta.url);
const likeActiveSymbol = new URL('../images/symbols/like_active.png', import.meta.url);
const pencilSymbol = new URL('../images/symbols/pencil.png', import.meta.url);
const plusSymbol = new URL('../images/symbols/plus.png', import.meta.url);
const trashSymbol = new URL('../images/symbols/trash.svg', import.meta.url);
const logoImage = new URL('../images/logo_header.svg', import.meta.url);


// *** селекторы ***
const editButton = document.querySelector('.profile__edit-button');
const popUpEdit = document.querySelector('.popup-edit');
const addButton = document.querySelector('.profile__add-button');
const popUpPlace = document.querySelector('.popup-add-place');
const popUpCloseBtns = document.querySelectorAll('.popup__close-button');
export const placeSubmit = document.querySelector('.form__button_place');
export const placesItems = document.querySelector('.places__items');
const editSubmit = document.querySelector('.form__button_edit')
const overlays = document.querySelectorAll('.popup');
const formPlace = document.forms.new_place;



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
  newInfo();
  editProfile(name.value, description.value);
  closePopup(popUpEdit);
});

formPlace.addEventListener('submit',(evt) => {
  evt.preventDefault();
  newCard();
  placesItems.prepend(createPlace(placeNameInput.value, placeImgInput.value));
  closePopup(popUpPlace);
  formPlace.reset();
  setPlaceSubmitButtonState(false);
});

renderCards();
renderInfo();
enableValidation(validateSettings);
