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
            <ul className="nav navbar-nav pull-right" style={{ marginLeft: 70 }}>
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
                    {/* <li>
                        <Link to="/admin/usersList">All Users</Link>
                    </li>
                    <li>
                        <Link to="/message/all">All Received Messages</Link>
                    </li> */}
                    <li>
                        <Link to="/auth/register">Register User</Link>
                    </li>
                </ul>
            </li>
            <ul className="nav navbar-nav pull-right" style={{ marginLeft: 70 }}>
                <li>
                    <Link to="/auth/logout">Logout</Link>
                </li>
            </ul>


            {/* {isShown ? (
                <li
                    onClick={() => {
                        setIsShown(false);
                        messageCounter = 0;
                    }}
                >
                    <Link to="/message/all">
                        <i className="fa-solid fa-message text-danger message-icon"></i>
                    </Link>
                </li>
            ) : (
                ""
            )} */}
        </>
    );

    let isAdmin = false;
    if (user.token) {
        if (user.roles[0] === "ROLE_ADMIN") {
            isAdmin = true;
        }
    }

    return (
        <div className=" navbar-inverse navbar-fixed-top headroom">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li>
                            <Link className="navbar-brand" to="/" >
                                <img src="../assets/images/logo.png" style={{ width: "85px" }} alt="Logo" />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav pull-right">
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
                            {user.token ? <Link to="/messages">Send Your Question</Link> : ""}
                        </li>
                        {/* <ul className="nav navbar-nav pull-right" style={{ marginLeft: 70 }}>
                            <li>
                                <Link to="/auth/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/auth/register">Register</Link>
                            </li>
                        </ul> */}


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
                                        <Link to="/auth/login">SIGN IN</Link>

                                    </li>
                                    <li>
                                        <Link to="auth/register">SIGN UP</Link>
                                    </li>
                                </ul>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
