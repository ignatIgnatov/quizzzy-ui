import * as userService from "../services/userService";
import UserRow from "./UserRow"

import { useState, useEffect } from "react";

import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

const RegistеredUsersTable = () => {

    const { user } = useContext(AuthContext);

    const token = user.token;

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAllUsers(token).then((data) => {
            setUsers(Object.values(data));
        });
    }, []);

    return (
        <div>
            <header id="head" className="secondary"></header>
            <div className="container">

                <ol className="breadcrumb">
                    <li>Admin</li>
                    <li className="active">Registеred Users</li>
                </ol>

                <div className="jumbotron top-space">
                    <div className="container">
                        <h3 className="text-center thin">All registred users</h3>

                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((x) => (
                                    <UserRow key={x.id} userRow={x} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RegistеredUsersTable;