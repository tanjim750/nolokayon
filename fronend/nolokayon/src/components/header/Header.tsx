import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import fetchData from '../fetchData';
import apiUrl from '../APIURL';
import Loader from './Loader';
import { CartContext } from '../../context/CartContext';

const Header = () => {
    const {cartItems }:any = useContext(CartContext)
    const [checkoutSidebar, setCheckoutSidebar] = useState<boolean>(false);
    const [mobileMenu, setMobileMenu] = useState<boolean>(false);

    const [header, setHeader] = useState<any>(null);
    const [contact, setContact] = useState<any>(null);
    // const [footer, setFooter] = useState<any>(null);

    const [loading, setLoading] = useState<boolean>(true);

    const url = apiUrl+"contact";
    useEffect(() => {
        const fetchDataAsync = async () => {
            let result = await fetchData(url);
            
            if (result.status === 200) {
                if (result.header) setHeader(result.header);
                if (result.contact) setContact(result.contact);

                setLoading(false);
            }
        };
    
        // Call the async function
        fetchDataAsync();
    }, []);


    if (loading) return <Loader/>

    return (
        <>
            <div className="off_canvars_overlay">
                
            </div>
            <div className="Offcanvas_menu">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="canvas_open" onClick={() => setMobileMenu(true)}>
                                <a href="javascript:void(0)"><i className="ion-navicon"></i></a>
                            </div>
                            <div className={ mobileMenu ? "Offcanvas_menu_wrapper active":"Offcanvas_menu_wrapper"}>
                                <div className="canvas_close" onClick={() => setMobileMenu(false)}>
                                        <a href="javascript:void(0)"><i className="ion-android-close"></i></a>  
                                </div>
                                 
                                <div className="home_contact">
                                    <div className="contact_box">
                                        <label>{header.label1}</label>
                                        <p>{header.value1}</p>
                                    </div>
                                    <div className="contact_box">
                                        <label>{header.label2}</label>
                                        <p>{header.value2}</p>
                                    </div>
                                </div>
                                <div id="menu" className="text-left ">
                                    <ul className="offcanvas_main_menu">
                                        <li className="menu-item-has-children">
                                            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <NavLink to="/shop" className={({ isActive }) => (isActive ? 'active' : '')}>Shop</NavLink>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className="Offcanvas_footer">
                                    <span>
                                        {contact.email.map((mail:any) => (
                                            <a href={`mail:${mail}`}><i className="fa fa-envelope-o"></i>{mail}</a>
                                        ))}
                                    </span>
                                    <ul>
                                        {contact.facebook ? <li className="facebook"><a href={contact.facebook}><i className="fa fa-facebook"></i></a></li>:null}
                                        {contact.instagram ? <li className="linkedin"><a href={contact.instagram}><i className="fa fa-instagram"></i></a></li>:null}
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
                                    <label>{header.label1}</label>
                                    <p>{header.value1}</p>
                                </div>
                                <div className="contact_box">
                                    <label>{header.label2}</label>
                                    <p><a>{header.value2}</a></p>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-4">
                            <div className="logo">
                                <a href="index.html"><img src={header.logo} alt=""/></a>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-7 col-6">
                            <div className="middel_right">
            
                                <div className="cart_link">
                                    <a href="#" onClick={() => setCheckoutSidebar(true)}>
                                    <svg
                                    version="1.1"
                                    id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    height={"22px"}
                                    width={"22px"}
                                    viewBox="0 0 113.53 96.07"
                                    style={{ background: 'new 0 0 113.53 96.07' }}
                                    xmlSpace="preserve"
                                    >
                                    <style type="text/css">
                                        {`
                                        .st0 { fill-rule:evenodd; clip-rule:evenodd; fill:#4BA042; }
                                        .st1 { fill:#393939; }
                                        `}
                                    </style>
                                    <g>
                                        <path
                                        className="st1"
                                        d="M3.49,7.06C1.61,7.06,0,5.45,0,3.49C0,1.61,1.61,0,3.49,0h9.12c0.09,0,0.27,0,0.36,0 
                                        c3.22,0.09,6.08,0.71,8.49,2.23c2.68,1.7,4.65,4.29,5.72,8.13c0,0.09,0,0.18,0.09,0.27l0.89,3.57h34.01 
                                        c-6.79,16.17-0.71,38.05,18.25,43.97H39.95c1.25,4.65,2.5,7.15,4.2,8.31c2.06,1.34,5.63,1.43,11.62,1.34h0.09l0,0h40.4 
                                        c1.97,0,3.48,1.61,3.48,3.49c0,1.96-1.61,3.48-3.48,3.48h-40.4l0,0c-7.42,0.09-11.98-0.09-15.64-2.5 
                                        c-3.75-2.5-5.72-6.79-7.69-14.57l0,0L20.56,12.42c0-0.09,0-0.09-0.09-0.18c-0.54-1.97-1.43-3.31-2.68-4.02 
                                        c-1.25-0.8-2.95-1.16-4.92-1.16c-0.09,0-0.18,0-0.27,0H3.49L3.49,7.06L3.49,7.06z M85.79,78.91c4.74,0,8.58,3.84,8.58,8.58 
                                        c0,4.74-3.84,8.58-8.58,8.58s-8.58-3.84-8.58-8.58C77.22,82.76,81.06,78.91,85.79,78.91L85.79,78.91L85.79,78.91z M48.17,78.91 
                                        c4.74,0,8.58,3.84,8.58,8.58c0,4.74-3.84,8.58-8.58,8.58c-4.74,0-8.58-3.84-8.58-8.58C39.59,82.76,43.43,78.91,48.17,78.91 
                                        L48.17,78.91L48.17,78.91z"
                                        />
                                        <path
                                        className="st0"
                                        d="M91.02,5.28c12.43,0,22.51,10.08,22.51,22.51c0,12.43-10.08,22.51-22.51,22.51 
                                        C61.42,50.3,61.42,5.28,91.02,5.28L91.02,5.28L91.02,5.28z M81.06,28.39c0.3-1.75,2.3-2.73,3.88-1.78c0.14,0.09,0.28,0.19,0.41,0.3 
                                        l0.01,0.01c0.71,0.68,1.5,1.39,2.28,2.08l0.68,0.6l8-8.39c0.48-0.5,0.83-0.83,1.55-0.99c2.45-0.54,4.18,2.46,2.45,4.29L90.34,35 
                                        c-0.94,1-2.62,1.09-3.63,0.13c-0.58-0.53-1.21-1.08-1.84-1.64c-1.1-0.96-2.22-1.94-3.14-2.9C81.17,30.05,80.93,29.14,81.06,28.39 
                                        L81.06,28.39L81.06,28.39L81.06,28.39z"
                                        />
                                    </g>
                                    </svg>
                                        <span className="cart_text_quantity"> Checkout</span> <i className="fa fa-angle-down"></i></a>
                                    <span className="cart_quantity">{cartItems.length}</span>
                                    <div className={checkoutSidebar ? "mini_cart active":"mini_cart"}>
                                        <div className="cart_close">
                                            <div className="cart_text">
                                                <h3>Checkout History</h3>
                                            </div>
                                            <div className="mini_cart_close" onClick={() => setCheckoutSidebar(false)}>
                                                <a href="javascript:void(0)"><i className="ion-android-close"></i></a>
                                            </div>
                                        </div>
                                        {cartItems.length == 0 ? <h5> No Items Found </h5>:""}
                                        { cartItems.map((item:any) =>
                                            <div className="cart_item">
                                                <div className="cart_img">
                                                    <NavLink to={`/order-details/${item.checkout.order_id}`}><img src={item.product.image} alt=""/></NavLink>
                                                </div>
                                                <div className="cart_info">
                                                    <NavLink to={`/order-details/${item.checkout.order_id}`}>{item.product.name}</NavLink>

                                                    <span className="quantity">Qty: {item.quantity}</span>
                                                    <span className="price_cart">{item.price}</span>
                                                    <b className={item.checkout.delivery_status == 'cancelled' ? 'text_red':'text_green'}>{item.checkout.delivery_status}</b>
                                                </div>
                                            </div>
                                        )}
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
                                <a href="index.html"><img src={header.logo} alt=""/></a>
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
