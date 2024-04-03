const baseUrl = "http://localhost:8080/mail";

export const sendEmail = async (email) => {
    let res = await fetch(`${baseUrl}/send`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({ email }),
    });

    return await res.json();
};