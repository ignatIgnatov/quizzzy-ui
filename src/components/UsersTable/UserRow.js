
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

import * as userService from "../../services/userService";

import PopupWithoutAnimation from "../Popup/PopupWithoutAnimation";

const UserCard = ({ userRow }) => {
    const { user } = useContext(AuthContext);
    const [showPopup, setShowPopup] = useState(false);

    const navigate = useNavigate();

    const id = userRow.id;
    const firstName = userRow.firstName;
    const lastName = userRow.lastName;
    const email = userRow.email;
    const token = user.token;

    const deleteHandler = () => {
        userService.deleteUser(email, token)
            .then(() => {
                setShowPopup(true)
                window.location.reload();
            })
            .catch(() => navigate("/error"));
    }

    let isSameUser = false;
    if (user.token) {
        if (user.email === userRow.email) {
            isSameUser = true;
        }
    }

    return (
        <>
            <tr>
                <th scope="row">{id}</th>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{email}</td>
                <td><input
                    // onClick={infoHandler}
                    className="btn btn-update"
                    type="button"
                    name="info"
                    value="More Info"
                /></td>
                <td>
                    {
                        isSameUser
                            ? ""
                            : <input
                                onClick={deleteHandler}
                                className="btn btn-delete"
                                type="button"
                                name="delete"
                                value="Delete"
                            />
                    }
                </td>
            </tr>
            <PopupWithoutAnimation text="User deleted successfully!" show={showPopup} setShow={setShowPopup} />
        </>
    );
};

export default UserCard;