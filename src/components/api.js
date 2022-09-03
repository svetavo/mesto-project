// авторизация
export const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-14',
  headers: {
    authorization: 'ab97a0b5-b85e-4d41-b8f5-c80c0719b979',
    'Content-Type': 'application/json'
  }
}

// проверка ответа от сервера
export function checkResponse(res) {
  if (res.ok) {
      return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
}


//  функции загрузки исходных карточек с сервера
export const renderCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
    })
    .then(checkResponse)
  }

// // отправка новой карточки на сервер
export const createCard = (name, link) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      'name': name,
      'link': link
    })
  })
  .then(checkResponse)
}

// загрузка инфо о пользователе с сервера
export const renderInfo = () => {
    return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
    })
    .then(checkResponse)
  }

// загрузка инфо о пользователе на сервер
export const newInfo = (name, about) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      'name': name,
      'about': about
    })
  })
  .then(checkResponse)
}

// обновление аватара
export const avatarUpdate = (avatar) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      'avatar': avatar
    })
  })
  .then(checkResponse)
}

// удаление карточки с сервера
export const cardDelete = (cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers,
  })
  .then(checkResponse)
}

// лайк
export const likeCard = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: config.headers,
  })
  .then(checkResponse)
}

export const likeCardRemove = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: config.headers,
  })
  .then(checkResponse)
}

