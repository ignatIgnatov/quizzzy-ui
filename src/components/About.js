const About = () => {
    return (
        <>
            <header id="head" className="secondary"></header>
            <div className="container">

                <ol className="breadcrumb">
                    <li>Home</li>
                    <li className="active">About</li>
                </ol>

                <div className="row">
                    <article className="col-xs-12 maincontent">
                        <header className="page-header">
                            <h1 className="page-title">Quizzzy - challenge yourself</h1>
                        </header>

                        <h4>Quizzzy is a knowledge game.</h4>
                        <p>Each user can choose a category in which to play.</p>
                        <p>
                            The most interesting part of the game is the user questions category.
                            Each user can submit their own question to become part of the game.
                            Only questions asked by users are accumulated in the user questions category.
                            They can be of different difficulty and subcategory.
                        </p>
                        <p>
                            Questions with incorrect and obscene content will not be approved and allowed into the game.
                        </p>
                        <p>
                            Each correct answer will earn the player points.
                            Points will accumulate, and at the end of the game each player will be able to see where
                            they stand in the leaderboard compared to other players.
                        </p>
                        <p>
                            Each question asked by a player will earn them additional bonus points.
                        </p>


                    </article>
                </div>
            </div>
        </>
    )
}

export default About;