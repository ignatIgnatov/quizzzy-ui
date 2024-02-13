import { useState } from "react";

import { Link } from "react-router-dom";

import * as authService from "../services/authService";

import { useNavigate } from "react-router-dom";

const Register = () => {

    let navigate = useNavigate();
    let [uncheckedMessage, setUncheckedMessage] = useState('');
    let [isChecked, setIsChecked] = useState(false);
    const [emailErrors, setEmailErrors] = useState([]);
    const [passwordErrors, setPasswordErrors] = useState([]);
    const [error, setError] = useState('');


    const registerSubmitHandler = (e) => {
        e.preventDefault();

        let { firstName, lastName, email, password, checkBox } =
            Object.fromEntries(new FormData(e.currentTarget));

        if (checkBox) {
            authService
                .register(firstName, lastName, email, password)
                .then((data) => {
                    if (data.error) {
                        if (data.error.email) {
                            setEmailErrors(data.error.email)
                            setError('');
                        } else if (data.error) { setError(data.error) }
                        if (data.error.password) {
                            setPasswordErrors(data.error.password)
                            setError('');
                        } else if (data.error) { setError(data.error) }
                    } else {
                        navigate("/auth/register/successfully")
                    }
                })
                .catch(error => {
                    alert(error)
                })
        } else {
            setUncheckedMessage("Please confirm Terms an Conditions!")
        }
    };

    const handleInputChange = () => {
        setEmailErrors('');
        setPasswordErrors('');
        setError('');
    };

    const handleCheckboxChange = () => {
        setUncheckedMessage('');
        setIsChecked(!isChecked);

    };

    return (
        <div>
            <header id="head" className="secondary"></header>

            <div className="container">
                <ol className="breadcrumb">
                    <li>Home</li>
                    <li className="active">Registration</li>
                </ol>

                <div className="row">
                    <article className="col-xs-12 maincontent">
                        <header className="page-header">
                            <h1 className="page-title">Registration</h1>
                        </header>

                        <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <h3 className="thin text-center">Register a new account</h3>
                                    <p className="text-center text-muted">
                                        Already have an account?{" "}
                                        <Link to="/auth/login">Login here!</Link>{" "}
                                    </p>
                                    <hr />

                                    <form onSubmit={registerSubmitHandler} method="POST">
                                        <div className="row top-margin">
                                            <div className="col-sm-6">
                                                <label htmlFor="firstName">First Name</label>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    id="firstName"
                                                    className="form-control"
                                                />
                                            </div>
                                            <div className="col-sm-6">
                                                <label htmlFor="lastName">Last Name</label>
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    id="lastName"
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                        {/* ------------------------------------------------------------------------------- */}

                                        <div className="top-margin">
                                            <label htmlFor="email">
                                                Email Address <span className="text-danger">*</span>
                                                {emailErrors ? emailErrors.map((error, index) => (
                                                    <div><small className="text-danger" key={index}>{error}</small></div>
                                                )) : error ? <div><small className="text-danger">{error}</small></div> : ''}
                                            </label>
                                            <input
                                                onChange={handleInputChange}
                                                type="email"

                                                name="email"
                                                id="email"
                                                className="form-control"

                                            />
                                        </div>

                                        <div className="row top-margin">
                                            <div className="col-sm-6">
                                                <label htmlFor="password">
                                                    Password <span className="text-danger">*</span>
                                                    {passwordErrors ? passwordErrors.map((error, index) => (
                                                        <div><small className="text-danger" key={index}>{error}</small></div>
                                                    )) : ''}
                                                </label>
                                                <input
                                                    onChange={handleInputChange}
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    className="form-control"

                                                />
                                            </div>
                                        </div>

                                        <hr />

                                        <div className="row">
                                            <div className="col-lg-8">
                                                <label className="checkbox">
                                                    <input onChange={handleCheckboxChange} type="checkbox" name="checkBox" id="checkBox" />
                                                    I've read the{" "}
                                                    <Link to="/termsAndConditions">Terms and Conditions</Link>
                                                    {!isChecked ? <div><small className="text-danger">{uncheckedMessage}</small></div> : ''}
                                                </label>
                                            </div>
                                            <div className="col-lg-4 text-right">
                                                <button className="btn btn-action" type="submit">
                                                    Register
                                                </button>
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

export default Register;
