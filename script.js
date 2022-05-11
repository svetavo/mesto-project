// **** МАССИВ КАРТОЧЕК ****

const PlacesCards = [
  {title: 'Таллин',
  img: "./images/places/tallinn.jpeg"
  },
  {title: 'Лондон',
  img: "./images/places/london.jpeg"
  },
  {title: 'Барселона',
  img: "./images/places/barcelona.jpeg"
  },
  {title: 'Нью-Йорк',
  img: "./images/places/new_york.jpeg"
  },
  {title: 'Пекин',
  img: "./images/places/beijing.jpeg"
  },
  {title: 'Сидней',
  img: "./images/places/sydney.jpeg"
  }
]

// *** селекторы ***

let editButton = document.querySelector('.profile__edit-button');
let popUpEdit = document.querySelector('.popup-edit');
let popUpImage = document.querySelector('.popup__image');
let addButton = document.querySelector('.profile__add-button');
let popUpPlace = document.querySelector('.popup-add-place');
let popupCloseImage = document.querySelector('.popup__close-button-image');
let popUpCloseEdit = document.querySelector('.popup__close-button-edit');
let popUpClosePlace = document.querySelector('.popup__close-button-place');
let placeSubmit = document.querySelector('.form__button_place');
const placeTemplate = document.querySelector('#place-item').content;
const placeImgInput = document.querySelector('#placeImg');
const placeNameInput = document.querySelector('#placeName');
const placesItems = document.querySelector('.places__items');
let editSubmit = document.querySelector('.form__button_edit')
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let profileNameInput = document.querySelector('#user_name');
let profileDescriptionInput = document.querySelector('#user_description');
const popupImageContent = document.querySelector('.popup__image-content');
const popupImageTitle = document.querySelector('.popup__image-title');


// **** ФУНКЦИИ ****
// открытие и закрытие попапов

function openPopup(popupElement) {
  popupElement.classList.toggle('popup_opened');
}
editButton.addEventListener('click', function () {
  openPopup(popUpEdit);
});

addButton.addEventListener('click', function () {
  openPopup(popUpPlace);
});

// popupClose.addEventListener('click', function () {
//   popupClose.closest('.popup').classList.toggle('popup_opened');
// });

function closePopupEdit() {
popUpEdit.classList.toggle('popup_opened');
}

popUpCloseEdit.addEventListener('click', closePopupEdit);

function closePopupPlace() {
popUpPlace.classList.remove('popup_opened');
}

popUpClosePlace.addEventListener('click', closePopupPlace);

function closePopupImage() {
popUpImage.classList.toggle('popup_opened');
}

popupCloseImage.addEventListener('click', closePopupImage);


// изменение профиля
editSubmit.addEventListener('click', function () {
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  popUpEdit.classList.remove('popup_opened');
  });


// добавление места
placeSubmit.addEventListener('click', function () {
  const placeElement = placeTemplate.querySelector('.place').cloneNode(true);

  placeElement.querySelector('.place__img').src = placeImgInput.value;
  placeElement.querySelector('.place__name').textContent = placeNameInput.value;
  placeElement.querySelector('.place__img').alt = placeNameInput.value;

  popUpPlace.classList.remove('popup_opened');
  placesItems.prepend(placeElement);
  placeImgInput.value = '';
  placeNameInput.value = '';

  placeElement.querySelector('.place__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('place__like-button_active');
    });

  placeElement.querySelector('.place__delete-button').addEventListener('click', function (evt) {
    evt.target.closest('.place').remove();
  });

  placeElement.querySelector('.place__img').addEventListener('click', function (evt) {
    popUpImage.classList.toggle('popup_opened');
    popupImageContent.src = item.img;
    popupImageTitle.textContent = item.title;
  });
  });

// загрузка начальных карточек
PlacesCards.forEach(function (item) {
  const placeElement = placeTemplate.querySelector('.place').cloneNode(true);

  placeElement.querySelector('.place__img').src = item.img;
  placeElement.querySelector('.place__name').textContent = item.title;
  placeElement.querySelector('.place__img').alt = item.title;


  placeElement.querySelector('.place__like-button').addEventListener('click', function (evt) {
  evt.target.classList.toggle('place__like-button_active');
});

placeElement.querySelector('.place__delete-button').addEventListener('click', function (evt) {
  evt.target.closest('.place').remove();
});

placeElement.querySelector('.place__img').addEventListener('click', function (evt) {
  popUpImage.classList.toggle('popup_opened');
  popupImageContent.src = item.img;
  popupImageTitle.textContent = item.title;
});


  placesItems.append(placeElement);
  placesItems.append(placeElement);
  placesItems.append(placeElement);
  placesItems.append(placeElement);
  placesItems.append(placeElement);
  placesItems.append(placeElement);
});



