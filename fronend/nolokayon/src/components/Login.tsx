import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <>
        <div className="breadcrumbs_area">
            <div className="container">   
                <div className="row">
                    <div className="col-12">
                        <div className="breadcrumb_content">
                            <h3>My account</h3>
                            <ul>
                                <li><NavLink to={"/"}>home</NavLink></li>
                                <li>{">"}</li>
                                <li>My account</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>         
        </div>
        <div className="customer_login">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="account_form">
                            <h2>login</h2>
                            <form action="login.html#">
                                <p>   
                                    <label>Username or email <span>*</span></label>
                                    <input type="text"/>
                                </p>
                                <p>   
                                    <label>Passwords <span>*</span></label>
                                    <input type="password"/>
                                </p>   
                                <div className="login_submit">
                                <button type="submit">login</button>
                                    
                                </div>

                            </form>
                        </div>    
                    </div>
                </div>
            </div>    
        </div>
        </>
    );
};

export default Login;