import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
    const { addToCart } = useContext(CartContext);

    const product = {
        id: 1,
        name: "Golden Ring",
        image: "/assets/img/s-product/product.jpg",
        quantity: 1,
        price: 223
    }

    const navigate = useNavigate()
    const handleCheckout = (event:any) => {
        event.preventDefault();
        addToCart(product);
        navigate("/order-details/1")
    };

    return (
        <>
            <Header/>

            <div className="breadcrumbs_area">
                <div className="container">   
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb_content">
                                <h3>Checkout</h3>
                                <ul>
                                    <li><NavLink to="/">home</NavLink></li>
                                    <li>&gt;</li>
                                    <li>Checkout</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>         
            </div>

            <div className="Checkout_section" id="accordion">
                <div className="container">
                        <div className="checkout_form">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <form action="#">
                                        <h3>Billing Details</h3>
                                        <div className="row">

                                            <div className="col-lg-6 mb-20">
                                                <label>First Name <span>*</span></label>
                                                <input type="text"/>    
                                            </div>
                                            <div className="col-lg-6 mb-20">
                                                <label>Last Name  <span>*</span></label>
                                                <input type="text"/> 
                                            </div>

                                            <div className="col-12 mb-20">
                                                <label>Street address  <span>*</span></label>
                                                <input placeholder="House number and street name" type="text"/>     
                                            </div>
                                            <div className="col-12 mb-20">
                                                <input placeholder="Apartment, suite, unit etc. (optional)" type="text"/>     
                                            </div>
                                            <div className="col-12 mb-20">
                                                <label>Town / City <span>*</span></label>
                                                <input type="text"/>    
                                            </div> 
                                            <div className="col-12 mb-20">
                                                <label>State / County <span>*</span></label>
                                                <input type="text"/>    
                                            </div> 
                                            <div className="col-lg-6 mb-20">
                                                <label>Phone<span>*</span></label>
                                                <input type="text"/> 

                                            </div> 
                                            <div className="col-lg-6 mb-20">
                                                <label> Email Address </label>
                                                <input type="email"/> 

                                            </div> 
                                            {/* <div className="col-12 mb-20">
                                                <input id="account" type="checkbox" data-bs-target="createp_account"/>
                                                <label htmlFor="account" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-controls="collapseOne">Create an account?</label>

                                                <div id="collapseOne" className="collapse one" data-parent="#accordion">
                                                    <div className="card-body1">
                                                    <label> Account password   <span>*</span></label>
                                                        <input placeholder="password" type="password"/>  
                                                    </div>
                                                </div>
                                            </div> */}
                                            <div className="col-12">
                                                <div className="order-notes">
                                                    <label htmlFor="order_note">Order Notes</label>
                                                    <textarea id="order_note" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                                                </div>    
                                            </div>     	    	    	    	    	    	    
                                        </div>
                                    </form>    
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="coupon_code right">
                                        <h3>Checkou Details</h3>
                                        <div className="coupon_inner">
                                        <div className="cart_subtotal">
                                            <p>Subtotal</p>
                                            <p className="cart_amount">£215.00</p>
                                        </div>
                                        <div className="cart_subtotal ">
                                            <p>Shipping</p>
                                            <p className="cart_amount"><span>Flat Rate:</span> £255.00</p>
                                        </div>
                                        <a href="#">Calculate shipping</a>

                                        <div className="cart_subtotal">
                                            <p>Total</p>
                                            <p className="cart_amount">£215.00</p>
                                        </div>
                                        
                                        </div>
                                        
                                    </div>
                                    <div className="user-actions">
                                            <div id="checkout_coupon" className="collapse show" data-parent="#accordion">
                                                <div className="checkout_info">
                                                    
                                                        <input placeholder="Coupon code" type="text"/>
                                                        <button type="button">Apply coupon</button>
                                                    
                                                </div>
                                            </div>    
                                        </div>
                                        
                                        <div className="payment_method">
                                        
                                            <div className="panel-default">
                                                <input id="payment_defult" name="check_method" type="radio" checked data-bs-target="createp_account"/>
                                                <label htmlFor="payment_defult" data-bs-toggle="collapse" data-bs-target="#collapsedefult" aria-controls="collapsedefult">Cash On delivery <img src="assets/img/icon/papyel.png" alt=""/></label>

                                                <div id="collapsedefult" className="collapse one" data-parent="#accordion">
                                                    <div className="card-body1">
                                                    <p>Cash On Delivery; you can pay with your credit card if you don’t have a PayPal account.</p> 
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order_button">
                                                <button type="button" onClick={handleCheckout}>Confirm Checkout</button> 
                                            </div>    
                                        </div> 
                                </div>
                                
                            </div> 
                        </div> 
                    </div>       
                </div>
                
            <Footer/>
        </>
    );
};

export default Checkout;