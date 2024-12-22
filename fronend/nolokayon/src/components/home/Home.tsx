import Header from '../header/Header';
import Footer from '../footer/Footer';


const Home = () => {
    return (
        <>
            <Header/>
            
            <div className="slider_area owl-carousel" style={{ display: 'block' }}>
                <div className="single_slider" data-bgimg="assets/img/slider/slider1.jpg">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12">
                                <div className="slider_content">
                                    <p>exclusive offer -10% off this week</p>
                                    <h1>jewelry arrivals</h1>
                                    <p className="slider_price">starting at <span>$2.199.oo</span></p>
                                    <a className="button" href="shop.html">shopping now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="banner_section">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-4 col-md-6">
                        <div className="single_banner">
                            <div className="banner_thumb">
                                    <a href="shop.html"><img src="assets/img/bg/banner1.jpg" alt=""/></a>
                                    <div className="banner_content">
                                        <p>Design Creative</p>
                                        <h2>Ring Jewelry Design</h2>
                                        <span>From $60.99 – Sale 20%</span>
                                    </div>
                                </div>
                        </div>
                            
                        </div>
                        <div className="col-lg-4 col-md-6">
                        <div className="single_banner">
                            <div className="banner_thumb">
                                    <a href="shop.html"><img src="assets/img/bg/banner2.jpg" alt=""/></a>
                                    <div className="banner_content">
                                        <p>Bestselling Products</p>
                                        <h2>Victoria Diamonds</h2>
                                        <span>Only from $89.00</span>
                                    </div>
                                </div>
                        </div>
                            
                        </div>
                        <div className="col-lg-4 col-md-6">
                        <div className="single_banner bottom">
                            <div className="banner_thumb">
                                    <a href="shop.html"><img src="assets/img/bg/banner3.jpg" alt=""/></a>
                                    <div className="banner_content">
                                        <p>Onsale Products</p>
                                        <h2>Perfect Rings</h2>
                                        <span>Selling Off 30%</span>
                                    </div>
                                </div>
                        </div>
                            
                        </div>
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
                                                    <div className="slick-list draggable" style={{ padding: '0px' }}><div className="slick-track" style={{opacity: 1, width: '1130px', transform: 'translate3d(0px, 0px, 0px)'}}><div className="custom-col-5 slick-slide slick-current slick-center" data-slick-index="0" aria-hidden="true" tabIndex={0} style={{width: '226px'}}>
                                                        <div className="single_product">
                                                            <div className="product_thumb">
                                                                <a className="primary_img" href="product-details.html" tabIndex={1}><img src="assets/img/product/product5.jpg" alt=""/></a>
                                                                <a className="secondary_img" href="product-details.html" tabIndex={-1}><img src="assets/img/product/product5.jpg" alt=""/></a>
                                                                <div className="quick_button">
                                                                    <a href="index.html#" data-bs-toggle="modal" data-bs-target="#modal_box" data-placement="top" data-original-title="quick view" tabIndex={-1}> quick view</a>
                                                                </div>
                                                            </div>
                                                            <div className="product_content">
                                                                <div className="tag_cate">
                                                                    <a href="index.html#" tabIndex={-1}>Bangles</a>
                                                                    <a href="index.html#" tabIndex={-1}>Collections</a>
                                                                </div>
                                                                <h3><a href="product-details.html" tabIndex={-1}>Bangels</a></h3>
                                                                <div className="price_box">
                                                                    <span className="current_price">300 tk</span>
                                                                </div>
                                                                <div className="product_hover">
                                                                    <div className="product_ratings">
                                                                        <ul>
                                                                            <li><a href="index.html#" tabIndex={-1}><i className="ion-ios-star-outline"></i></a></li>
                                                                            <li><a href="index.html#" tabIndex={-1}><i className="ion-ios-star-outline"></i></a></li>
                                                                            <li><a href="index.html#" tabIndex={-1}><i className="ion-ios-star-outline"></i></a></li>
                                                                            <li><a href="index.html#" tabIndex={-1}><i className="ion-ios-star-outline"></i></a></li>
                                                                            <li><a href="index.html#" tabIndex={-1}><i className="ion-ios-star-outline"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="product_desc">
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere metus vitae </p>
                                                                    </div>
                                                                    <div className="action_links">
                                                                        <ul>
                                                                            <li><a data-placement="top" title="Click to show more details" data-bs-toggle="tooltip" tabIndex={-1}><span className="icon icon-Heart"></span></a></li>
                                                                            <li className="add_to_cart"><a href="cart.html" title="Click to show more details" tabIndex={-1}>Show Details</a></li>
                                                                            <li><a title="Click to show more details" tabIndex={-1}><i className="ion-ios-settings-strong"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div><div className="custom-col-5 slick-slide" data-slick-index="1" aria-hidden="true" tabIndex={0} style={{width: '226px'}}>
                                                        <div className="single_product">
                                                            <div className="product_thumb">
                                                                <a className="primary_img" href="product-details.html" tabIndex={-1}><img src="assets/img/product/product4.jpg" alt=""/></a>
                                                                <a className="secondary_img" href="product-details.html" tabIndex={-1}><img src="assets/img/product/product4.jpg" alt=""/></a>
                                                                <div className="quick_button">
                                                                    <a href="index.html#" data-bs-toggle="modal" data-bs-target="#modal_box" data-placement="top" data-original-title="quick view" tabIndex={-1}> quick view</a>
                                                                </div>
                                                            </div>
                                                            <div className="product_content">
                                                                <div className="tag_cate">
                                                                    <a href="index.html#" tabIndex={-1}>Neck</a>
                                                                    <a href="index.html#" tabIndex={-1}>Collections</a>
                                                                </div>
                                                                <h3><a href="product-details.html" tabIndex={-1}>Neck Piece</a></h3>
                                                                <div className="price_box">
                                                                    <span className="current_price">250 tk</span>
                                                                </div>
                                                                <div className="product_hover">
                                                                    <div className="product_ratings">
                                                                        <ul>
                                                                            <li><a href="index.html#" tabIndex={-1}><i className="ion-ios-star-outline"></i></a></li>
                                                                            <li><a href="index.html#" tabIndex={-1}><i className="ion-ios-star-outline"></i></a></li>
                                                                            <li><a href="index.html#" tabIndex={-1}><i className="ion-ios-star-outline"></i></a></li>
                                                                            <li><a href="index.html#" tabIndex={-1}><i className="ion-ios-star-outline"></i></a></li>
                                                                            <li><a href="index.html#" tabIndex={-1}><i className="ion-ios-star-outline"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="product_desc">
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere metus vitae </p>
                                                                    </div>
                                                                    <div className="action_links">
                                                                        <ul>
                                                                            <li><a href="wishlist.html" data-placement="top" title="Add to Wishlist" data-bs-toggle="tooltip" tabIndex={-1}><span className="icon icon-Heart"></span></a></li>
                                                                            <li className="add_to_cart"><a href="cart.html" title="add to cart" tabIndex={-1}>add to cart</a></li>
                                                                            <li><a href="compare.html" title="compare" tabIndex={-1}><i className="ion-ios-settings-strong"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div><div className="custom-col-5 slick-slide" data-slick-index="2" aria-hidden="true" tabIndex={0} style={{width: '226px'}}>
                                                        <div className="single_product">
                                                            <div className="product_thumb">
                                                                <a className="primary_img" href="product-details.html" tabIndex={-1}><img src="assets/img/product/product3.jpg" alt=""/></a>
                                                                <a className="secondary_img" href="product-details.html" tabIndex={-1}><img src="assets/img/product/product3.jpg" alt=""/></a>
                                                                <div className="quick_button">
                                                                    <a href="index.html#" data-bs-toggle="modal" data-bs-target="#modal_box" data-placement="top" data-original-title="quick view" tabIndex={-1}> quick view</a>
                                                                </div>
                                                            </div>
                                                            <div className="product_content">
                                                                <div className="tag_cate">
                                                                    <a href="index.html#" tabIndex={-1}>Earrings</a>
                                                                    <a href="index.html#" tabIndex={-1}>Collections</a>
                                                                </div>
                                                                <h3><a href="product-details.html" tabIndex={-1}>Earrings</a></h3>
                                                                <div className="price_box">
                                                                    <span className="current_price">200 tk</span>
                                                                </div>
                                                                <div className="product_hover">
                                                                    <div className="product_ratings">
                                                                        <ul>
                                                                            <li><a href="index.html#" tabIndex={-1}><i className="ion-ios-star-outline"></i></a></li>
                                                                            <li><a href="index.html#" tabIndex={-1}><i className="ion-ios-star-outline"></i></a></li>
                                                                            <li><a href="index.html#" tabIndex={-1}><i className="ion-ios-star-outline"></i></a></li>
                                                                            <li><a href="index.html#" tabIndex={-1}><i className="ion-ios-star-outline"></i></a></li>
                                                                            <li><a href="index.html#" tabIndex={-1}><i className="ion-ios-star-outline"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="product_desc">
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere metus vitae </p>
                                                                    </div>
                                                                    <div className="action_links">
                                                                        <ul>
                                                                            <li><a href="wishlist.html" data-placement="top" title="Add to Wishlist" data-bs-toggle="tooltip" tabIndex={-1}><span className="icon icon-Heart"></span></a></li>
                                                                            <li className="add_to_cart"><a href="cart.html" title="add to cart" tabIndex={-1}>add to cart</a></li>
                                                                            <li><a href="compare.html" title="compare" tabIndex={-1}><i className="ion-ios-settings-strong"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div><div className="custom-col-5 slick-slide" data-slick-index="3" aria-hidden="true" tabIndex={0} style={{width: '226px'}}>
                                                        <div className="single_product">
                                                            <div className="product_thumb">
                                                                <a className="primary_img" href="product-details.html" tabIndex={-1}><img src="assets/img/product/product2.jpg" alt=""/></a>
                                                                <a className="secondary_img" href="product-details.html" tabIndex={-1}><img src="assets/img/product/product2.jpg" alt=""/></a>
                                                                <div className="quick_button">
                                                                    <a href="index.html#" data-bs-toggle="modal" data-bs-target="#modal_box" data-placement="top" data-original-title="quick view" tabIndex={-1}> quick view</a>
                                                                </div>
                                                            </div>
                                                            <div className="product_content">
                                                                <div className="tag_cate">
                                                                    <a href="index.html#" tabIndex={-1}>Neck Piece</a>
                                                                    <a href="index.html#" tabIndex={-1}>Collections</a>
                                                                </div>
                                                                <h3><a href="product-details.html" tabIndex={-1}>Neck Piece</a></h3>
                                                                <div className="price_box">
                                                                    <span className="current_price">320 tk</span>
                                                                </div>
                                                                <div className="product_hover">
                                                                    <div className="product_ratings">
                                                                        <ul>
                                                                            <li><a href="index.html#" tabIndex={-1}><i className="ion-ios-star-outline"></i></a></li>
                                                                            <li><a href="index.html#" tabIndex={-1}><i className="ion-ios-star-outline"></i></a></li>
                                                                            <li><a href="index.html#" tabIndex={-1}><i className="ion-ios-star-outline"></i></a></li>
                                                                            <li><a href="index.html#" tabIndex={-1}><i className="ion-ios-star-outline"></i></a></li>
                                                                            <li><a href="index.html#" tabIndex={-1}><i className="ion-ios-star-outline"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="product_desc">
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere metus vitae </p>
                                                                    </div>
                                                                    <div className="action_links">
                                                                        <ul>
                                                                            <li><a href="wishlist.html" data-placement="top" title="Add to Wishlist" data-bs-toggle="tooltip" tabIndex={-1}><span className="icon icon-Heart"></span></a></li>
                                                                            <li className="add_to_cart"><a href="cart.html" title="add to cart" tabIndex={-1}>add to cart</a></li>
                                                                            <li><a href="compare.html" title="compare" tabIndex={-1}><i className="ion-ios-settings-strong"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div><div className="custom-col-5 slick-slide slick-active slick-center" data-slick-index="4" aria-hidden="false" tabIndex={0} style={{width: '226px'}}>
                                                        <div className="single_product">
                                                            <div className="product_thumb">
                                                                <a className="primary_img" href="product-details.html" tabIndex={0}><img src="assets/img/product/product1.jpg" alt=""/></a>
                                                                <a className="secondary_img" href="product-details.html" tabIndex={0}><img src="assets/img/product/product2.jpg" alt=""/></a>
                                                                <div className="quick_button">
                                                                    <a href="index.html#" data-bs-toggle="modal" data-bs-target="#modal_box" data-placement="top" data-original-title="quick view" tabIndex={0}> quick view</a>
                                                                </div>
                                                            </div>
                                                            <div className="product_content">
                                                                <div className="tag_cate">
                                                                    <a href="index.html#" tabIndex={0}>Earrings</a>
                                                                    <a href="index.html#" tabIndex={0}>Collections</a>
                                                                </div>
                                                                <h3><a href="product-details.html" tabIndex={0}>Earrings</a></h3>
                                                                <div className="price_box">
                                                                    <span className="current_price">200 tk</span>
                                                                </div>
                                                                <div className="product_hover">
                                                                    <div className="product_ratings">
                                                                        <ul>
                                                                            <li><a href="index.html#" tabIndex={0}><i className="ion-ios-star-outline"></i></a></li>
                                                                            <li><a href="index.html#" tabIndex={0}><i className="ion-ios-star-outline"></i></a></li>
                                                                            <li><a href="index.html#" tabIndex={0}><i className="ion-ios-star-outline"></i></a></li>
                                                                            <li><a href="index.html#" tabIndex={0}><i className="ion-ios-star-outline"></i></a></li>
                                                                            <li><a href="index.html#" tabIndex={0}><i className="ion-ios-star-outline"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="product_desc">
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere metus vitae </p>
                                                                    </div>
                                                                    <div className="action_links">
                                                                        <ul>
                                                                            <li><a href="wishlist.html" data-placement="top" title="Add to Wishlist" data-bs-toggle="tooltip" tabIndex={0}><span className="icon icon-Heart"></span></a></li>
                                                                            <li className="add_to_cart"><a href="cart.html" title="add to cart" tabIndex={0}>add to cart</a></li>
                                                                            <li><a href="compare.html" title="compare" tabIndex={0}><i className="ion-ios-settings-strong"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div></div></div>
                                                    
                                                    
                                                    
                                                    
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
};

export default Home;


