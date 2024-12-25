import { NavLink } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const PageNotFound = () => {
    return (
        <>
        <Header/>
        <div className="error_section">
            <div className="container">   
                <div className="row">
                    <div className="col-12">
                        <div className="error_form">
                            <h1>404</h1>
                            <h2>Opps! PAGE NOT BE FOUND</h2>
                            <p>Sorry but the page you are looking for does not exist, have been <br /> removed, name changed or is temporarily unavailable.</p>
                            
                            <NavLink to="/">Back to home page</NavLink>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
        <Footer/>
        </>
    );
};

export default PageNotFound;