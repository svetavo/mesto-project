// импорт
import {  avatarUrl, name, description, placeImgInput, placeNameInput, profileDescription, profileName, avatar} from "./utils.js";

// авторизация
export const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-14',
  headers: {
    authorization: 'ab97a0b5-b85e-4d41-b8f5-c80c0719b979',
    'Content-Type': 'application/json'
  }
}

export const serverMe = '1cf9c97e04e9e9f696609d1b';

//  функции загрузки исходных карточек с сервера
export const renderCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
    })
    .then((res) => {
      if (res.ok) {
      return res.json()
      }
    })
    .catch(() => {
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }

// // отправка новой карточки на сервер
export const createCard = () => {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: placeNameInput.value,
      link: placeImgInput.value
    })
  })
  .then((res) => {
    if (res.ok) {
    return res.json()
    }
  })
  .catch(() => {
    return Promise.reject(`Ошибка: ${res.status}`);
  })
}

// загрузка инфо о пользователе с сервера
export const renderInfo = () => {
    return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
    })
    .then((res) => {
      return res.json()
    })
    .catch(() => {
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }

// загрузка инфо о пользователе на сервер
export const newInfo = () => {
  fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: name.value,
      about: description.value
    })
  });
}

// обновление аватара
export const avatarUpdate = () => {
  fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatarUrl.value
    })
  })
}

// удаление карточки с сервера
export const cardDelete = (cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers,
  })
  .then((res) => {
    if (res.ok) {
    return res.json()
    }
  })
  .catch(() => {
    return Promise.reject(`Ошибка: ${res.status}`);
  })
}

// лайк
export const likeCard = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: config.headers,
  })
  .then((res) => {
    if (res.ok) {
    return res.json()
    }
  })
  .catch(() => {
    return Promise.reject(`Ошибка: ${res.status}`);
  })
}

export const likeCardRemove = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: config.headers,
  })
  .then((res) => {
    if (res.ok) {
    return res.json()
    }
  })
  .catch(() => {
    return Promise.reject(`Ошибка: ${res.status}`);
  })
}

