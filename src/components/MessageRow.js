import * as messageService from "../services/messageService";

import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const MessageCard = ({ messageRow }) => {

    const { user } = useContext(AuthContext);

    const id = messageRow.id;
    const author = messageRow.author.email;
    const question = messageRow.question;
    const trueAnswer = messageRow.trueAnswer;
    const wrongAnswerOne = messageRow.wrongAnswerOne;
    const wrongAnswerTwo = messageRow.wrongAnswerTwo;
    const wrongAnswerThree = messageRow.wrongAnswerThree;


    const deleteHandler = () => {
        messageService.deleteQuestion(id, user.token)
            .then(() => {
                alert(`Question with id ${id} deleted successfully!`)
                window.location.reload();
            });
    }

    return (
        <>
            <tr>
                <th scope="row">{messageRow.id}</th>
                <td>{messageRow.author.email}</td>
                <td>{messageRow.question}</td>
                <td>{messageRow.trueAnswer}</td>
                <td>{messageRow.wrongAnswerOne}</td>
                <td>{messageRow.wrongAnswerTwo}</td>
                <td>{messageRow.wrongAnswerThree}</td>
                <td><input
                    // onClick={approveHandler}
                    className="btn btn-default"
                    type="button"
                    name="Approve"
                    value="Approve"
                /></td>
                <td><input
                    // onClick={editHandler}
                    className="btn btn-default"
                    type="button"
                    name="edit"
                    value="Edit"
                /></td>
                <td><input
                    onClick={deleteHandler}
                    className="btn btn-action"
                    type="button"
                    name="delete"
                    value="Delete"
                /></td>
            </tr>
        </>
    );
};

export default MessageCard;