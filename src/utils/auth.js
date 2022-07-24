export const BASE_URL = 'https://auth.nomoreparties.co';

function checkServerData(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(res.status);
}

export function register(email, password) {
    return fetch (`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email, password
        })
    })
    .then(checkServerData);
}

export function login(email, password) {
    return fetch (`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
            body: JSON.stringify({
                email, password
            })
        })
        .then(checkServerData);
    }

export function checkToken(token) {
    return fetch (`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
    .then(checkServerData);
}
