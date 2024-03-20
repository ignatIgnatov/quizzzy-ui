import { Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
const Rooms = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
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
                    <div className="container">
                        <div className="row">
                            {user.token
                                ? <>
                                    <h3>Hi, {user.firstName ? user.firstName : user.email}</h3>
                                    <h4>Choose a room you want to play in</h4>
                                </>
                                : <h1 className="lead">To enter the rooms, pleace register <Link to="/auth/register">here</Link></h1>
                            }
                        </div>
                    </div>
                </header>

                {/* <div className="container text-center">
        <br /> <br />
        <h2 className="thin">
          The best place to tell people why they are here
        </h2>
        <p className="text-muted">
          The difference between involvement and commitment is like an
          eggs-and-ham breakfast:
          <br />
          the chicken was involved; the pig was committed.
        </p>
      </div> */}

                <div className="jumbotron top-space">
                    <div className="container">
                        {/* <h2 className="text-center thin">Rooms</h2> */}

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
                                            <p>Description of room 1</p>
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
                                            <p>Description of room 2</p>
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
                                            <p>Description of room 3</p>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 highlight">
                                <div className="h-body text-center">
                                    <button className="btn room-btn room-fourth">
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

                <div className="jumbotron top-space user-question-info">
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

                <div className="container">
                    <h2 className="text-center top-space">Frequently Asked Questions</h2>
                    <br />

                    <div className="row">
                        <div className="col-sm-6">
                            <h3>Which code editor would you recommend?</h3>
                            <p>
                                I'd highly recommend you{" "}
                                <a href="http://www.sublimetext.com/">Sublime Text</a> - a free to
                                try text editor which I'm using daily. Awesome tool!
                            </p>
                        </div>
                        <div className="col-sm-6">
                            <h3>Nice header. Where do I find more images like that one?</h3>
                            <p>
                                Well, there are thousands of stock art galleries, but personally,
                                I prefer to use photos from these sites:{" "}
                                <a href="http://unsplash.com">Unsplash.com</a>
                                and{" "}
                                <a href="http://www.flickr.com/creativecommons/by-2.0/tags/">
                                    Flickr - Creative Commons
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <h3>Can I use it to build a site for my client?</h3>
                            <p>
                                Yes, you can. You may use this template for any purpose, just
                                don't forget about the{" "}
                                <a href="http://creativecommons.org/licenses/by/3.0/">license</a>,
                                which says: "You must give appropriate credit", i.e. you must
                                provide the name of the creator and a link to the original
                                template in your work.
                            </p>
                        </div>
                        <div className="col-sm-6">
                            <h3>Can you customize this template for me?</h3>
                            <p>
                                Yes, I can. Please drop me a line to sergey-at-pozhilov.com and
                                describe your needs in details. Please note, my services are not
                                cheap.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Rooms;