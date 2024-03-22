import * as messageService from "../services/messageService";

import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const MessageCard = ({ messageRow }) => {

    const navigate = useNavigate();

    const { user } = useContext(AuthContext);

    const id = messageRow.id;
    const author = messageRow.author.email;
    const question = messageRow.question;
    const approved = messageRow.approved;


    const deleteHandler = () => {
        messageService.deleteQuestion(id, user.token)
            .then(() => {
                alert(`Question with id ${id} deleted successfully!`)
                window.location.reload();
            });
    }

    const editHandler = () => {
        navigate("/admin/edit-user-question")
        localStorage.setItem("QId", id)
    }

    return (
        <>
            <tr>
                <th scope="row">{id}</th>
                <td>{author}</td>
                <td>{question}</td>
                <td><input
                    onClick={editHandler}
                    className="btn btn-default"
                    type="button"
                    name="edit"
                    value="Approve"
                    disabled={approved}
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