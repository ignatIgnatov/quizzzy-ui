const ErrorPage = () => {
    return (
        <>
            <header id="head" className="secondary"></header>
            <div className="container">

                <ol className="breadcrumb">
                    <li>Error</li>
                    <li className="active">Error</li>
                </ol>
            </div>

            <div className="jumbotron top-space">
                <div className="container">
                    <h2 className="text-center thin">...Uuups...</h2>
                    <h3 className="text-center thin">...something went wrong...</h3>
                    <h4 className="text-center thin">Please try again later!</h4>
                </div>
            </div>
        </>
    )
}

export default ErrorPage;