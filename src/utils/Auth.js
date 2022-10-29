class Auth {
    constructor() {
        this._url = "http://api.sergeevpavel.mesto.nomoredomains.icu";
    }

    _checkResponse(response) {
        if (response.ok) {
            return response.json();
        } else {
            console.log(response);
            return Promise.reject(`Ошибка: ${response.status}.`);
        }
    }

    register(email, password) {
        return fetch(`${this._url}/signup`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        }).then(response => this._checkResponse(response));
    }

    authorize(email, password) {
        return fetch(`${this._url}/signin`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        }).then(response => this._checkResponse(response));
    };

    checkToken() {
        return fetch(`${this._url}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => this._checkResponse(response));
    };
}

export const auth = new Auth();
