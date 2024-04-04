import * as userService from "../../services/userService"
import RanglistRow from "./RanglistRow";

import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

const Ranglist = () => {

    const { user } = useContext(AuthContext);

    const navigate = useNavigate();

    const token = user.token;

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAllUsersOrderedByPoints(token)
            .then((data) => {
                setUsers(Object.values(data));
            })
            .catch(() => navigate("/error"));
    }, []);

    return (
        <>
            <header id="head" className="secondary"></header>
            <div className="container">

                <ol className="breadcrumb">
                    <li>Users</li>
                    <li className="active">Ranglist</li>
                </ol>

                <div className="jumbotron top-space">
                    <div className="container">
                        <h3 className="text-center thin">Ranglist</h3>

                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Points</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((x) => (
                                    <RanglistRow key={x.id} ranglistRow={x} index={users.indexOf(x)} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ranglist;