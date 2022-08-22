import { openPopup, closePopup } from "./modal";

// константы
const placeTemplate = document.querySelector('#place-item').content;
const placeImgInput = document.querySelector('#placeImg');
const placeNameInput = document.querySelector('#placeName');
const placeLikesCounter = document.querySelector('.place__like-counter');
const popUpImage = document.querySelector('.popup__image');
const imageContainer = document.querySelector('.popup__image-content');
const popupImageTitle = document.querySelector('.popup__image-title');

//  функция создания карточки
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
  return placeElement;
  };

export { createPlace, placeTemplate, placeImgInput, placeNameInput };
