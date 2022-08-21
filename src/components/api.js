// импорт
import { profileName, profileDescription, avatar, name, description} from "./utils.js";
import { placesItems } from "./index";
import { createPlace, placeImgInput, placeNameInput } from "./card";

//  функции загрузки карточек с сервера*****

export function renderCards() {
  return fetch('https://nomoreparties.co/v1/plus-cohort-14/cards', {
      headers: {
        authorization: 'ab97a0b5-b85e-4d41-b8f5-c80c0719b979'
      }
    })
    .then((res) => {
      return res.json()
    })
    .then((data) => {
  data.forEach((item) => {
    placesItems.append(createPlace(item.name,item.link, item.likes)); //обращаемся к функции. указываем откуда брать название и ссылку
  });
  });
  }

// отправка новой карточки на сервер
export function newCard() {
  fetch('https://nomoreparties.co/v1/plus-cohort-14/cards', {
    method: 'POST',
    headers: {
      authorization: 'ab97a0b5-b85e-4d41-b8f5-c80c0719b979',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: placeNameInput.value,
      link: placeImgInput.value
    })
  });
}

// загрузка инфо о пользователе с сервера
export function renderInfo() {
    return fetch('https://nomoreparties.co/v1/plus-cohort-14/users/me', {
      headers: {
        authorization: 'ab97a0b5-b85e-4d41-b8f5-c80c0719b979'
      }
    })
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      profileName.textContent = data.name;
      profileDescription.textContent = data.about;
      avatar.src = data.avatar;
      });
  }

// загрузка инфо о пользователе на сервер
export function newInfo() {
  fetch('https://nomoreparties.co/v1/plus-cohort-14/users/me', {
    method: 'PATCH',
    headers: {
      authorization: 'ab97a0b5-b85e-4d41-b8f5-c80c0719b979',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name.value,
      about: description.value
    })
  });
}
