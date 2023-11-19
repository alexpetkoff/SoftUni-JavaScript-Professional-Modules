const URL = 'http://localhost:3030/jsonstore';

const getAll = async () => {
    const request = await fetch(URL + '/games?sortBy=_createdOn%20desc', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const response = await request.json();

    return response;
}

export default getAll;