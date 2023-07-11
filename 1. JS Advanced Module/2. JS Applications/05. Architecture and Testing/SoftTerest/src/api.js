const host = 'http://localhost:3030/';

async function request(method, url, data) {

    const user = JSON.parse(localStorage.getItem('user'));
    const options = {
        method,
        headers: {}
    }

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }
    if (user) {
        options.headers['X-Authorization'] = user.accessToken;
    }

    try {
        const response = await fetch(`${host}${url}`, options);

        if (!response.ok) {
            const error = await response.json();
            throw error.message;
        }
        if (response.status === 204) {
            return response;
        }

        return response.json();
        
    } catch (error) {

        alert(error.message);
        throw error;

    }

}

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');