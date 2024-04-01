const baseUrl = "http://localhost:8080/users";

export const getAllUsers = async (token) => {
    const res = await fetch(`${baseUrl}/all`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
    });
    return await res.json();
};


export const deleteUser = (email, token) => {
    return fetch(`${baseUrl}/${email}`, {
        method: "DELETE",
        headers: {
            Authorization: "Bearer " + token,
        },
    });
};

export const getUser = async (email, token) => {
    const res = await fetch(`${baseUrl}/${email}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
    });
    return await res.json();
};

export const savePoints = async (email, points, token) => {
    const res = await fetch(`${baseUrl}/${email}/${points}`, {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    });
    return await res.json();
}

export const getAllUsersOrderedByPoints = async (token) => {
    const res = await fetch(`${baseUrl}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
    });
    return await res.json();
};