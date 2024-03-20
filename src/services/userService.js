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