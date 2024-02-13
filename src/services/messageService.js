const baseUrl = "http://localhost:8080/messages";

export const createQuestion = async (name, email, question, trueAnswer, wrongAnswerOne, wrongAnswerTwo, wrongAnswerThree, token) => {
    const res = await fetch(baseUrl, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, question, trueAnswer, wrongAnswerOne, wrongAnswerTwo, wrongAnswerThree }),
    });
    return await res.json();
}