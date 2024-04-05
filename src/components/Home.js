import { Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Home = () => {
  const { user } = useContext(AuthContext);
  localStorage.removeItem("id");
  return (
    <div>
      <header id="head">
        <div className="container head-container">
          <div className="row">
            <Link to="/auth/login">
              <img className="lead blinking-text" src="/assets/images/challenge-logo.png"></img>
            </Link>
          </div>
        </div>
      </header>

      <main id="main">
        <div className="container left secondary">
          <Link to="/auth/login">
            <img className="img-left" src="/assets/images/get-in-the-game.png"></img>
          </Link>
        </div>
        <div className="container text-center secondary">
          <Link to="/auth/login">
            <img className="image-slogan" src="/assets/images/quizzzy-high-resolution-logo-transparent.png"></img>
          </Link>
        </div>
        <div className="container right secondary">
          <Link to="/auth/login">
            <img className="img-right" src="/assets/images/free.png"></img>
          </Link>
        </div>
      </main>

    </div>

  );
};

export default Home;
