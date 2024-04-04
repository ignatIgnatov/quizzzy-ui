import * as authService from "../../services/authService";
import * as mailService from "../../services/mailService";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import PopupWithoutAnimation from "../Popup/PopupWithoutAnimation";

const ForgotPassword = () => {

    const navigate = useNavigate();

    const [showPopup, setShowPopup] = useState(false);
    const [error, setError] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let email = formData.get("email");
        let password = formData.get("password");
        let confirmPassword = formData.get("confirmPassword")

        authService
            .changePassword(email, password, confirmPassword)
            .then((data) => {
                if (data.error) {
                    setError("Incorrect email or password!")
                } else {
                    mailService.sendEmailForChangedPassword(email, password);
                    setShowPopup(true);
                    setTimeout(() => {
                        navigate("/auth/login");
                    }, 2000)
                }
            })
            .catch(() => navigate("/error"));

    }

    const handleInputChange = () => {
        setError('');
    };

    return (
        <>
            <header id="head" className="secondary"></header>
            <div className="container">

                <ol className="breadcrumb">
                    <li>Users</li>
                    <li className="active">Change password</li>
                </ol>

                <div className="row">
                    <article className="col-md-4 col-md-offset-3 col-sm-4 col-sm-offset-2">


                        <form onSubmit={onSubmitHandler} method="PUT">
                            {error ? <div><small className="text-danger">{error}</small></div> : ""}
                            <div className="top-margin">
                                <label htmlFor="email">
                                    Email <span className="text-danger">*</span>
                                </label>
                                <input
                                    onChange={handleInputChange}
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="form-control"
                                    placeholder="enter your email"
                                />
                            </div>
                            <div className="top-margin">
                                <label htmlFor="password">
                                    Password <span className="text-danger">*</span>
                                </label>
                                <input
                                    onChange={handleInputChange}
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="form-control"
                                    placeholder="enter your new password"
                                />
                            </div>
                            <div className="top-margin">
                                <label htmlFor="confirmPassword">
                                    Confirm Password <span className="text-danger">*</span>
                                </label>
                                <input
                                    onChange={handleInputChange}
                                    type="password"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    className="form-control"
                                    placeholder="confirm your new password"
                                />
                            </div>

                            <hr />

                            <div className="row">
                                <div className="col-lg-4 text-right">
                                    <button className="btn btn-action" type="submit">
                                        Change password
                                    </button>
                                    <PopupWithoutAnimation text="Password changed!" show={showPopup} setShow={setShowPopup} />
                                </div>
                            </div>
                        </form>
                    </article>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword;