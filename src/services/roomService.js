const baseUrl = "http://localhost:8080/game/room";

export const getAllQuestionsByCategory = async (token, category) => {
    const res = await fetch(`${baseUrl}/${category}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
    });
    return await res.json();
};