import { NavLink } from 'react-router-dom';

import Header from '../header/Header';
import Footer from '../footer/Footer';

const About = () => {
    return (
        <>
            <Header/>
            <div className="breadcrumbs_area">
                <div className="container">   
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb_content">
                                <h3>about us</h3>
                                <ul>
                                    <li>
                                        <NavLink to="/" > Home </NavLink>
                                    </li>
                                    <li>{">"}</li>
                                    <li>about us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>         
            </div>
            <div className="about_section">
                <div className="container">   
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="about_thumb">
                                <img src="../assets/img/about/about1.jpg" alt=""/>
                            </div>

                            <div className="about_content">
                                <h1>Welcome to Nolokayon!</h1>
                                <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem. </p>
                                <span>“There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.”</span>
                            </div>
                        </div>    
                    </div>
                </div>    
            </div>
            <Footer/>
        </>
    );
};

export default About;