import { Link } from "react-router-dom";

const TermsAndConditions = () => {
    return (
        <>
            <header id="head" className="secondary"></header>
            <div className="container">

                <ol className="breadcrumb">
                    <li>Home</li>
                    <li className="active">Terms and conditions</li>
                </ol>

                <div className="row">
                    <article className="col-xs-12 maincontent">
                        <header className="page-header">
                            <h1 className="page-title">Terms and conditions</h1>
                        </header>
                        <p>Welcome to Quizzzy! These terms and conditions outline the rules and regulations for the use of Quizzzy operated by Quizzzy Team.</p>
                        <p>By accessing this app, we assume you accept these terms and conditions in full. Do not continue to use Quizzzy if you do not accept all of the terms and conditions stated on this page.</p>
                        <h3>License to Use</h3>
                        <p>Unless otherwise stated, JavaCrew and/or its licensors own the intellectual property rights for all material on Quizzzy. All intellectual property rights are reserved. You may view and/or print pages from Quizzzy for your own personal use subject to restrictions set in these terms and conditions.</p>
                        <h4>You must not:</h4>
                        <ul style={{ listStyleType: "none" }}>
                            <li>Republish material from Quizzzy</li>
                            <li>Sell, rent, or sub-license material from Quizzzy</li>
                            <li>Reproduce, duplicate or copy material from Quizzzy</li>
                        </ul>
                        <h3>User Content</h3>
                        <p>In these terms and conditions, "Quizzzy Team"</p>
                    </article>
                </div>
            </div>
            <main>
                <div className="container text-right">
                    <Link to="/auth/register">Back to register page...</Link>
                </div>

            </main>
        </>
    )
}

export default TermsAndConditions;