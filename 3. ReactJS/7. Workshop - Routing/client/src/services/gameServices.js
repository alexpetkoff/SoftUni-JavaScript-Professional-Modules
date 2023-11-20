const URL = 'http://localhost:3030/jsonstore';

export const getAll = async () => {
    const request = await fetch(URL + '/games?sortBy=_createdOn%20desc', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const response = await request.json();

    return response;
}

export const getOne = async (id) => {
    const request = await fetch(URL + `/games/${id}`, {
        method: 'GET'
    });
    const response = await request.json();

    return response;
}

export const createGame = async (data) => {
    const request = await fetch(URL + '/games', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const response = await request.json();
    
    return response;
}
