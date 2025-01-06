import { useEffect, useState } from 'react';
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
    const [product, setProduct] = useState<any>({})
    const [allProduct, setAllProduct] = useState<any[]>([])
    const [otherDetails, setOtherDetails] = useState<any>('0')
    const [error, setError] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(true);

    const url = apiUrl + "/product-details/"+productId
    const productsUrl = apiUrl + "products";
    const fetchDataAsync = async () => {
        let result = await fetchData(url);

        if (result.status === 200) {
            if (result.product) setProduct(result.product);
            console.log(result.product);
        } else {
            setError(result.error);
        }
        setLoading(false);
    };
    const fetchProducts = async () => {
        let result = await fetchData(productsUrl);
        
        if (result.status === 200) {
            let sortedProducts:any[] = result.products;
            sortedProducts.sort((a, b) => {
                if (a.category.name === product.category.name && b.category.name !== product.category.name) {
                  return -1; // `a` comes before `b`
                }
                if (a.category.name !== product.category.name && b.category.name === product.category.name) {
                  return 1; // `b` comes before `a`
                }
                return 0; // No change in order
              });
            
            setAllProduct([...sortedProducts])
        }
    };

    useEffect(() => {
        fetchDataAsync();
        setCurrentImage(product.image)
    },[]);

    useEffect(() => {
        if(product){
            fetchProducts();
        }
    },[product]);

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
                                        <li className={quantity < 5 && quantity < product.stock_quantity ? "":"disabled"} onClick={() => quantity < 5 && quantity < product.stock_quantity ? setQuantity(quantity+1):null}>+</li>
                                    </ul>
                                </div>
                                <div className="product_variant quantity">
                                    <NavLink to={`/checkout/${productId}?name=${product.name}&catagory=${product.category.name}&quantity=${quantity}&other=${otherDetails}`} className="button">Buy Now</NavLink>
                                </div>
                                <div className=" product_d_action">
                                <ul>
                                    <div className='product_meta'>
                                        {product.other_details ? <span>{product.other_details.name}</span>:null}
                                        {product.other_details ? product.other_details.details.map((detail:any,idx:number) => (
                                            <li><input type="radio" name='otherdetails' id={`otherdetails-${idx}`} defaultChecked={idx === 0} onChange={() => setOtherDetails(idx)} /> <label htmlFor={`otherdetails-${idx}`}>{detail}</label></li>
                                        )):null}
                                    </div>
                                </ul>
                                </div>
                                <div className="product_meta">
                                    <span>Category: <a href="product-details.html#">{product.category.name}</a></span>
                                </div>
                                
                            </form>
                            <div className="priduct_social">
                                <ul>
                                    {product.facebook ? <li><a target='_blank' href={product.facebook} title="facebook"><i className="fa fa-facebook"></i></a></li>:null}
                                    {product.instagram ? <li><a target='_blank' href={product.instagram} title="instagram"><i className="fa fa-instagram"></i></a></li>:null}
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
                                    {allProduct.slice(0,8).map((p:any) => (
                                        <SingleProduct props={{product: p,column:"col-lg-3 col-md-4 col-sm-6"}}/>
                                    ))}
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