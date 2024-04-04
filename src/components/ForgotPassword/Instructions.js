import * as mailService from "../../services/mailService"

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import PopupWithoutAnimation from "../Popup/PopupWithoutAnimation";

const Instructions = () => {

    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);
    let [errorMessage, setErrorMessage] = useState('');

    const sendEmailHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let email = formData.get("email");

        mailService
            .sendEmail(email)
            .then((data) => {
                if (data.error) {
                    setErrorMessage("Enter valid email address!");
                } else {
                    setShowPopup(true);
                    setTimeout(() => {
                        navigate("/auth/login");
                    }, 2000)
                }
            })
            .catch(() => {
                navigate("/error")
            });
    }

    const handleInputChange = () => {
        setErrorMessage('');
    };

    return (
        <>
            <header id="head" className="secondary"></header>
            <div className="container">

                <ol className="breadcrumb">
                    <li>Users</li>
                    <li className="active">User access</li>
                </ol>

                <div className="row">
                    <article className="col-xs-12 maincontent">
                        <header className="page-header">
                            <h1 className="page-title">Send email</h1>
                        </header>

                        <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <h4 className="thin text-center">When you press the Send Email button, an email will be sent to you with instructions for changing your password</h4>
                                    <h4 className="thin text-center"></h4>
                                    <hr />
                                    <form onSubmit={sendEmailHandler} method="POST">
                                        <div className="top-margin">
                                            <label htmlFor="username">
                                                {errorMessage ? <div><small className="text-danger">{errorMessage}</small></div> : ""}
                                            </label>
                                            <input
                                                onChange={handleInputChange}
                                                type="email"
                                                name="email"
                                                id="email"
                                                className="form-control"
                                                placeholder="enter your email address"
                                            />
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-lg-4 text-right">
                                                <button className="btn btn-action" type="submit">
                                                    Send email
                                                </button>
                                                <PopupWithoutAnimation text="Email send successfully!" show={showPopup} setShow={setShowPopup} />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>

                {/* <div className="row">
                    <article className="col-xs-12 maincontent">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <h4 className="page-title">When you press the Send Email button, an email will be sent to you with instructions for changing your password.</h4>
                                <button onClick={sendEmailHandler} className="btn btn-default">Send Email</button>
                            </div>
                        </div>


                    </article>
                </div> */}
            </div>
        </>
    )
}

export default Instructions;