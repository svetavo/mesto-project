
// *** селекторы ***
export const editButton = document.querySelector('.profile__edit-button');
export const popUpEdit = document.querySelector('.popup-edit');
export const addButton = document.querySelector('.profile__add-button');
export const popUpPlace = document.querySelector('.popup-add-place');
export const placeSubmit = document.querySelector('.form__button_place');
export const placesItems = document.querySelector('.places__items');
export const popups = document.querySelectorAll('.popup');
export const formPlace = document.forms.new_place;
export const profileName = document.querySelector('.profile__name');
export const profileDescription = document.querySelector('.profile__description');
export const profileNameInput = document.querySelector('#user_name');
export const profileDescriptionInput = document.querySelector('#user_description');

// переменные для валидации
export const formProfile = document.forms.profile_data;
export const name = formProfile.elements.name;
export const description = formProfile.elements.description;
// export const validitySettings = {
//   formSelector: '.form',
//   inputSelector: '.form__input',
//   submitButtonSelector: '.form__button',
//   inactiveButtonClass: 'form__button_disabled',
//   inputErrorClass: 'form__input_type_error',
//   errorClass: 'form__input-error_active'
// };

//изображения
const barcelona = new URL('../images/places/barcelona.jpeg', import.meta.url);
const beijing = new URL('../images/places/beijing.jpeg', import.meta.url);
const london = new URL('../images/places/london.jpeg', import.meta.url);
const newyork = new URL('../images/places/new_york.jpeg', import.meta.url);
const sydney = new URL('../images/places/sydney.jpeg', import.meta.url);
const tallin = new URL('../images/places/tallinn.jpeg', import.meta.url)

export const placesCards = [
  { name: 'Барселона', link: barcelona },
  { name: 'Пекин', link: beijing },
  { name: 'Лондон', link: london },
  { name: 'Нью-Йорк', link: newyork },
  { name: 'Сидней', link: sydney },
  { name: 'Таллин', link: tallin },
];

// переменные карточка
export const placeTemplate = document.querySelector('#place-item').content;
export const placeImgInput = document.querySelector('#placeImg');
export const placeNameInput = document.querySelector('#placeName');
export const popUpImage = document.querySelector('.popup__image');
export const imageContainer = document.querySelector('.popup__image-content');
export const popupImageTitle = document.querySelector('.popup__image-title');
