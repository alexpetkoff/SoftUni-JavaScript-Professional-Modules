const baseURL = 'http://localhost:3030/jsonstore/users'

export const getAll = async () => {
    try {
        const req = await fetch(baseURL);
        const data = await req.json();

        return Object.values(data);
    } catch (err) {
        console.error(err);
    }
}

export const create = async (data) => {
    const body = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        imageUrl: data.imageUrl,
        phoneNumber: data.phoneNumber,
        createdAt: new Date().toISOString(), 
        updatedAt: new Date().toISOString(),
        address: {
            country: data.country,
            city: data.city,
            street: data.street,
            streetNumber: data.streetNumber,
        },
    };

    const request = await fetch(baseURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    const response = await request.json();

    return response;
};
