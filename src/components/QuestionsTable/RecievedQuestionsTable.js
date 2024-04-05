import * as questionService from "../../services/questionService";
import RecievedQuestionRow from "../QuestionsTable/RecievedQuestionRow";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

const RecievedQuestionsTable = () => {

    const { user } = useContext(AuthContext);

    const token = user.token;

    const navigate = useNavigate();

    const [message, setMessage] = useState([]);

    useEffect(() => {
        questionService.getAllUserQuestions(token)
            .then((data) => {
                setMessage(Object.values(data));
            })
            .catch(() => navigate("/error"));
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
                        <h3 className="text-center thin">All user questions</h3>

                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Author</th>
                                    <th scope="col">Question</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {message.map((x) => (
                                    <RecievedQuestionRow key={x.id} messageRow={x} />
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