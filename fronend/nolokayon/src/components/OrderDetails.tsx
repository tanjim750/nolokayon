import React from 'react';
import Header from './header/Header';
import { NavLink } from 'react-router-dom';
import Footer from './footer/Footer';

const OrderDetails = () => {
    return (
        <>
        <Header/>
        <div className="order-body">
            <div className="order-details">
                <div className="breadcrumbs_area">
                    <div className="container">   
                        <div className="row">
                            <div className="col-12">
                                <div className="breadcrumb_content">
                                    <h3>Thank You</h3>
                                    <ul>
                                        <li><h4 style={{color:"green"}}>Your Order Has been received</h4></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>         
                </div>

                <div className="container">
                    <div className="row bgcolor-light">
                        <div className="col-12">
                            <div className="row">
                                <div className='col-12 col-lg-3 col-md-3'>
                                    <span>
                                        ORDER NUMBER
                                    </span>
                                    <div>
                                        <b>26353</b>
                                    </div>
                                    <hr />
                                </div>
                                <div className='col-12 col-lg-3 col-md-3'>
                                    <span>
                                        ORDER NUMBER
                                    </span>
                                    <div>
                                        <b>26353</b>
                                    </div>
                                    <hr />
                                </div>
                                <div className='col-12 col-lg-3 col-md-3'>
                                    <span>
                                        ORDER NUMBER
                                    </span>
                                    <div>
                                        <b>26353</b>
                                    </div>
                                    <hr />
                                </div>
                                <div className='col-12 col-lg-3 col-md-3'>
                                    <span>
                                        ORDER NUMBER
                                    </span>
                                    <div>
                                        <b>26353</b>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row bgcolor-light">
                        <div className="col-12">
                            <div className='col-12' style={{backgroundColor:"white",padding:"15px 0 5px 10px", marginBottom:"10px"}}>
                                <h4 style={{color:"green"}}>Order Details</h4>
                            </div>
                            <div className="row">
                                <div className='col-8'>
                                    <div>
                                        <b>Product</b>
                                    </div>
                                    <hr />
                                </div>
                                <div className='col-4'>
                                    <div>
                                        <b>Total</b>
                                    </div>
                                    <hr />
                                    
                                </div>
                                <div className='col-8'>
                                    <div>
                                        <span>Product name</span>
                                    </div>
                                    
                                </div>
                                <div className='col-4'>
                                    <div>
                                        <span>29966 tk</span>
                                    </div>
                                    
                                </div>
                                <div className='col-8'>
                                    <div>
                                        <span>Quantity: </span>
                                    </div>
                                    
                                </div>
                                <div className='col-4'>
                                    <div>
                                        <span>3</span>
                                    </div>
                                    
                                </div>
                                <div className='col-8'>
                                    <div>
                                        <span>Subtotal: </span>
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div>
                                        <span>654 tk</span>
                                    </div>
                                </div>
                                <div className='col-8'>
                                    <div>
                                        <span>Delivery</span>
                                    </div>
                                    
                                </div>
                                <div className='col-4'>
                                    <div>
                                        <span>70 tk</span>
                                    </div>
                                    
                                </div>
                                <div className='col-8'>
                                    <div>
                                        <span>Payment Method</span>
                                    </div>
                                    
                                </div>
                                <div className='col-4'>
                                    <div>
                                        <span>Cash on delivery</span>
                                    </div>
                                    
                                </div>
                                <hr />
                                <div className='col-8'>
                                    <div>
                                        <span>Total</span>
                                    </div>
                                    
                                </div>
                                <div className='col-4'>
                                    <div>
                                        <span>3966</span>
                                    </div>
                                    
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

export default OrderDetails;