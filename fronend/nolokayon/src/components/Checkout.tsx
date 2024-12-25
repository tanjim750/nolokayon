import React, { useContext, useEffect, useRef, useState } from 'react';
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import { CartContext } from '../context/CartContext';
import fetchData from './fetchData';
import apiUrl from './APIURL';
import Loading from './Loading';
import ErrorPage from './ErrorPage';

const Checkout = () => {
    const { addToCart } = useContext(CartContext);
    const param = useParams();
    const productId = param.id;

    const location = useLocation();
    const getQueryParams = (query:any) => {
      return Object.fromEntries(new URLSearchParams(query));
    };
    const queryParams = getQueryParams(location.search);

    const [quantity, setQuantity] = useState<number>(1);
    const [product, setProduct] = useState({})
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [deliveryCost , setDeliveryCost] = useState<number>(0);
    const [productPrice, setProductPrice] = useState<number>(0);
    const [error, setError] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(true);
    const [couponWarning, setCouponWarning] = useState<any>(null)
    const [isCouponValid, setIsCouponValid] = useState<boolean>(false)

    const couponCode = useRef();
    const url = apiUrl + "/product-details/"+productId
    const couponUrl = apiUrl + "/discount-coupon"

    const fetchCouponDetails = async (code:any) => {
        const jsonData = {
            "product_id": productId,
            "coupon": code,
        }
        let result = await fetchData(couponUrl,"POST",jsonData);

        if(result.status == 200){
            setIsCouponValid(true);
            setCouponWarning(result.message);

            const off_price = result.off_price;
            setTotalPrice(((off_price*quantity)+deliveryCost));
        }else{
            setTotalPrice(((productPrice*quantity)+deliveryCost))
            setIsCouponValid(false);
            setCouponWarning(result.error);
        }
    };

    const fetchDataAsync = async () => {
        let result = await fetchData(url);
        
        if (result.status === 200) {
            if (result.product) {
                setProduct(result.product)
                if (result.product.discount_price) setProductPrice(result.product.discount_price);
                else setProductPrice(result.product.price);
                setDeliveryCost(result.product.delivery_cost);
            };
        } else {
            setError(result.error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchDataAsync();
        if (queryParams.quantity) setQuantity(parseInt(queryParams.quantity));
    },[]);

    useEffect(() => {
        setTotalPrice(((productPrice*quantity)+deliveryCost))
        setCouponWarning(null);
        setIsCouponValid(false);
        
    },[product,deliveryCost,quantity,productPrice]);

    const handleCoupon = () => {
        const code = couponCode.current?.value;
        if (code){
            const result = fetchCouponDetails(code);
        }else{
            setTotalPrice(((productPrice*quantity)+deliveryCost))
            setCouponWarning("Invalid coupon code.");
            setIsCouponValid(false);
        }
    };

    const navigate = useNavigate()
    const handleCheckout = (event:any) => {
        event.preventDefault();
        addToCart(product);
        navigate("/order-details/1")
    };

    if (loading) return <Loading/>
    if (error) return <ErrorPage error={error} />;

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
                                    <li><NavLink to="/">Home</NavLink></li>
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
                                                <span>{product.name}</span>
                                                <p className="cart_amount">{productPrice} Tk</p>
                                            </div>

                                            <div className="cart_subtotal">
                                                <p>Quantity: </p>

                                                <p className="cart_amount">
                                                    <button 
                                                    style={{marginRight:"15px"}}
                                                    
                                                    disabled={quantity > 1 ? false:true}
                                                    onClick={() => setQuantity(quantity-1)}>-</button>
                                                    {quantity}
                                                    
                                                    <button style={{marginLeft:"15px"}} 
                                                    disabled={quantity < 5 && quantity < product.stock_quantity  ? false:true}
                                                    onClick={() => setQuantity(quantity+1)}>+</button>
                                                    </p>
                                            </div>
                                            <div className="cart_subtotal ">
                                                <p>Delivery</p>
                                                <p className="cart_amount">
                                                    {deliveryCost <= 0 ?  <span style={{color:"#c09578"}}>No Charge</span>:`${deliveryCost} Tk`}
                                                </p>
                                            </div>
                                            <a href="#">Calculate Total</a>

                                            <div className="cart_subtotal">
                                                <p>Total</p>
                                                <p className="cart_amount">{totalPrice.toFixed(2)}</p>
                                            </div>
                                        
                                        </div>
                                        
                                    </div>
                                    <div className="user-actions">
                                            <div id="checkout_coupon" className="collapse show" data-parent="#accordion">
                                                <div className="checkout_info">
                                                    
                                                        <input ref={couponCode} placeholder="Coupon code" type="text"/>
                                                        <button type="button" onClick={handleCoupon}>Apply coupon</button>
                                                    
                                                    { couponWarning ? <div><b style={{color: isCouponValid ? "green":"red"}}>{couponWarning}</b></div>:null}
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