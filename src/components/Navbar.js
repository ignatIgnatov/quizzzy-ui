import { Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
    const { user } = useContext(AuthContext);

    const userPanel = (
        <>
            <li>
                <Link to="/user/my-profile">My profile</Link>
            </li>
            <ul className="nav navbar-nav" style={{ marginLeft: 70 }}>
                <li>
                    <Link to="/auth/logout">Logout</Link>
                </li>
            </ul>
        </>
    );

    const adminPanel = (
        <>
            <li className="dropdown">
                <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                    Admin Panel <b className="caret"></b>
                </Link>
                <ul className="dropdown-menu">
                    <li>
                        <Link to="/admin/registered-users-table">Registered Users</Link>
                    </li>
                    <li>
                        <Link to="/admin/user-questions-table">Received User Questions</Link>
                    </li>
                    <li>
                        <Link to="/admin/unapproved-questions-table">Unapproved Questions</Link>
                    </li>
                    <li>
                        <Link to="/auth/register">Register User</Link>
                    </li>
                    <li>
                        <Link to="/admin/general-msg">Send Message To All</Link>
                    </li>
                </ul>
            </li>
            <ul className="nav navbar-nav" style={{ marginLeft: 70 }}>
                <li>
                    <Link to="/auth/logout">Logout</Link>
                </li>
            </ul>
        </>
    );

    let isAdmin = false;
    if (user.token) {
        if (user.roles[0] === "ROLE_ADMIN") {
            isAdmin = true;
        }
    }

    return (
        <>
            <div className=" navbar-inverse navbar-fixed-top headroom">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li className="navbar-brand">
                                <img src="../../assets/images/logo.png" style={{ width: "85px" }} alt="Logo" />
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-collapse collapse">
                        <ul className="nav navbar-nav pull-right">
                            <li>
                                {user.token
                                    ? <Link to="/game/ranglist">Ranglist</Link>
                                    : ""}
                            </li>
                            <li>
                                {
                                    user.token
                                        ? <Link to="/rooms">Rooms</Link>
                                        : <Link to="/">Home</Link>
                                }

                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                {user.token ? <Link to="/send-question">Send Your Question</Link> : ""}
                            </li>

                            {user.token ? (
                                isAdmin ? (
                                    adminPanel
                                ) : (
                                    userPanel
                                )
                            ) : (
                                <>
                                    <ul className="nav navbar-nav pull-right" style={{ marginLeft: 70 }}>
                                        <li>
                                            <Link to="/auth/login">Sign in</Link>

                                        </li>
                                        <li>
                                            <Link to="auth/register">Sign up</Link>
                                        </li>
                                    </ul>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Navbar;
