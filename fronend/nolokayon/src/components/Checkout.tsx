import { useContext, useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import { CartContext } from '../context/CartContext';
import fetchData from './fetchData';
import apiUrl from './APIURL';
import Loading from './Loading';
import ErrorPage from './ErrorPage';
import { UserInfo } from '../context/UserInfo';

const Checkout = () => {
    const { addToCart } = useContext(CartContext);
    const { visitor }:any = useContext(UserInfo);

    const param = useParams();
    const productId = param.id;

    const location = useLocation();
    const getQueryParams = (query:any) => {
      return Object.fromEntries(new URLSearchParams(query));
    };
    const queryParams = getQueryParams(location.search);

    const [quantity, setQuantity] = useState<number>(1);
    const [otherDetails, setOtherDetails] = useState<string | number | null>(null);
    const [product, setProduct] = useState<any>({})
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [discountPrice, setDiscountPrice] = useState<number | null>(null);
    const [deliveryCost , setDeliveryCost] = useState<number>(0);
    const [productPrice, setProductPrice] = useState<number>(0);
    const [error, setError] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(true);
    const [couponWarning, setCouponWarning] = useState<any>(null)
    const [isCouponValid, setIsCouponValid] = useState<boolean>(false)
    const [couponCode, setCouponCode] = useState<any>(null)
    const [checkoutError, setCheckoutError] = useState<string | null>(null)

    // manage checkout form
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        address1: '',
        address2: '',
        district: '',
        upazila: '',
        phone: '',
        email: '',
        order_note: '',
        quantity: quantity,
        product_id: productId,
        visitor_id: visitor.visitor_id,
        coupon_code: couponCode,
        other_details: otherDetails
    });

    const [inputFieldErrors, setInputFieldErrors] = useState<any>({});

    const validateForm = () => {
        const newErrors:any = {};

        if (!formData.fname) newErrors.fname = 'First name is required.';
        if (!formData.lname) newErrors.lname = 'Last name is required.';
        if (!formData.address1) newErrors.address1 = 'Street address is required.';
        if (!formData.district) newErrors.district = 'District is required.';
        if (!formData.upazila) newErrors.upazila = 'Upazila is required.';
        if (!formData.phone) newErrors.phone = 'Phone number is required.';
        else if (!/^\d{10,15}$/.test(formData.phone)) newErrors.phone = 'Phone number must be valid.';
        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email must be valid.';

        setInputFieldErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e:any) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const confirmCheckout = async () => {
        setLoading(true);
        const url = apiUrl + "checkout"
        const result = await fetchData(url,"POST", formData)
        
        if (result.status == 200){
            addToCart();
            const returnUrl = "/order-details/"+result.details.order_id;
            navigate(returnUrl)
        }else{
            setCheckoutError(result.error);
        }
        setLoading(false);
    };
    const navigate = useNavigate()
    const handleCheckout = (event:any) => {
        event.preventDefault();
        if(validateForm()) {
            confirmCheckout();
        }
        
    };

    useEffect(() => {
        setFormData({
            fname: formData.fname ? formData.fname:visitor.fname,
            lname: formData.lname ? formData.lname:visitor.lname,
            address1: formData.address1 ? formData.address1:visitor.address1,
            address2: formData.address2 ? formData.address2:visitor.address2,
            district: formData.district ? formData.district:visitor.district,
            upazila: formData.upazila ? formData.upazila:visitor.upazila,
            phone: formData.phone ? formData.phone:visitor.number,
            email: formData.email ? formData.email:visitor.email,
            order_note: formData.email ? formData.order_note:'',
            quantity: quantity,
            product_id: productId,
            visitor_id: visitor.visitor_id,
            coupon_code: isCouponValid ? couponCode:'',
            other_details: otherDetails
        });
    },[visitor,quantity,productId,isCouponValid,otherDetails]);

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
            const discount_price = result.discount_price;
            setTotalPrice(((discount_price*quantity)+deliveryCost));
            setCouponCode(code);
            setDiscountPrice((off_price*quantity));
        }else{
            setTotalPrice(((productPrice*quantity)+deliveryCost))
            setIsCouponValid(false);
            setCouponWarning(result.error);
            setDiscountPrice(null);
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
        if (queryParams.other != null && queryParams.other != '') setOtherDetails(queryParams.other);
    },[]);

    useEffect(() => {
        setTotalPrice(((productPrice*quantity)+deliveryCost))
        setCouponWarning(null);
        setIsCouponValid(false);
        
    },[product,deliveryCost,quantity,productPrice]);

    const handleCoupon = () => {
        if (couponCode){
            fetchCouponDetails(couponCode);
            
        }else{
            setTotalPrice(((productPrice*quantity)+deliveryCost))
            setCouponWarning("Invalid coupon code.");
            setIsCouponValid(false);
        }
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
                                    <form>
                                        <h3>Billing Details</h3>
                                        <input type="hidden" id="product_id" value={product.id} />
                                        <input type="hidden" id="quantity" value={quantity} />
                                        <input type="hidden" id="coupon" value={couponCode} />

                                        <div className="row">
                                            {/* First Name */}
                                            <div className="col-lg-6 mb-20">
                                                <label>
                                                    First Name <span>*</span>
                                                </label>
                                                <input
                                                    id="fname"
                                                    type="text"
                                                    value={formData.fname}
                                                    onChange={handleChange}
                                                />
                                                {inputFieldErrors.fname && <p className="error">{inputFieldErrors.fname}</p>}
                                            </div>

                                            {/* Last Name */}
                                            <div className="col-lg-6 mb-20">
                                                <label>
                                                    Last Name <span>*</span>
                                                </label>
                                                <input
                                                    id="lname"
                                                    type="text"
                                                    value={formData.lname}
                                                    onChange={handleChange}
                                                />
                                                {inputFieldErrors.lname && <p className="error">{inputFieldErrors.lname}</p>}
                                            </div>

                                            {/* Address 1 */}
                                            <div className="col-12 mb-20">
                                                <label>
                                                    Street address <span>*</span>
                                                </label>
                                                <input
                                                    id="address1"
                                                    type="text"
                                                    value={formData.address1}
                                                    onChange={handleChange}
                                                    placeholder="House number and street name"
                                                />
                                                {inputFieldErrors.address1 && <p className="error">{inputFieldErrors.address1}</p>}
                                            </div>

                                            {/* Address 2 */}
                                            <div className="col-12 mb-20">
                                                <input
                                                    id="address2"
                                                    type="text"
                                                    value={formData.address2}
                                                    onChange={handleChange}
                                                    placeholder="Apartment, suite, unit etc. (optional)"
                                                />
                                            </div>

                                            {/* District */}
                                            <div className="col-12 mb-20">
                                                <label>
                                                    District <span>*</span>
                                                </label>
                                                <input
                                                    id="district"
                                                    type="text"
                                                    value={formData.district}
                                                    onChange={handleChange}
                                                />
                                                {inputFieldErrors.district && <p className="error">{inputFieldErrors.district}</p>}
                                            </div>

                                            {/* Upazila */}
                                            <div className="col-12 mb-20">
                                                <label>
                                                    Upazila <span>*</span>
                                                </label>
                                                <input
                                                    id="upazila"
                                                    type="text"
                                                    value={formData.upazila}
                                                    onChange={handleChange}
                                                />
                                                {inputFieldErrors.upazila && <p className="error">{inputFieldErrors.upazila}</p>}
                                            </div>

                                            {/* Phone */}
                                            <div className="col-lg-6 mb-20">
                                                <label>
                                                    Phone<span>*</span>
                                                </label>
                                                <input
                                                    id="phone"
                                                    type="text"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                />
                                                {inputFieldErrors.phone && <p className="error">{inputFieldErrors.phone}</p>}
                                            </div>

                                            {/* Email */}
                                            <div className="col-lg-6 mb-20">
                                                <label>Email Address</label>
                                                <input
                                                    id="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                                {inputFieldErrors.email && <p className="error">{inputFieldErrors.email}</p>}
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

                                            {/* Order Notes */}
                                            <div className="col-12">
                                                <div className="order-notes">
                                                    <label>Order Notes</label>
                                                    <textarea
                                                        id="order_note"
                                                        value={formData.order_note}
                                                        onChange={handleChange}
                                                        placeholder="Notes about your order, e.g. special notes for delivery."
                                                    ></textarea>
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

                                            {product.other_details && otherDetails && product.other_details.details[otherDetails] && 
                                            <div className="cart_subtotal">
                                                <span>{product.other_details.name}</span>
                                                <p className="cart_amount">{product.other_details.details[otherDetails]}</p>
                                            </div>
                                            }

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
                                            {discountPrice && 
                                                <div className="cart_subtotal ">
                                                    <p>Discount</p>
                                                    <p className="cart_amount">
                                                       {discountPrice.toFixed(2)} Tk
                                                    </p>
                                                </div>
                                            }
                                            

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
                                                    
                                                        <input onChange={(e) => setCouponCode(e.target.value)} placeholder="Coupon code" type="text"/>
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
                                            {checkoutError && <h4 className='error'>{checkoutError}</h4> }
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