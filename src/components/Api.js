class Api {
  constructor({
    baseUrl,
    headers
  }) {
    this._headers = headers;
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) { // Если все ок - получаем первоначальный ответ от сервера
      return res.json(); // Читаем ответ в формате json
    }
    return Promise.reject(`Что-то пошло не так: ${res.status}`); // Если не ок возвращаем отклоненный промис с описанием ошибки
  }

  // Получаем данные о пользователе
  getProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
        headers: this._headers
      }).then((res) => this._checkResponse(res))
      .catch((err) => {
        console.log(err)
      })
  }

  // Получение карточек
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
        headers: this._headers
      }).then((res) => this._checkResponse(res))
      .catch((err) => {
        console.log(err)
      })
  }

  // Редактирование профиля
  editProfile(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          name,
          about
        })
      }).then((res) => this._checkResponse(res))
      .catch((err) => {
        console.log(err)
      })
  }

  // Добавление карточки
  addCard(name, link) {
    return fetch(`${this._baseUrl}/cards`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          name,
          link
        })
      }).then((res) => this._checkResponse(res))
      .catch((err) => {
        console.log(err)
      })

  }

  // Удаление карточки
  delCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
        method: 'DELETE',
        headers: this._headers
      }).then((res) => this._checkResponse(res))
      .catch((err) => {
        console.log(err)
      })

  }

  // Удаление лайка
  deleteLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
        method: 'DELETE',
        headers: this._headers
      }).then((res) => this._checkResponse(res))
      .catch((err) => {
        console.log(err)
      })
  }

  // Добавление лайка
  addLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
        method: 'PUT',
        headers: this._headers
      }).then((res) => this._checkResponse(res))
      .catch((err) => {
        console.log(err)
      })
  }

  // Обновление аватара
  updateAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          avatar
        })
      }).then((res) => this._checkResponse(res))
      .catch((err) => {
        console.log(err)
      })
  }

}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-39',
  headers: {
    authorization: '7acf6c30-5a1b-438f-b665-1a702578f3ba',
    'Content-Type': 'application/json'
  }
});
