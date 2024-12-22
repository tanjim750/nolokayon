import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <>
            <div className="off_canvars_overlay">
                
            </div>
            <div className="Offcanvas_menu">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="canvas_open">
                                <a href="javascript:void(0)"><i className="ion-navicon"></i></a>
                            </div>
                            <div className="Offcanvas_menu_wrapper">
                                <div className="canvas_close">
                                        <a href="javascript:void(0)"><i className="ion-android-close"></i></a>  
                                </div>
                                <div className="welcome_text">
                                    <p>Free shipping on all domestic orders with coupon code <span>“Watches2018”</span></p>
                                </div>
                                
                                <div className="top_right text-right">
                                    <ul>
                                        <li className="language"><a href="index.html#"> English <i className="ion-chevron-down"></i></a>
                                            <ul className="dropdown_language">
                                                <li><a href="index.html#"> French</a></li>
                                                <li><a href="index.html#">Germany</a></li>
                                                <li><a href="index.html#">Japanese</a></li>
                                            </ul>
                                        </li>
                                            <li className="currency"><a href="index.html#">USD <i className="ion-chevron-down"></i></a>
                                            <ul className="dropdown_currency">
                                                <li><a href="index.html#">EUR – Euro</a></li>
                                                <li><a href="index.html#">GBP – British Pound</a></li>
                                                <li><a href="index.html#">INR – India Rupee</a></li>
                                            </ul>
                                        </li>
                                        <li className="top_links"><a href="index.html#">My Account <i className="ion-chevron-down"></i></a>
                                            <ul className="dropdown_links">
                                                <li><a href="checkout.html">Checkout </a></li>
                                                <li><a href="my-account.html">My Account </a></li>
                                                <li><a href="cart.html">Shopping Cart</a></li>
                                                <li><a href="wishlist.html">Wishlist</a></li>
                                            </ul>
                                        </li> 
                                    </ul>
                                </div> 
                                <div className="home_contact">
                                    <div className="contact_box">
                                        <label>Location</label>
                                        <p>Your address goes here.</p>
                                    </div>
                                    <div className="contact_box">
                                        <label>Call free</label>
                                        <p><a href="tel:0123456789">0123456789</a></p>
        
                                    </div>
                                </div>
                                <div id="menu" className="text-left ">
                                    <ul className="offcanvas_main_menu">
                                        <li className="menu-item-has-children active">
                                            <a href="index.html#">Home</a>
                                            <ul className="sub-menu">
                                                <li><a href="index.html">Home 1</a></li>
                                                <li><a href="index-2.html">Home 2</a></li>
                                                <li><a href="index-3.html">Home 3</a></li>
                                                <li><a href="index-4.html">Home 4</a></li>
                                                <li><a href="index-5.html">Home 5</a></li>
                                                <li><a href="index-6.html">Home 6</a></li>
                                                <li><a href="index-7.html">Home 7</a></li>
                                                <li><a href="index-8.html">Home 8</a></li>
                                                <li><a href="index-9.html">Home 9</a></li>
                                                <li><a href="index-10.html">Home 10</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="index.html#">Shop</a>
                                            <ul className="sub-menu">
                                                <li className="menu-item-has-children">
                                                    <a href="index.html#">Shop Layouts</a>
                                                    <ul className="sub-menu">
                                                        <li><a href="shop.html">shop</a></li>
                                                        <li><a href="shop-fullwidth.html">Full Width</a></li>
                                                        <li><a href="shop-fullwidth-list.html">Full Width list</a></li>
                                                        <li><a href="shop-right-sidebar.html">Right Sidebar </a></li>
                                                        <li><a href="shop-right-sidebar-list.html"> Right Sidebar list</a></li>
                                                        <li><a href="shop-list.html">List View</a></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children">
                                                    <a href="index.html#">other Pages</a>
                                                    <ul className="sub-menu">
                                                        <li><a href="portfolio.html">portfolio</a></li>
                                                        <li><a href="portfolio-details.html">portfolio details</a></li>
                                                        <li><a href="cart.html">cart</a></li>
                                                        <li><a href="checkout.html">Checkout</a></li>
                                                        <li><a href="my-account.html">my account</a></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children">
                                                    <a href="index.html#">Product Types</a>
                                                    <ul className="sub-menu">
                                                        <li><a href="product-details.html">product details</a></li>
                                                        <li><a href="product-sidebar.html">product sidebar</a></li>
                                                        <li><a href="product-grouped.html">product grouped</a></li>
                                                        <li><a href="variable-product.html">product variable</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="index.html#">blog</a>
                                            <ul className="sub-menu">
                                                <li><a href="blog.html">blog</a></li>
                                                    <li><a href="blog-details.html">blog details</a></li>
                                                <li><a href="blog-fullwidth.html">blog fullwidth</a></li>
                                                <li><a href="blog-left.html">blog left</a></li>
                                                <li><a href="blog-none-sidebar.html">no sidebar</a></li>
                                                <li><a href="blog-right.html">blog right</a></li>
                                                <li><a href="blog-sticky.html">blog sticky</a></li>
                                            </ul>
        
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="index.html#">pages </a>
                                            <ul className="sub-menu">
                                                <li><a href="about.html">About Us</a></li>
                                                <li><a href="services.html">services</a></li>
                                                <li><a href="faq.html">Frequently Questions</a></li>
                                                <li><a href="contact.html">contact</a></li>
                                                <li><a href="login.html">login</a></li>
                                                <li><a href="wishlist.html">Wishlist</a></li>
                                                <li><a href="404.html">Error 404</a></li>
                                                <li><a href="compare.html">compare</a></li>
                                                <li><a href="privacy-policy.html">privacy policy</a></li>
                                                <li><a href="coming-soon.html">coming soon</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="my-account.html">my account</a>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="about.html">About Us</a>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="contact.html"> Contact Us</a> 
                                        </li>
                                    </ul>
                                </div>
                                <div className="Offcanvas_footer">
                                    <span><a href="index.html#"><i className="fa fa-envelope-o"></i> demo@example.com</a></span>
                                    <ul>
                                        <li className="facebook"><a href="index.html#"><i className="fa fa-facebook"></i></a></li>
                                        <li className="twitter"><a href="index.html#"><i className="fa fa-twitter"></i></a></li>
                                        <li className="pinterest"><a href="index.html#"><i className="fa fa-pinterest-p"></i></a></li>
                                        <li className="google-plus"><a href="index.html#"><i className="fa fa-google-plus"></i></a></li>
                                        <li className="linkedin"><a href="index.html#"><i className="fa fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <header className="header_area">
        
            <div className="header_middel">
                <div className="container">
                    <div className="row align-items-center">
                        
                        <div className="col-lg-5">
                            <div className="home_contact">
                                <div className="contact_box">
                                    <label>Location</label>
                                    <p>Your address goes here.</p>
                                </div>
                                <div className="contact_box">
                                    <label>Call free</label>
                                    <p><a href="tel:0123456789">0123456789</a></p>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-4">
                            <div className="logo">
                                <a href="index.html"><img src="assets/img/logo/logo.png" alt=""/></a>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-7 col-6">
                            <div className="middel_right">
                                <div className="search_btn">
                                    <a href="index.html#"><i className="ion-ios-search-strong"></i></a>
                                    <div className="dropdown_search">
                                        <form action="index.html#">
                                            <input placeholder="Search product..." type="text"/>
                                            <button type="submit"><i className="ion-ios-search-strong"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header_bottom sticky-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="main_menu_inner">
                            <div className="logo_sticky">
                                <a href="index.html"><img src="assets/img/logo/logo.png" alt=""/></a>
                            </div>
                                <div className="main_menu"> 
                                    <nav>  
                                        <ul>
                                        
                                            <li>
                                                <NavLink 
                                                 to="/"
                                                 className={({ isActive }) => (isActive ? 'active' : '')}
                                                 >
                                                 Home
                                                 </NavLink>
                                            </li>
                                            <li>
                                                <NavLink 
                                                 to="/shop"
                                                 className={({ isActive }) => (isActive ? 'active' : '')}
                                                 >
                                                 Shop
                                                 </NavLink>
                                            </li>
                                            <li>
                                                <NavLink 
                                                 to="/about"
                                                 className={({ isActive }) => (isActive ? 'active' : '')}
                                                 >
                                                 About
                                                 </NavLink>
                                            </li>
                                            <li>
                                            <NavLink 
                                                 to="/contact"
                                                 className={({ isActive }) => (isActive ? 'active' : '')}
                                                 >
                                                 Contact
                                                 </NavLink>
                                            </li>
                                        </ul>  
                                    </nav> 
                                </div>
                            </div> 
                        </div>
                    
                    </div>
                </div>
            </div>
        </header>
        </>
    );
};

export default Header;
