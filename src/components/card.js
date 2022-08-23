import { openPopup } from './modal';
import { imageContainer, popupImageTitle, placeTemplate, popUpImage } from './utils';

//  функция создания карточки
export function createPlace(title,link) {

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
  // возвращаем карточку
return placeElement;
};
