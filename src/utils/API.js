class API {
    constructor() {
        this._url = "http://api.sergeevpavel.mesto.nomoredomains.icu/";
        this._headers = {'Content-Type': 'application/json'};
    }

    _checkResponse(response) {
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(`Ошибка: ${response.status}.`);
        }
    }

    initializeProfile() {
        return fetch(`${this._url}/users/me`, {
            headers: this._headers
        }).then(response => this._checkResponse(response));
    }

    initialCards() {
        return fetch(`${this._url}/cards`, {
            headers: this._headers
        }).then(response => this._checkResponse(response));
    }

    addCard(formValues) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(formValues)
        }).then(response => this._checkResponse(response));
    }

    deleteCard(id) {
        return fetch(`${this._url}/cards/${id}`, {
            method: 'DELETE',
            headers: this._headers
        }).then(response => this._checkResponse(response));
    }

    toggleLike(id, isLiked) {
        return fetch(`${this._url}/cards/${id}/likes`, {
            method: isLiked ? 'DELETE' : 'PUT',
            headers: this._headers
        }).then(response => this._checkResponse(response));
    }

    updateUserInfo(formValues) {
        return fetch(`${this._url}}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(formValues)
        }).then(response => this._checkResponse(response));
    }

    updateUserAvatar(avatar) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(avatar)
        }).then(response => this._checkResponse(response));
    }
}

export const api = new API();
