import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

import * as messageService from "../services/messageService";


const Contact = () => {
    let navigate = useNavigate();

    const { user } = useContext(AuthContext);
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [questionError, setQuestionError] = useState('');
    const [trueAnswerError, setTrueAnswerError] = useState('');
    const [wrongOne, setWrongOne] = useState('');
    const [wrongTwo, setWrongTwo] = useState('');
    const [wrongThree, setWrongThree] = useState('');

    const sendMessage = (e) => {
        e.preventDefault();

        let { name, email, question, trueAnswer, wrongAnswerOne, wrongAnswerTwo, wrongAnswerThree } = Object.fromEntries(
            new FormData(e.currentTarget)
        );

        messageService
            .createQuestion(name, email, question, trueAnswer, wrongAnswerOne, wrongAnswerTwo, wrongAnswerThree, user.token)
            .then((data) => {
                if (data.error) {
                    setEmailError(data.error)
                    if (data.error.name) {
                        setNameError(data.error.name)
                    }
                    if (data.error.email) {
                        setEmailError(data.error.email)
                    }
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
                    alert("Question send...")
                    navigate("/rooms")
                }

            })
            .catch((error) => alert(error))
    };

    const handleInputChange = () => {
        setNameError('');
        setEmailError('');
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
                    <li>Home</li>
                    <li className="active">Send Your Question</li>
                </ol>

                <div className="row">
                    <article className="col-sm-9 maincontent">
                        <header className="page-header">
                            <h1 className="page-title">Send Your Question</h1>
                        </header>

                        <p>
                            In this section you can submit your own question. It will be reviewed by a moderator and upon approval will become part of the game in a special room - questions from users.
                        </p>
                        <br />
                        <form onSubmit={sendMessage} method="POST">
                            <div className="row">
                                <div className="col-sm-4">
                                    <label htmlFor="name">
                                        Name...
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        onChange={handleInputChange}
                                    />
                                    {nameError ? <div><small className="text-danger">{nameError}</small></div> : ''}
                                </div>
                                <div className="col-sm-4">
                                    <label htmlFor="email">
                                        Email...
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="email"
                                        placeholder="Email"
                                        onChange={handleInputChange}
                                    />
                                    {emailError ? <div><small className="text-danger">{emailError}</small></div> : ''}
                                </div>
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
                                        placeholder="Type your true answer here..."
                                        className="form-control"
                                        name="wrongAnswerOne"
                                        rows="1"
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
                                        placeholder="Type your true answer here..."
                                        className="form-control"
                                        name="wrongAnswerTwo"
                                        rows="1"
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
                                        placeholder="Type your true answer here..."
                                        className="form-control"
                                        name="wrongAnswerThree"
                                        rows="1"
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
                                        value="Send message"
                                    />
                                </div>
                            </div>
                        </form>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default Contact;
