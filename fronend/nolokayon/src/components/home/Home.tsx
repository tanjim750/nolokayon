import React, { useEffect, useState } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Loading from '../Loading';
import ErrorPage from '../ErrorPage';
import { NavLink } from 'react-router-dom';
import SingleProduct from '../SingleProduct';
import fetchData from '../fetchData';


const Home = () => {
    const [data, setData] = useState<any>(null);
    const [header, setHeader] = useState<any>(null);
    const [hero, setHero] = useState<any>(null);
    const [banners, setBanner] = useState<any[]>([]);
    const [products, setProduct] = useState<any[]>([]);
    // const [footer, setFooter] = useState<any>(null);

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const url = "http://127.0.0.1:8000/home";
    useEffect(() => {
        const fetchDataAsync = async () => {
            let result = await fetchData(url);
            console.log("result: ", result);
            if (result.status === 200) {
                setData(result);
                if (result.header) setHeader(result.header);
                if (result.hero) setHero(result.hero);
                if (result.banners) setBanner(result.banners);
                if (result.products) setProduct(result.products);
                
            } else {
                console.log(" error: ", result.error);
                setError(result.error);
            }

            setLoading(false);
        };
    
        // Call the async function
        fetchDataAsync();
    }, []);

    if (loading) return <Loading/>
    if (error) return <ErrorPage error={error} />

    else{
        return (
            <>
                <Header/>
                
                <div className="slider_area owl-carousel" style={{ display: 'block' }}>
                    <div className="single_slider" style={{ backgroundImage:hero?.image ? `url(${hero.image})` : "none"}}>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-12">
                                    <div className="slider_content">
                                        <p>{hero.top}</p>
                                        <h1>{hero.title}</h1>
                                        <p className="slider_price">{hero.bottom}</p>
                                        <a className="button" href={hero.btn_link}>{hero.btn_text}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <section className="banner_section">
                    <div className="container">
                        <div className="row ">
                            {banners.map((banner) => (
                                <div className="col-lg-4 col-md-6">
                                    <div className="single_banner">
                                        <div className="banner_thumb">
                                                <NavLink to="/shop">
                                                    <img src={banner.image} alt=""/>
                                                </NavLink>
                                                <div className="banner_content">
                                                    <p>{banner.top}</p>
                                                    <h2>{banner.title}</h2>
                                                    <span>{banner.bottom}</span>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
    
                <section className="product_section p_section1">
                    <div className="container">
                        <div className="row">   
                            <div className="col-12">
                                <div className="product_area"> 
                                    <div className="product_tab_button">
                                        <ul className="nav" role="tablist">
                                            <li>
                                                <a className="active" data-bs-toggle="tab" href="index.html#featured" role="tab" aria-controls="featured" aria-selected="true">Nolokayon</a>
                                            </li>
                                        
                                        
                                        </ul>
                                    </div>
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active" id="featured" role="tabpanel">
                                                <div className="product_container">
                                                    <div className="custom-row product_row1 slick-initialized slick-slider">
                                                        {products.slice(0,8).map((product) => (
                                                            <SingleProduct props={{product:product,column:"col-lg-3 col-md-4 col-sm-6"}}/>
                                                        ))}
                                                        
                                                    </div>
                                                </div>
                                        </div> 
                                    </div>
                                </div>
    
                            </div>
                        </div>    
                    </div>
                </section>
    
                <div className="modal fade" id="modal_box" tabIndex={-1} role="dialog"  aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                            <div className="modal_body">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-5 col-sm-12">
                                            <div className="modal_tab">  
                                                <div className="tab-content product-details-large">
                                                    <div className="tab-pane fade show active" id="tab1" role="tabpanel" >
                                                        <div className="modal_tab_img">
                                                            <a href="index.html#"><img src="assets/img/product/product1.jpg" alt=""/></a>    
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="tab2" role="tabpanel">
                                                        <div className="modal_tab_img">
                                                            <a href="index.html#"><img src="assets/img/product/product2.jpg" alt=""/></a>    
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="tab3" role="tabpanel">
                                                        <div className="modal_tab_img">
                                                            <a href="index.html#"><img src="assets/img/product/product3.jpg" alt=""/></a>    
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="tab4" role="tabpanel">
                                                        <div className="modal_tab_img">
                                                            <a href="index.html#"><img src="assets/img/product/product5.jpg" alt=""/></a>    
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="modal_tab_button">    
                                                    <ul className="nav product_navactive owl-carousel" role="tablist">
                                                        <li >
                                                            <a className="nav-link active" data-bs-toggle="tab" href="index.html#tab1" role="tab" aria-controls="tab1" aria-selected="false"><img src="assets/img/product/product1.jpg" alt=""/></a>
                                                        </li>
                                                        <li>
                                                            <a className="nav-link" data-bs-toggle="tab" href="index.html#tab2" role="tab" aria-controls="tab2" aria-selected="false"><img src="assets/img/product/product2.jpg" alt=""/></a>
                                                        </li>
                                                        <li>
                                                        <a className="nav-link button_three" data-bs-toggle="tab" href="index.html#tab3" role="tab" aria-controls="tab3" aria-selected="false"><img src="assets/img/product/product3.jpg" alt=""/></a>
                                                        </li>
                                                        <li>
                                                        <a className="nav-link" data-bs-toggle="tab" href="index.html#tab4" role="tab" aria-controls="tab4" aria-selected="false"><img src="assets/img/product/product5.jpg" alt=""/></a>
                                                        </li>
    
                                                    </ul>
                                                </div>    
                                            </div>  
                                        </div> 
                                        <div className="col-lg-7 col-md-7 col-sm-12">
                                            <div className="modal_right">
                                                <div className="modal_title mb-10">
                                                    <h2>Donec eu furniture</h2> 
                                                </div>
                                                <div className="modal_price mb-10">
                                                    <span className="new_price">$64.99</span>    
                                                    <span className="old_price" >$78.99</span>    
                                                </div>
                                                <div className="see_all">
                                                    <a href="product-details.html">See all features</a>
                                                </div>  
                                                <div className="modal_add_to_cart mb-15">
                                                    <form action="index.html#">
                                                        <input min="0" max="100" step="2" value="1" type="number"/>
                                                        <button type="submit">add to cart</button>
                                                    </form>
                                                </div>   
                                                <div className="modal_description mb-15">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>    
                                                </div> 
                                                <div className="modal_social">
                                                    <h2>Share this product</h2>
                                                    <ul>
                                                        <li><a href="index.html#"><i className="fa fa-facebook"></i></a></li>
                                                        <li><a href="index.html#"><i className="fa fa-twitter"></i></a></li>
                                                        <li><a href="index.html#"><i className="fa fa-pinterest"></i></a></li>
                                                        <li><a href="index.html#"><i className="fa fa-google-plus"></i></a></li>
                                                        <li><a href="index.html#"><i className="fa fa-linkedin"></i></a></li>
                                                    </ul>    
                                                </div>      
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
    }
};

export default Home;


