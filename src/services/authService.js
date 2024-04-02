const baseUrl = "http://localhost:8080/auth";

export const register = async (firstName, lastName, email, password) => {
    const res = await fetch(`${baseUrl}/register`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, email, password }),
    });

    return await res.json();
};

export const login = async (email, password) => {
    let res = await fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    return await res.json();
};

export const logout = (token) => {
    return fetch(`${baseUrl}/logout`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
        },
    });
};

export const changePassword = async (email, password, confirmPassword) => {
    const res = await fetch(`${baseUrl}/ch-pwd`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password, confirmPassword }),
    });
    return await res.json();
};