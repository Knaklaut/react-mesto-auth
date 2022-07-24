// Класс Api описывает функциональность для обмена данными с сервером
class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._token = headers['authorization'];
    this._userUrl = `${this._baseUrl}/users/me`;
    this._cardsUrl = `${this._baseUrl}/cards`;
    this._likesUrl = `${this._baseUrl}/cards/likes`;
  }

  _checkServerData(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }

  getUserInfo() {
    return fetch(this._userUrl, {
      headers: {
        authorization: this._token
      }
    })
    .then(this._checkServerData);
  }

  getInitialCards() {
    return fetch(this._cardsUrl, {
      headers: {
        authorization: this._token
      }
    })
    .then(this._checkServerData);
  }

  updateUserInfo({ name, about }) {
    return fetch(this._userUrl, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: name, about: about })
    })
    .then(this._checkServerData)
  }

  changeAvatar({ avatar }) {
    return fetch(`${this._userUrl}/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ avatar: avatar })
    })
    .then(this._checkServerData)
  }

  postNewCard({ name, link }) {
    return fetch(this._cardsUrl, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: name, link: link })
    })
    .then(this._checkServerData);
  }

  checkLikeStatus(cardId, isNotLiked) {
    return fetch(`${this._likesUrl}/${cardId}`, {
      method: isNotLiked ? 'PUT' : 'DELETE',
      headers: this._headers
    })
    .then(this._checkServerData)
  }

  deleteCard(cardId) {
    return fetch(`${this._cardsUrl}/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token
      }
    })
    .then(this._checkServerData);
  }
}

// Создание экземпляра класса Api
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-42',
  headers: {
    authorization: '80fc334b-f81e-41e3-bc94-e3092578949b',
    'Content-Type': 'application/json'
  }
});

export default api;