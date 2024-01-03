const URL = "http://localhost:3030/";

export const userRegister = async (data) => {
    try {
        const request = await fetch(URL + "users/register", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!request.ok) {
            throw new Error("A user with the same Email already exists!");
        }

        const response = await request.json();
        return response;
    } catch (error) {
        alert(error.message);
        throw error;
    }
};

export const userLogin = async (data) => {
    try {
        const request = await fetch(URL + "users/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!request.ok) {
            throw new Error("Wrong username or password");
        }

        const response = await request.json();
        return response;
    } catch (error) {
        alert(error.message);
        throw error;
    }
};

export const userLogout = async (token) => {
    const request = await fetch(URL + "users/logout", {
        method: "GET",
        headers: {
            "X-Authorization": token,
        },
    });
};
