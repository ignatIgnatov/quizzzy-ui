import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

import * as userService from "../services/userService";

const UserCard = ({ userRow }) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const email = userRow.email;
    const token = user.token;

    const deleteHandler = () => {
        userService.deleteUser(email, token)
            .then(() => {
                alert(`User with email ${email} deleted successfully!`)
                window.location.reload();
            });
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
                <th scope="row">{userRow.id}</th>
                <td>{userRow.firstName}</td>
                <td>{userRow.lastName}</td>
                <td>{userRow.email}</td>
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
        </>
    );
};

export default UserCard;