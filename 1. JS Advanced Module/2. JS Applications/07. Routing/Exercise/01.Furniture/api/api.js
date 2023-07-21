const host = 'http://localhost:3030';

async function api(method, url, data) {

    const options = {
        method,
        headers: {},
    }

    if(data) { //check if data, then create headers and body in the options Object...
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const userData = JSON.parse(localStorage.getItem('userData')); // get userData from localStorage...

    if(userData) { //if userData != null -> create headers prop in options with X-Auth...
        options.headers['X-Authorization'] = userData.token;
    }

    try {
        const response = await fetch(`${host}${url}`, options); // fetch data with corresponding url...
        if(!response.ok) {
            const error = await response.json(); 
            throw new Error(error.message) // throw the error if the response is not OK...
        }

        if(response.status === 204) {
            return response;
        } else {
            return await response.json();
        }

    } catch(error) {
        alert(error.message);
        throw error;
    }
}

export function get(url) {
    return api('GET', url);
}

export function post(url, data) {
    return api('POST', url, data);
}

export function put(url, data) {
    return api('PUT', url, data);
}

export function del(url) {
    return api('DELETE', url);
}