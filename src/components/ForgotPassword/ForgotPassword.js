const ForgotPassword = () => {

    const onSubmitHandler = () => {

    }

    return (
        <>
            <header id="head" className="secondary"></header>
            <div className="container">

                <ol className="breadcrumb">
                    <li>Users</li>
                    <li className="active">Forgot password</li>
                </ol>

                <div className="row">
                    <article className="col-md-4 col-md-offset-3 col-sm-4 col-sm-offset-2">

                        
                        <form onSubmit={onSubmitHandler} method="POST">
                            <div className="top-margin">
                                <label htmlFor="username">
                                    Email <span className="text-danger">*</span>
                                    {/* {errorMessage ? <div><small className="text-danger">{errorMessage}</small></div> : ""} */}
                                </label>
                                <input
                                    // onChange={handleInputChange}
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
                                    {/* {errorMessage ? <div><small className="text-danger">{errorMessage}</small></div> : ""} */}
                                </label>
                                <input
                                    // onChange={handleInputChange}
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="form-control"
                                    placeholder="enter your new password"
                                />
                            </div>
                            <div className="top-margin">
                                <label htmlFor="password">
                                    Confirm Password <span className="text-danger">*</span>
                                </label>
                                <input
                                    // onChange={handleInputChange}
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="form-control"
                                    placeholder="confirm your new password"
                                />
                            </div>

                            <hr />

                            <div className="row">
                                <div className="col-lg-4 text-right">
                                    <button className="btn btn-action" type="submit">
                                        Submit
                                    </button>
                                    {/* <PopupWithoutAnimation text="You are logged in" show={showPopup} setShow={setShowPopup} /> */}
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