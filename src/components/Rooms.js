import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
const Rooms = () => {
    const { user } = useContext(AuthContext);

    const navigate = useNavigate();

    const goToTheGamePage = () => {
        localStorage.setItem("category", "USER_QUESTIONS")
        navigate("/game/room/u-q-start")
    }
    return (
        <>

            <div>
                <header id="head" className="secondary"></header>
                <div className="container">
                    <ol className="breadcrumb">
                        <li>User</li>
                        <li className="active">Rooms</li>
                    </ol>
                </div>
            </div>

            <div>
                <header id="head">
                    <div className="container text-center">
                        {user.token
                            ? <>
                                <h3>Welcome, {user.firstName ? user.firstName : user.email}</h3>
                                <h4>Choose a room you want to play in</h4>
                            </>
                            : <h1 className="lead">To enter the rooms, pleace register <Link to="/auth/register">here</Link></h1>
                        }
                    </div>
                </header>

                <div className="jumbotron top-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 highlight">
                                <div className="h-body text-center">
                                    <button className="btn room-btn room-first">
                                        <div className="h-caption">
                                            <h3>
                                                {/* <i className="fa fa-cogs fa-5"></i> */}
                                                Room 1
                                            </h3>
                                            <hr></hr>
                                            <p>In this room you will answer questions about Room 1</p>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 highlight">
                                <div className="h-body text-center">
                                    <button className="btn room-btn room-second">
                                        <div className="h-caption">
                                            <h3>
                                                {/* <i className="fa fa-cogs fa-5"></i> */}
                                                Room 2
                                            </h3>
                                            <hr></hr>
                                            <p>In this room you will answer questions about Room 2</p>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 highlight">
                                <div className="h-body text-center">
                                    <button className="btn room-btn room-third">
                                        <div className="h-caption">
                                            <h3>
                                                {/* <i className="fa fa-cogs fa-5"></i> */}
                                                Room 3
                                            </h3>
                                            <hr></hr>
                                            <p>In this room you will answer questions about Room 3</p>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 highlight">
                                <div className="h-body text-center">
                                    <button onClick={goToTheGamePage} className="btn room-btn room-fourth">
                                        <div className="h-caption">
                                            <h3>
                                                {/* <i className="fa fa-cogs fa-5"></i> */}
                                                USER QUESTIONS
                                            </h3>
                                            <hr></hr>

                                            <p>In this room you will answer questions asked by users</p>

                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="jumbotron text-center top-space user-question-info">
                    <h4>
                        You can help the further development of the game by adding your question. Every user will have this option. After you submit a question, it will be reviewed and approved, then added to a separate user questions section.
                    </h4>
                    <hr></hr>
                    <p className="text-center">
                        <Link to="/messages" className="btn btn-primary btn-large">
                            Submit your question »
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Rooms;