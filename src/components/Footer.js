const Footer = () => {
    return (
        <footer id="footer" className="top-space">
            <div className="footer1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 widget">
                            <h3 className="widget-title">Contact</h3>
                            <div className="widget-body">
                                <p>
                                    +359 888 888 888
                                    <br />
                                    <a href="mailto:#">some_email@some.com</a>
                                    <br />
                                    <br />/ Address Here
                                </p>
                            </div>
                        </div>

                        <div className="col-md-3 widget">
                            <h3 className="widget-title">Follow me</h3>
                            <div className="widget-body">
                                <p className="follow-me-icons">
                                    <a href="">
                                        <i className="fa fa-twitter fa-2"></i>
                                    </a>
                                    <a href="">
                                        <i className="fa fa-github fa-2"></i>
                                    </a>
                                    <a href="">
                                        <i className="fa fa-facebook fa-2"></i>
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 widget">
                            <h3 className="widget-title">Text widget</h3>
                            <div className="widget-body">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Excepturi, dolores, quibusdam architecto voluptatem amet
                                    fugiat nesciunt placeat provident cumque accusamus itaque
                                    voluptate modi quidem dolore optio velit hic iusto vero
                                    praesentium repellat commodi ad id expedita cupiditate
                                    repellendus possimus unde?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 widget">
                        </div>

                        <div className="col-md-6 widget">
                            <div className="widget-body">
                                <p className="text-right">
                                    Copyright &copy; 2024, Java Crew Team.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
