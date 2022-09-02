import { cardDelete, likeCard, likeCardRemove, serverMe } from './api';
import { openPopup } from './modal';
import { imageContainer, popupImageTitle, placeTemplate, popUpImage } from './utils';


//  функция создания карточки
export function createPlace(name, link, likes, _id, owner) {

  const placeElement = placeTemplate.querySelector('.place').cloneNode(true);   // клонирую шаблон
  const cardImage = placeElement.querySelector('.place__img');
  const likeCounter = placeElement.querySelector('.place__like-counter');
  const likeBtn = placeElement.querySelector('.place__like-button');

  cardImage.src = link;   // передача параметров в карточку
  placeElement.querySelector('.place__name').textContent = name;   // передача параметров в карточку
  cardImage.alt = name;   // передача параметров в карточку
  likeCounter.textContent = likes.length;

//   лайк
likeBtn.addEventListener('click', (evt) => {
      evt.target.classList.toggle('place__like-button_active');
      likeCard(_id);
    });

likeBtn.addEventListener('click', () => {
      if (likes.some((user) => user._id === serverMe)) {
        likeCardRemove(_id);
      }
    })

if (owner._id !== serverMe) {
  placeElement.querySelector('.place__delete-button').classList.add('place__delete-button_disabled')
}

if (likes.some((user) => user._id === serverMe)) {
  placeElement.querySelector('.place__like-button').classList.add('place__like-button_active');
}


//   удаление
  placeElement.querySelector('.place__delete-button').addEventListener('click', (evt) => {
    cardDelete(_id);
    evt.target.closest('.place').remove();
    });

//   попап
cardImage.addEventListener('click', () => {
    openPopup(popUpImage);
    imageContainer.src = link;
    popupImageTitle.textContent = name;
    imageContainer.alt = name;
  });
  // возвращаем карточку
return placeElement;
};

// function showDelete() {
//   if (owner._id !== serverMe) {
//     placeElement.querySelector('.place__delete-button').classList.add('place__delete-button_disabled')
//   }
// }

// function showLikes() {
//   if (likes.some((user) => user._id === serverMe)) {
//     placeElement.querySelector('.place__like-button').classList.add('place__like-button_active');
//   }
// }
