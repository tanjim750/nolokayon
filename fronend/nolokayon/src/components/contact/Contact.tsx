import { NavLink } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../header/Header';

const Contact = () => {
    return (
        <>
        <Header/>
        <div className="breadcrumbs_area">
            <div className="container">   
                <div className="row">
                    <div className="col-12">
                        <div className="breadcrumb_content">
                            <h3>Contact us</h3>
                            <ul>
                                <li>
                                    <NavLink to="/" > Home </NavLink>
                                </li>
                                <li>{">"}</li>
                                <li>Contact us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>         
        </div>

        <div className="contact_map">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                    <div className="map-area">
                        <div id="googleMap">
                        <iframe
                            width="100%"
                            height="100%"
                            loading="lazy"
                            allowFullScreen
                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=New%20York&zoom=10&maptype=roadmap"
                            style={{ border: 0, position: 'relative', zIndex: 2 }}
                            title="Google Maps Embed"
                        ></iframe>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="contact_area">
            <div className="container">   
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                    <div className="contact_message content">
                            <h3>contact us</h3>    
                            <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas human. qui sequitur mutationem consuetudium lectorum. Mirum est notare quam</p>
                            <ul>
                                <li><i className="fa fa-fax"></i>  Address : Your address goes here.</li>
                                <li><i className="fa fa-phone"></i> <a href="contact.html#">demo@example.com</a></li>
                                <li><i className="fa fa-envelope-o"></i> 0123456789</li>
                            </ul>             
                        </div> 
                    </div>
                </div>
            </div>    
        </div>
        <Footer/>
        </>
    );
};

export default Contact;