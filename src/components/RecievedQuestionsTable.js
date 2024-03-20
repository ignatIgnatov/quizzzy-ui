import * as messageService from "../services/messageService";
import MessageRow from "./MessageRow";

import { useState, useEffect } from "react";

import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

const RecievedQuestionsTable = () => {

    const { user } = useContext(AuthContext);

    const token = user.token;

    const [message, setMessage] = useState([]);

    useEffect(() => {
        messageService.getAllUserQuestions(token).then((data) => {
            console.log(data);
            setMessage(Object.values(data));
        });
    }, []);

    return (
        <div>
            <header id="head" className="secondary"></header>
            <div className="container">

                <ol className="breadcrumb">
                    <li>Admin</li>
                    <li className="active">User Questions Table</li>
                </ol>

                <div className="jumbotron top-space">
                    <div className="container">
                        <h3 className="text-center thin">All registred users</h3>

                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Author</th>
                                    <th scope="col">Question</th>
                                    <th scope="col">True Answer</th>
                                    <th scope="col">Wrong answer one</th>
                                    <th scope="col">Wrong answer two</th>
                                    <th scope="col">Wrong answer three</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {message.map((x) => (
                                    <MessageRow key={x.id} messageRow={x} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RecievedQuestionsTable;