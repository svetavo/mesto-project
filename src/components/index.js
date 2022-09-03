// импорт
import '../styles/index.css';
import { enableValidation } from "./validate";
import { avatarUrl, avatarButton, formProfile, popUpAvatar, formPlace, editButton, popUpEdit, addButton, popUpPlace, placeImgInput, placeNameInput, placesItems, profileName, profileDescription, profileNameInput, profileDescriptionInput, popups, formAvatar, avatar, renderLoading, placeSubmit } from './utils';
import { createPlace } from "./card";
import { openPopup, closePopup} from './modal';
import { renderCards, renderInfo, newInfo, createCard, avatarUpdate, likeCardRemove } from './api';

// изображения
const likeSymbol = new URL('../images/symbols/like.png', import.meta.url);
const likeActiveSymbol = new URL('../images/symbols/like_active.png', import.meta.url);
const pencilSymbol = new URL('../images/symbols/pencil.png', import.meta.url);
const plusSymbol = new URL('../images/symbols/plus.png', import.meta.url);
const trashSymbol = new URL('../images/symbols/trash.svg', import.meta.url);
const logoImage = new URL('../images/logo_header.svg', import.meta.url);
const closeImage = new URL('../images/closeicon.svg', import.meta.url);

export let userId = '';

Promise.all([renderInfo(), renderCards()])
  .then(([userData, data]) => {
    profileName.textContent = userData.name;
    profileDescription.textContent = userData.about;
    avatar.src = userData.avatar;
    userId = userData._id;
    renderInitialCards(data);
  })
  .catch((error) => console.log(error));

// загрузка массива карточек
function renderInitialCards(data) {
  data.forEach((item) => {
      placesItems.append(createPlace(item.name, item.link, item.likes, item._id, item.owner, userId ));
    });
  }

enableValidation({
formSelector: '.form',
inputSelector: '.form__input',
submitButtonSelector: '.form__button',
inactiveButtonClass: 'form__button_disabled',
inputErrorClass: 'form__input_type_error',
errorClass: 'form__input-error_active'
});


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
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openPopup(popUpEdit);
});

formProfile.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  newInfo(profileNameInput.value, profileDescriptionInput.value)
  .then(() => {
    renderLoading(true);
    closePopup(popUpEdit)
  })
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    renderLoading(false);
  })
});

// редактировать аватар
avatarButton.addEventListener('click', () => {
  avatar.value = avatarUrl.src;
  openPopup(popUpAvatar);
})

formAvatar.addEventListener('submit', (evt) => {
  evt.preventDefault();
  avatarUpdate(avatarUrl.value)
  .then(() => {
    renderLoading(true);
    closePopup(popUpAvatar)
  })
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    renderLoading(false);
  })
})

// добавить место
addButton.addEventListener('click', () => {
  formPlace.reset();
  openPopup(popUpPlace);
});

formPlace.addEventListener('submit',(evt) => {
  evt.preventDefault();
  createCard(placeNameInput.value, placeImgInput.value)
  .then((result) => {
    renderLoading(true);
    const myCard = createPlace(result.name, result.link, result.likes, result._id, result.owner, userId)
    placesItems.prepend(myCard);
    formPlace.reset();
    placeSubmit.classList.add('form__button_disabled');
    placeSubmit.disabled = true;
    closePopup(popUpPlace);
  })
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    renderLoading(false);
  })
});

