import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";

import * as messageService from "../services/messageService";

const EditUserQuestionPage = () => {

    const { user } = useContext(AuthContext);
    const [questionError, setQuestionError] = useState('');
    const [trueAnswerError, setTrueAnswerError] = useState('');
    const [wrongOne, setWrongOne] = useState('');
    const [wrongTwo, setWrongTwo] = useState('');
    const [wrongThree, setWrongThree] = useState('');

    const navigate = useNavigate();
    const [question, setQuestion] = useState([]);
    const id = localStorage.getItem("QId");

    useEffect(() => {
        messageService.getQuestion(id, user.token).then((data) => {
            setQuestion(data);
        });
    }, []);


    const updateHandler = (event) => {
        event.preventDefault();

        let { question, trueAnswer, wrongAnswerOne, wrongAnswerTwo, wrongAnswerThree } = Object.fromEntries(new FormData(event.currentTarget));

        messageService.approveQuestion(id, question, trueAnswer, wrongAnswerOne, wrongAnswerTwo, wrongAnswerThree, user.token)
            .then((data) => {
                if (data.error) {
                    if (data.error.question) {
                        setQuestionError(data.error.question)
                    }
                    if (data.error.trueAnswer) {
                        setTrueAnswerError(data.error.trueAnswer)
                    }
                    if (data.error.wrongAnswerOne) {
                        setWrongOne(data.error.wrongAnswerOne)
                    }
                    if (data.error.wrongAnswerTwo) {
                        setWrongTwo(data.error.wrongAnswerTwo)
                    }
                    if (data.error.wrongAnswerThree) {
                        setWrongThree(data.error.wrongAnswerThree)
                    }
                } else {
                    localStorage.removeItem("QId");
                    navigate("/admin/user-questions-table")
                }

            })
            .catch(() => navigate("/error"))
    }

    const handleInputChange = () => {
        setQuestionError('');
        setTrueAnswerError('');
        setWrongOne('');
        setWrongTwo('');
        setWrongThree('');
    };

    return (
        <div>
            <header id="head" className="secondary"></header>
            <div className="container">

                <ol className="breadcrumb">
                    <li>Admin</li>
                    <li className="active">Edit User Question</li>
                </ol>
                <div className="row">
                    <article className="col-sm-9 maincontent">
                        <header className="page-header">
                            <h1 className="page-title">Edit User Question</h1>
                        </header>
                        <br />
                        <form onSubmit={updateHandler} method="POST">
                            <div className="row">
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm-12">
                                    <label htmlFor="question">
                                        Question...
                                    </label>
                                    {questionError ? <div><small className="text-danger">{questionError}</small></div> : ''}
                                    <textarea
                                        placeholder="Type your question here..."
                                        className="form-control"
                                        name="question"
                                        rows="3"
                                        defaultValue={question.question}
                                        onChange={handleInputChange}
                                    ></textarea>

                                </div>
                            </div>
                            <br />
                            <br />
                            <div className="row answer">
                                <div className="col-sm-12">
                                    <label htmlFor="trueAnswer">
                                        True answer...
                                    </label>
                                    {trueAnswerError ? <div><small className="text-danger">{trueAnswerError}</small></div> : ''}
                                    <textarea
                                        placeholder="Type your true answer here..."
                                        className="form-control"
                                        name="trueAnswer"
                                        rows="1"
                                        defaultValue={question.trueAnswer}
                                        onChange={handleInputChange}
                                    ></textarea>
                                </div>
                            </div>
                            <div className="row answer">
                                <div className="col-sm-12">
                                    <label htmlFor="wrongAnswerOne">
                                        Wrong answer 1...
                                    </label>
                                    {wrongOne ? <div><small className="text-danger">{wrongOne}</small></div> : ''}
                                    <textarea
                                        placeholder="Type your first wrong answer here..."
                                        className="form-control"
                                        name="wrongAnswerOne"
                                        rows="1"
                                        defaultValue={question.wrongAnswerOne}
                                        onChange={handleInputChange}
                                    ></textarea>
                                </div>
                            </div>
                            <div className="row answer">
                                <div className="col-sm-12">
                                    <label htmlFor="wrongAnswerTwo">
                                        Wrong answer 2...
                                    </label>
                                    {wrongTwo ? <div><small className="text-danger">{wrongTwo}</small></div> : ''}
                                    <textarea
                                        placeholder="Type your second wrong answer here..."
                                        className="form-control"
                                        name="wrongAnswerTwo"
                                        rows="1"
                                        defaultValue={question.wrongAnswerTwo}
                                        onChange={handleInputChange}
                                    ></textarea>
                                </div>
                            </div>
                            <div className="row answer">
                                <div className="col-sm-12">
                                    <label htmlFor="wrongAnswerThree">
                                        Wrong answer 3...
                                    </label>
                                    {wrongThree ? <div><small className="text-danger">{wrongThree}</small></div> : ''}
                                    <textarea
                                        placeholder="Type your third wrong answer here..."
                                        className="form-control"
                                        name="wrongAnswerThree"
                                        rows="1"
                                        defaultValue={question.wrongAnswerThree}
                                        onChange={handleInputChange}
                                    ></textarea>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm-6">

                                </div>
                                <div className="col-sm-6 text-right">
                                    <input
                                        className="btn btn-action"
                                        type="submit"
                                        value="Approve"
                                    />
                                </div>
                            </div>
                        </form>
                    </article>
                </div>

            </div>

        </div>
    )
}

export default EditUserQuestionPage;