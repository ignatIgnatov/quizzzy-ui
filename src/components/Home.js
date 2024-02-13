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
            <img className="lead blinking-text" src="/assets/images/challenge-logo.png"></img>
            {/* <p className="lead blinking-text">Do you think you know? Challenge yourself!</p> */}
          </div>
        </div>
      </header>

      <main id="main">
        <div className="container left secondary">
          <img className="img-left" src="/assets/images/get-in-the-game.png"></img>
        </div>
        <div className="container text-center secondary">
          <img className="image-slogan" src="/assets/images/quizzzy-high-resolution-logo-transparent.png"></img>
        </div>
        <div className="container right secondary">
          <img className="img-right" src="/assets/images/free.png"></img>
        </div>
      </main>

    </div>

  );
};

export default Home;
