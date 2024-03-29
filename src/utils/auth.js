export const BASE_URL = 'https://auth.nomoreparties.co';

function checkServerData(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(res.status);
}

export function register(email, password) {
    console.log(email, password);
    return fetch (`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email, password
        })
    })
    .then(checkServerData);
}

export function login(email, password) {
    console.log(email, password);
    return fetch (`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
            body: JSON.stringify({
                email, password
            })
        })
        .then(checkServerData);
    }

export function getUserToken(token) {
    return fetch (`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    .then(checkServerData);
}
