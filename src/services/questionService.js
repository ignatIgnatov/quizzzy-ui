const baseUrl = "http://localhost:8080/messages";

export const createQuestion = async (question, trueAnswer, wrongAnswerOne, wrongAnswerTwo, wrongAnswerThree, token) => {
    const res = await fetch(baseUrl, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ question, trueAnswer, wrongAnswerOne, wrongAnswerTwo, wrongAnswerThree }),
    });
    return await res.json();
}


export const getAllUserQuestions = async (token) => {
    const res = await fetch(baseUrl, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
    });
    return await res.json();
};

export const deleteQuestion = (id, token) => {
    return fetch(`${baseUrl}/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: "Bearer " + token,
        },
    });
};

export const getQuestion = (id, token) => {
    return fetch(`${baseUrl}/${id}`, {
        method: "GET",
        headers: {
            Authorization: "Bearer " + token,
        },
    }).then((res) => res.json());
};

export const approveQuestion = async (id, question, trueAnswer, wrongAnswerOne, wrongAnswerTwo, wrongAnswerThree, token) => {
    const res = await fetch(`${baseUrl}/${id}`, {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ question, trueAnswer, wrongAnswerOne, wrongAnswerTwo, wrongAnswerThree }),
    });
    return await res.json();
};

export const getAllUnapprovesQuestions = async (token) => {
    const res = await fetch(`${baseUrl}/unapproved`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
    });
    return await res.json();
};