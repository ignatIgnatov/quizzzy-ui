import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

import * as authService from "../services/authService";

import PopupWithoutAnimation from "./Popup/PopupWithoutAnimation";

const Login = () => {
    const navigate = useNavigate();
    const { user, login } = useContext(AuthContext);
    let [errorMessage, setErrorMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const onLoginHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get("email");
        let password = formData.get("password");

        authService
            .login(email, password)
            .then((authData) => {
                if (authData.token) {
                    setShowPopup(true);
                    setTimeout(() => {
                        login(authData);
                        navigate("/rooms");
                    }, 2000)
                } else {
                    setErrorMessage("Wrong email or password!");
                }
            })
            .catch(() => {
                navigate("/error");
            });
    };

    const handleInputChange = () => {
        setErrorMessage('');
    };

    return (
        <div>
            <header id="head" className="secondary"></header>
            <div className="container">
                <ol className="breadcrumb">
                    <li>Home</li>
                    <li className="active">User access</li>
                </ol>

                <div className="row">
                    <article className="col-xs-12 maincontent">
                        <header className="page-header">
                            <h1 className="page-title">Sign in</h1>
                        </header>

                        <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <h3 className="thin text-center">Sign in to your account</h3>
                                    <p className="text-center text-muted">
                                        Don't have an account?{" "}
                                        <Link to="/auth/register">Register here!</Link>
                                    </p>
                                    <hr />

                                    <form onSubmit={onLoginHandler} method="POST">
                                        <div className="top-margin">
                                            <label htmlFor="username">
                                                Email <span className="text-danger">*</span>
                                                {errorMessage ? <div><small className="text-danger">{errorMessage}</small></div> : ""}
                                            </label>
                                            <input
                                                onChange={handleInputChange}
                                                type="email"
                                                name="email"
                                                id="email"
                                                className="form-control"
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
                                            />
                                        </div>

                                        <hr />

                                        <div className="row">
                                            <div className="col-lg-8">
                                                <b>
                                                    <Link to="/forgot-pws-instr">Forgot password?</Link>
                                                </b>
                                            </div>
                                            <div className="col-lg-4 text-right">
                                                <button className="btn btn-action" type="submit">
                                                    Sign in
                                                </button>
                                                <PopupWithoutAnimation text="You are logged in" show={showPopup} setShow={setShowPopup} />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default Login;
