const baseURL = 'http://localhost:3030/jsonstore/users'

export const getAll = async () => {
    try {
        const req = await fetch(baseURL);
        const data = await req.json();

        return Object.values(data);
    } catch(err) {
        console.error(err);
    }
}