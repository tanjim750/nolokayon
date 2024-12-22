
const Footer = () => {
    return (
        <>
            <footer className="footer_widgets">
                <div className="container">  
                    <div className="footer_top">
                        <div className="row">
                                <div className="col-6">
                                    <div className="widgets_container contact_us">
                                        <h3>About Nolokayon</h3>
                                        <div className="footer_contact">
                                            <p>Address: Your address goes here.</p>
                                            <p>Phone: <a href="tel:0123456789">0123456789</a></p>
                                            <p>Email: demo@example.com</p>
                                            <ul>
                                                <li><a href="index.html#"><i className="fa fa-facebook"></i></a></li>
                                                <li><a href="index.html#"><i className="fa fa-twitter"></i></a></li>
                                                <li><a href="index.html#"><i className="ion-social-rss"></i></a></li>
                                                <li><a href="index.html#"><i className="ion-social-googleplus"></i></a></li>

                                                <li><a href="index.html#"><i className="ion-social-youtube"></i></a></li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="widgets_container widget_menu">
                                        <h3>Information</h3>
                                        <div className="footer_menu">
                                            <ul>
                                                <li><a href="index.html#">Home</a></li>
                                                <li><a href="portfolio.html">Shop</a></li>
                                                <li><a href="about.html">About Us</a></li>
                                                <li><a href="contact.html">Contact</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="footer_bottom">
                    <div className="row">
                            <div className="col-12">
                                <div className="copyright_area">
                                    <p>&copy; 2024 <a href="index.html" className="text-uppercase">Nolokayon</a>. Developed by <a target="_blank" href="https://tanjim-abubokor.github.io">Tanjim Abubokor</a></p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>     
            </footer>
        </>
    );
};

export default Footer;