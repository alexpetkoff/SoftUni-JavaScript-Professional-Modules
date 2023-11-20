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

export const createGame = async (data) => {
    const request = await fetch(URL + '/data/games', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const response = await request.json();
    
    return response;
}
