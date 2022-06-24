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
const popUpCloseBtns = document.querySelectorAll('.popup__close-button');
const placeSubmit = document.querySelector('.form__button_place');
const placeTemplate = document.querySelector('#place-item').content;
const placeImgInput = document.querySelector('#placeImg');
const placeNameInput = document.querySelector('#placeName');
const placesItems = document.querySelector('.places__items');
const editSubmit = document.querySelector('.form__button_edit')
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const imageContainer = document.querySelector('.popup__image-content');
const popupImageTitle = document.querySelector('.popup__image-title');
const overlays = document.querySelectorAll('.popup');


// **** ФУНКЦИИ ****

// открытие и закрытие попапов
// function closeByEscape(evt) {
//   if (evt.key === 'Escape') {
//     closePopup(overlay.closest('.popup'));
//   }
// }

// overlays.forEach((overlay) => {
//   overlay.addEventListener("click", () => {
//     closeByEscape();
//   });
// });

function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
}

editButton.addEventListener('click', () => {
  openPopup(popUpEdit);
});

addButton.addEventListener('click', () => {
  openPopup(popUpPlace);
});

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
}

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


// **** изменение профиля ****

const formProfile = document.forms.profile_data;
const name = formProfile.elements.name;
const description = formProfile.elements.description;

function editProfile(nameValue, descriptionValue) {
  profileName.textContent = name.value;
  profileDescription.textContent = description.value;
}

// *** валидация формы с информацией профиля

function setEditSubmitButtonState(isFormValid){
  if (isFormValid) {
    editSubmit.removeAttribute('disabled');
    editSubmit.classList.remove('form__button_disabled');
  }
  else {
    editSubmit.setAttribute('disabled', true);
    editSubmit.classList.add('form__button_disabled');
  }
}

formProfile.addEventListener('submit', (evt) => {
    evt.preventDefault();
    editProfile(name.value, description.value);
    closePopup(popUpEdit);
    setEditSubmitButtonState(false)
  });

  formProfile.addEventListener('input', (evt) => {
    const isValid = (name.value.length > 2 && description.value.length > 2) && (name.value.length < 40 && description.value.length < 200);
    setEditSubmitButtonState(isValid);
  })


  //***** функция создания карточки *****
function createPlace(title,link) {

  const placeElement = placeTemplate.querySelector('.place').cloneNode(true);   // клонирую шаблон

  placeElement.querySelector('.place__img').src = link;   // передача параметров в карточку
  placeElement.querySelector('.place__name').textContent = title;   // передача параметров в карточку
  placeElement.querySelector('.place__img').alt = title;   // передача параметров в карточку

  // лайк
  placeElement.querySelector('.place__like-button').addEventListener('click', (evt) => {
      evt.target.classList.toggle('place__like-button_active');
    });
  // удаление
  placeElement.querySelector('.place__delete-button').addEventListener('click', (evt) => {
      evt.target.closest('.place').remove();
    });
  // попап
  placeElement.querySelector('.place__img').addEventListener('click', () => {
    openPopup(popUpImage);
    imageContainer.src = link;
    popupImageTitle.textContent = title;
    popupImageTitle.alt = title;
    });

    // возвращаем карточку
  return placeElement;
  };
  //*****конец функции создания карточки*****

  // функция загрузки карточек из массива
  placesCards.forEach((item) => {
  placesItems.append(createPlace(item.title,item.link)); //обращаемся к функции. указываем откуда брать название и ссылку
});
  //*****конец функции загрузки карточек из массива*****

//добавление карточки через кнопку
document.querySelector('.form-add-place').addEventListener('submit',(evt) => {
  evt.preventDefault(); //убираем перезагрузку страницы
  placesItems.prepend(createPlace(placeNameInput.value, placeImgInput.value));
  closePopup(popUpPlace); //убираем попап
  placeImgInput.value = '';
  placeNameInput.value = '';
});







