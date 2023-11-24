const URL = 'http://localhost:3030/';

export const userRegister = async (data) => {
    const request = await fetch(URL + 'users/register', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const response = await request.json();

    return response;
}

export const userLogin = async (data) => {
    const request = await fetch(URL + 'users/login', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const response = await request.json();

    return response;
}
