import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Footer from './footer/Footer';
import Header from './header/Header';
import SingleProduct from './SingleProduct';
import fetchData from './fetchData';
import apiUrl from './APIURL';
import Loading from './Loading';
import ErrorPage from './ErrorPage';

const ProductDetails = () => {
    const param = useParams();
    const productId = param.id;

    const [quantity, setQuantity] = useState<number>(1);
    const [currentImage, setCurrentImage] = useState<any>(null);
    const [product, setProduct] = useState({})
    const [error, setError] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(true);

    const url = apiUrl + "/product-details/"+productId
    const fetchDataAsync = async () => {
        let result = await fetchData(url);
        
        if (result.status === 200) {
            if (result.product) setProduct(result.product);
        } else {
            setError(result.error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchDataAsync();
        setCurrentImage(product.image)
    },[]);

    const handleImageClick = (event:any) => {
        const imgSrc = event.target.src;
        setCurrentImage(imgSrc);
    };

    if (loading) return <Loading/>
    if (error) return <ErrorPage error={error} />;

    return (
        <>
        <Header/>

        <div className="breadcrumbs_area product_bread">
            <div className="container">   
                <div className="row">
                    <div className="col-12">
                        <div className="breadcrumb_content">
                            <ul>
                                <li><NavLink to="/">home</NavLink></li>
                                <li>{">"}</li>
                                <li><NavLink to="/shop">shop</NavLink></li>
                                <li>{">"}</li>
                                <li><NavLink to="/shop">{product.category.name}</NavLink></li>
                                <li>{">"}</li>
                                <li>product details</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>         
        </div>

        <div className="product_details">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                    <div className="product-details-tab">

                            <div id="img-1" className="zoomWrapper single-zoom">
                                <a>
                                    <img id="zoom1" src={currentImage? currentImage:product.image} alt="big-1"/>
                                </a>
                            </div>

                            <div className="single-zoom-thumb">
                                <ul className="s-tab-zoom owl-carousel single-product-active" style={{display:"flex"}}>
                                    <li>
                                        <a className="elevatezoom-gallery active">
                                            <img src={product.image} height={"122px"} width={"122px"} onClick={handleImageClick} alt="zo-th-1"/>
                                        </a>
                                    </li>
                                    {product.gallery.map((img:any) =>
                                        <li>
                                            <a className="elevatezoom-gallery active">
                                                <img src={img} height={"122px"} width={"122px"} onClick={handleImageClick} alt="zo-th-1"/>
                                            </a>

                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-6 col-md-6">
                        <div className="product_d_right">
                        <form action="product-details.html#">
                            
                                <h1>{product.name}</h1>
                                <div className=" product_ratting">
                                    <ul>
                                        <li><a href="product-details.html#"><i className="fa fa-star"></i></a></li>
                                        <li><a href="product-details.html#"><i className="fa fa-star"></i></a></li>
                                        <li><a href="product-details.html#"><i className="fa fa-star"></i></a></li>
                                        <li><a href="product-details.html#"><i className="ion-ios-star-outline"></i></a></li>
                                        <li><a href="product-details.html#"><i className="ion-ios-star-outline"></i></a></li>
                                        <li><a href="product-details.html#"> (customer review ) </a></li>
                                    </ul>
                                </div>
                                <div className="product_price">
                                    { product.discount_price ? <span className="current_price">{product.discount_price}</span>:<span className="current_price">{product.price}</span>}
                                    { product.discount_price ? <span className="old_price">{product.price}</span>:null}
                                </div>

                                <div className="product_variant quantity">
                                    <label>quantity</label>
                                    <ul>
                                        <li className={quantity > 1 ? "":"disabled"} onClick={() => quantity > 1? setQuantity(quantity-1):null}>-</li>
                                        <li>{quantity}</li>
                                        <li className={quantity <5 ? "":"disabled"} onClick={() => quantity <5 ? setQuantity(quantity+1):null}>+</li>
                                    </ul>
                                </div>
                                <div className="product_variant quantity">
                                    <NavLink to={`/checkout/${productId}?name=${product.name}&catagory=${product.category.name}?quantity=${quantity}`} className="button">Buy Now</NavLink>
                                </div>
                                <div className=" product_d_action">
                                <ul>
                                    <li><a href="product-details.html#" title="Add to wishlist">+ Add to Wishlist</a></li>
                                    <li><a href="product-details.html#" title="Add to wishlist">+ Compare</a></li>
                                </ul>
                                </div>
                                <div className="product_meta">
                                    <span>Category: <a href="product-details.html#">{product.category.name}</a></span>
                                </div>
                                
                            </form>
                            <div className="priduct_social">
                                <ul>
                                    <li><a href="product-details.html#" title="facebook"><i className="fa fa-facebook"></i></a></li>           
                                    <li><a href="product-details.html#" title="twitter"><i className="fa fa-twitter"></i></a></li>           
                                    <li><a href="product-details.html#" title="pinterest"><i className="fa fa-pinterest"></i></a></li>           
                                    <li><a href="product-details.html#" title="google +"><i className="fa fa-google-plus"></i></a></li>        
                                    <li><a href="product-details.html#" title="linkedin"><i className="fa fa-linkedin"></i></a></li>        
                                </ul>      
                            </div>

                        </div>
                    </div>
                </div>
            </div>    
        </div>

        <div className="product_d_info">
            <div className="container">   
                <div className="row">
                    <div className="col-12">
                        <div className="product_d_inner">   
                            <div className="product_info_button">    
                                <ul className="nav" role="tablist">
                                    <li >
                                        <a className="active" data-bs-toggle="tab" href="product-details.html#info" role="tab" aria-controls="info" aria-selected="false">Description</a>
                                    </li>
                                    
                                </ul>
                            </div>
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="info" role="tabpanel" >
                                    <div className="product_info_content">
                                        <p>{product.description}</p>
                                    </div>    
                                </div>
                            </div>
                        </div>     
                    </div>
                </div>
            </div>    
        </div>  

        <section className="product_section  p_section1">
            <div className="container">
                <div className="row">
                <div className="col-12">
                        <div className="section_title">
                            <h2>Related products</h2>
                        </div> 
                    </div>  
                    <div className="col-12">
                        <div className="product_area ">
                            <div className="product_container bottom">
                                <div className="custom-row product_row1">
                                    <SingleProduct/>
                                    <SingleProduct/>
                                    <SingleProduct/>
                                    <SingleProduct/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </section>

        <Footer/>
        </>
    );
};

export default ProductDetails;