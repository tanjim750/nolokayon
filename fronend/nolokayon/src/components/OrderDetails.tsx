import { useEffect, useState } from 'react';
import Header from './header/Header';
import {useParams } from 'react-router-dom';
import Footer from './footer/Footer';
import apiUrl from './APIURL';
import fetchData from './fetchData';
import Loading from './Loading';
import ErrorPage from './ErrorPage';

const OrderDetails = () => {
    const { orderId } = useParams();

    const [OrderDetails, setOrderDetails] = useState<any>({})
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>(null);

    const url = apiUrl + 'order-details/'+orderId
    const fetchDetails = async() => {
        const result = await fetchData(url);
        if (result.status == 200){
            setOrderDetails(result)
            console.log(result);
        }else (
            setError(result.error)
        )
        setLoading(false);
    }

    useEffect(() => {
        fetchDetails();
    },[orderId]);

    
    if (loading) return <Loading/>
    if (error) return <ErrorPage error={error} />;

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
                                        ORDER NUMBER:
                                    </span>
                                    <div>
                                        <b>{OrderDetails.checkout.order_id}</b>
                                    </div>
                                    <hr />
                                </div>
                                <div className='col-12 col-lg-3 col-md-3'>
                                    <span>
                                        ORDER DATE:
                                    </span>
                                    <div>
                                        <b>{OrderDetails.created_at}</b>
                                    </div>
                                    <hr />
                                </div>
                                <div className='col-12 col-lg-3 col-md-3'>
                                    <span>
                                        TOTAL:
                                    </span>
                                    <div>
                                        <b>{OrderDetails.price}</b>
                                    </div>
                                    <hr />
                                </div>
                                <div className='col-12 col-lg-3 col-md-3'>
                                    <span>
                                        DELIVERY STATUS:
                                    </span>
                                    <div>
                                        <b style={{color: OrderDetails.checkout.delivery_status.toLowerCase() == 'cancelled' ? "red":"green"}}>
                                        {OrderDetails.checkout.delivery_status}
                                        </b>
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
                                        <span>{OrderDetails.product.name}</span>
                                    </div>
                                    
                                </div>
                                <div className='col-4'>
                                    <div>
                                        <span>{OrderDetails.product.price}</span>
                                    </div>
                                    
                                </div>

                                {OrderDetails.checkout.other_details && <>
                                    <div className='col-8'>
                                        <div>
                                            <span>{OrderDetails.checkout.other_details.split(":")[0]}</span>
                                        </div>
                                        
                                    </div>
                                    <div className='col-4'>
                                        <div>
                                            <span>{OrderDetails.checkout.other_details.split(":")[1]}</span>
                                        </div>
                                        
                                    </div>
                                </>}
                                <div className='col-8'>
                                    <div>
                                        <span>Quantity: </span>
                                    </div>
                                    
                                </div>
                                <div className='col-4'>
                                    <div>
                                        <span>{OrderDetails.quantity}</span>
                                    </div>
                                    
                                </div>
                                {OrderDetails.checkout.discount_applied != 0 && 
                                <>
                                    <div className='col-8'>
                                    <div>
                                        <span>Discount: </span>
                                    </div>
                                    </div>
                                    <div className='col-4'>
                                        <div>
                                            <span>-{OrderDetails.checkout.discount_applied} TK</span>
                                        </div>
                                    </div>
                                </>
                                }
                                
                                <div className='col-8'>
                                    <div>
                                        <span>Delivery Cost</span>
                                    </div>
                                    
                                </div>
                                <div className='col-4'>
                                    <div>
                                        <span>{OrderDetails.product.delivery_cost}</span>
                                    </div>
                                    
                                </div>
                                <div className='col-8'>
                                    <div>
                                        <span>Payment Method</span>
                                    </div>
                                    
                                </div>
                                <div className='col-4'>
                                    <div>
                                        <span>{OrderDetails.checkout.payment_status}</span>
                                    </div>
                                    
                                </div>
                                <hr />
                                <div className='col-8'>
                                    <div>
                                        <b>Total</b>
                                    </div>
                                    
                                </div>
                                <div className='col-4'>
                                    <div>
                                        <b>{OrderDetails.checkout.final_price}</b>
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