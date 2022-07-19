import './styles/index.css';
const closeImage = new URL('./images/CloseIcon.svg', import.meta.url);
const likeSymbol = new URL('./images/symbols/like.png', import.meta.url);
const likeActiveSymbol = new URL('./images/symbols/like_active.png', import.meta.url);
const pencilSymbol = new URL('./images/symbols/pencil.png', import.meta.url);
const plusSymbol = new URL('./images/symbols/plus.png', import.meta.url);
const trashSymbol = new URL('./images/symbols/trash.svg', import.meta.url);
const logoImage = new URL('./images/logo_header.svg', import.meta.url);



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

// ВАЛИДАЦИЯ

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('form__input_type_error');
  errorElement.textContent = errorMessage;
  // errorElement.classList.add('form__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('form__input_type_error');
  // errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = '';
};

const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  const buttonElement = formElement.querySelector('.form__button');

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
     isValid(formElement, inputElement);
     toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    });
        setEventListeners(formElement);
  });
}

enableValidation();

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

// **** изменение профиля ****

const formProfile = document.forms.profile_data;
const name = formProfile.elements.name;
const description = formProfile.elements.description;

function editProfile(nameValue, descriptionValue) {
  profileName.textContent = name.value;
  profileDescription.textContent = description.value;
}

formProfile.addEventListener('submit', (evt) => {
    evt.preventDefault();
    editProfile(name.value, description.value);
    closePopup(popUpEdit);
  });

//   //***** функция создания карточки *****
function createPlace(title,link) {

  const placeElement = placeTemplate.querySelector('.place').cloneNode(true);   // клонирую шаблон

  placeElement.querySelector('.place__img').src = link;   // передача параметров в карточку
  placeElement.querySelector('.place__name').textContent = title;   // передача параметров в карточку
  placeElement.querySelector('.place__img').alt = title;   // передача параметров в карточку

//   лайк
  placeElement.querySelector('.place__like-button').addEventListener('click', (evt) => {
      evt.target.classList.toggle('place__like-button_active');
    });
//   удаление
  placeElement.querySelector('.place__delete-button').addEventListener('click', (evt) => {
      evt.target.closest('.place').remove();
    });
//   попап
  placeElement.querySelector('.place__img').addEventListener('click', () => {
    openPopup(popUpImage);
    imageContainer.src = link;
    popupImageTitle.textContent = title;
    popupImageTitle.alt = title;
    });

//  возвращаем карточку
  return placeElement;
  };
//   //*****конец функции создания карточки*****

  // функция загрузки карточек из массива
  placesCards.forEach((item) => {
  placesItems.append(createPlace(item.title,item.link)); //обращаемся к функции. указываем откуда брать название и ссылку
});
//   //*****конец функции загрузки карточек из массива*****

// //добавление карточки через кнопку

const formPlace = document.forms.new_place;

function setPlaceSubmitButtonState(isFormValid){
  if (isFormValid) {
    placeSubmit.removeAttribute('disabled');
    placeSubmit.classList.remove('form__button_disabled');
  }
  else {
    placeSubmit.setAttribute('disabled', true);
    placeSubmit.classList.add('form__button_disabled');
  }
}

formPlace.addEventListener('submit',(evt) => {
  evt.preventDefault(); //убираем перезагрузку страницы
  placesItems.prepend(createPlace(placeNameInput.value, placeImgInput.value));
  closePopup(popUpPlace); //убираем попап
  formPlace.reset();
  setPlaceSubmitButtonState(false);
});


