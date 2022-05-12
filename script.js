// **** МАССИВ КАРТОЧЕК ****

const placesCards = [
  {
    title: 'Таллин',
    link: "./images/places/tallinn.jpeg"
  },
  {
    title: 'Лондон',
    link: "./images/places/london.jpeg"
  },
  {
    title: 'Барселона',
    link: "./images/places/barcelona.jpeg"
  },
  {
    title: 'Нью-Йорк',
    link: "./images/places/new_york.jpeg"
  },
  {
    title: 'Пекин',
    link: "./images/places/beijing.jpeg"
  },
  {
    title: 'Сидней',
    link: "./images/places/sydney.jpeg"
  }
]

// *** селекторы ***

const editButton = document.querySelector('.profile__edit-button');
const popUpEdit = document.querySelector('.popup-edit');
const popUpImage = document.querySelector('.popup__image');
const addButton = document.querySelector('.profile__add-button');
const popUpPlace = document.querySelector('.popup-add-place');
const popupCloseImage = document.querySelector('.popup__close-button-image');
const popUpCloseEdit = document.querySelector('.popup__close-button-edit');
const popUpClosePlace = document.querySelector('.popup__close-button-place');
const placeSubmit = document.querySelector('.form__button_place');
const placeTemplate = document.querySelector('#place-item').content;
const placeImgInput = document.querySelector('#placeImg');
const placeNameInput = document.querySelector('#placeName');
const placesItems = document.querySelector('.places__items');
const editSubmit = document.querySelector('.form__button_edit')
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let profileNameInput = document.querySelector('#user_name');
let profileDescriptionInput = document.querySelector('#user_description');
const popupImageContent = document.querySelector('.popup__image-content');
const popupImageTitle = document.querySelector('.popup__image-title');


// **** ФУНКЦИИ ****
// открытие и закрытие попапов

function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
}
editButton.addEventListener('click', function () {
  openPopup(popUpEdit);
});

addButton.addEventListener('click', function () {
  openPopup(popUpPlace);
});


function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
}

popUpCloseEdit.addEventListener('click', function () {
  closePopup(popUpEdit);
});

popUpClosePlace.addEventListener('click', function () {
  closePopup(popUpPlace);
});

popupCloseImage.addEventListener('click', function () {
  closePopup(popUpImage);
});
renderCards
// изменение профиля
document.querySelector('.form-edit').addEventListener('submit', function (evt) {
  evt.preventDefault();

  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  popUpEdit.classList.remove('popup_opened');
});

  //*****функция создания карточки*****
function createPlace(title,link) {

  const placeElement = placeTemplate.querySelector('.place').cloneNode(true);   // клонирую шаблон

  placeElement.querySelector('.place__img').src = link;   // передача параметров в карточку
  placeElement.querySelector('.place__name').textContent = title;   // передача параметров в карточку
  placeElement.querySelector('.place__img').alt = title;   // передача параметров в карточку

  // вешаем прослушиватели
  placeElement.querySelector('.place__like-button').addEventListener('click', placeLike);
  placeElement.querySelector('.place__delete-button').addEventListener('click', placeDelete);
  placeElement.querySelector('.place__img').addEventListener('click', placeImagePopup);

  // возвращаем карточку
  return placeElement;
  };
  //*****конец функции создания карточки*****


  // функция загрузки карточек из массива
function renderCards() {
  placesCards.forEach(function (item) {  //каждй элемент массива создается и добавляется в грид контейнер
  placesItems.append(createPlace(item.title,item.link)); //обращаемся к функции. указываем откуда брать название и ссылку
});
};
  //*****конец функции загрузки карточек из массива*****


//функция добавления карточек по кнопке
  function addCards() {
    placesItems.prepend(createPlace(placeNameInput.value, placeImgInput.value)); //обращаемся к фунции и добавляем карточки в начало списка
  }
//*****конец функции добавления карточек по кнопке*****

//вешаем прослушиватель на кнопку СОЗДАТЬ место
document.querySelector('.form-add-place').addEventListener('submit', function (evt) {
  evt.preventDefault(); //убираем перезагрузку страницы
  popUpPlace.classList.remove('popup_opened'); //убираем попап
});


// лайк делит попап
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
  popupImageContent.alt = item.title;
});


// добавление карточки через плюс
// popUpPlace.classList.remove('popup_opened');
// placesItems.prepend(placeElement);
// placeImgInput.value = '';
// placeNameInput.value = '';

// placeElement.querySelector('.place__img').src = placeImgInput.value;
// placeElement.querySelector('.place__name').textContent = placeNameInput.value;
// placeElement.querySelector('.place__img').alt = placeNameInput.value;
