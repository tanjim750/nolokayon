import { NavLink } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import SingleProduct from "../SingleProduct";
import { useEffect, useState } from "react";
import Loading from "../Loading";
import ErrorPage from "../ErrorPage";
import fetchData from "../fetchData";
import apiUrl from "../APIURL";

const Shop = () => {
    const [products, setProduct] = useState<any[]>([]);
    // const [footer, setFooter] = useState<any>(null);

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const url = apiUrl + "products";
    useEffect(() => { 
        const fetchDataAsync = async () => {
            let result = await fetchData(url);
            
            if (result.status === 200) {
                if (result.products) setProduct(result.products);
            } else {
                setError(result.error);
            }
            setLoading(false);
        };
    
        // Call the async function
        fetchDataAsync();
    }, []);

    // sort products
    const [sortOrder, setSortOrder] = useState("latest");
    // Function to sort products based on sortOrder
    const sortProducts = () => {
        let sortedProducts = [...products];
        switch (sortOrder) {
            case "latest":
                sortedProducts.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
                break;
            case "popular":
                sortedProducts.sort((a, b) => b.hits - a.hits);
                break;
            case "l2h":
                sortedProducts.sort((a, b) => a.price - b.price);
                break;
            case "h2l":
                sortedProducts.sort((a, b) => b.price - a.price);
                break;
            default:
                break;
        }
        setProduct(sortedProducts);
    };

    useEffect(() => {
        sortProducts();
    },[sortOrder]);

    // products pagination  
    const [currentPage, setCurrentPage] = useState(1); // Current page number
    const productsPerPage = 12; // Number of products per page

    // Calculate total pages
    const totalPages = Math.ceil(products.length / productsPerPage);

    // Get the products for the current page
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // Handle page change
    const handlePageChange = (pageNumber:number) => {
        setCurrentPage(pageNumber);
    };
    


    if (loading) return <Loading/>
    if (error) return <ErrorPage error={error} />

    return (
        <>
        <Header/>

        <div className="breadcrumbs_area">
            <div className="container">   
                <div className="row">
                    <div className="col-12">
                        <div className="breadcrumb_content">
                            <ul>
                                <li>
                                    <NavLink to="/">
                                        Home
                                    </NavLink>
                                </li>
                                <li>{">"}</li>
                                <li>shop</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>         
        </div>

        <div className="shop_area shop_fullwidth shop_reverse">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="shop_toolbar">
                        <div className="list_button">
                            <ul className="nav" role="tablist">
                                <li>
                                    <a className="active" data-bs-toggle="tab" href="#large" role="tab" aria-controls="large" aria-selected="true"><i className="ion-grid"></i></a>
                                </li>
                                {/* <li>
                                    <a data-bs-toggle="tab" href="#list" role="tab" aria-controls="list" aria-selected="false"><i className="ion-ios-list-outline"></i> </a>
                                </li> */}
                            </ul>
                        </div>
                        <div className="orderby_wrapper">
                            <h3>Sort By : </h3>
                            
                            <div className="nice-select niceselect_option" tabIndex={1}>
                                <span className="current">Latest</span>
                                <ul className="list">
                                    <li data-value="1" className="option selected" onClick={()=> setSortOrder("latest")}>Latest</li>
                                    <li data-value="2" className="option" onClick={()=> setSortOrder("popular")}>Popularity</li>
                                    <li data-value="4" className="option" onClick={()=> setSortOrder("l2h")}>Price: low to high</li>
                                    <li data-value="5" className="option" onClick={()=> setSortOrder("h2l")}>Price: high to low</li>
                                </ul>
                            </div>
                            <div className="page_amount">
                                <p>Showing {indexOfFirstProduct+1}-{products.length > indexOfLastProduct? indexOfLastProduct:products.length} of {products.length} results</p>
                            </div>
                        </div>
                    </div>
                     <div className="tab-content">
                        <div className="tab-pane grid_view fade show active" id="large" role="tabpanel">
                            <div className="row">
                                {currentProducts.map((product) => (
                                    <SingleProduct props={{product: product,column:"col-lg-3 col-md-4 col-sm-6"}}/>
                                ))}
                            </div>
                        </div>

                    </div>
                    <div className="shop_toolbar t_bottom">
                        <div className="pagination">
                            <ul>
                                
                                <button key="prev" onClick={()=> handlePageChange(currentPage-1)} disabled={currentPage <= 1 ? true:false}>{"<<"}</button>
                                {[...Array(totalPages)].map((_,index) => (
                                    <button key={index} className={currentPage == index+1 ? "current":""} onClick={()=> handlePageChange(index+1)}>
                                        {index+1}
                                    </button>
                                ))}
                                <button className="next" key="next" onClick={()=> handlePageChange(currentPage+1)} disabled={currentPage >= totalPages ? true:false}>{">>"}</button>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    </div>

        <Footer/>
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
                                                <a href="shop.html#"><img src="../assets/img/product/product1.jpg" alt=""/></a>    
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="tab2" role="tabpanel">
                                            <div className="modal_tab_img">
                                                <a href="shop.html#"><img src="../assets/img/product/product2.jpg" alt=""/></a>    
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="tab3" role="tabpanel">
                                            <div className="modal_tab_img">
                                                <a href="shop.html#"><img src="../assets/img/product/product3.jpg" alt=""/></a>    
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="tab4" role="tabpanel">
                                            <div className="modal_tab_img">
                                                <a href="shop.html#"><img src="../assets/img/product/product5.jpg" alt=""/></a>    
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal_tab_button">    
                                        <ul className="nav product_navactive owl-carousel" role="tablist">
                                            <li >
                                                <a className="nav-link active" data-bs-toggle="tab" href="shop.html#tab1" role="tab" aria-controls="tab1" aria-selected="false"><img src="../assets/img/product/product1.jpg" alt=""/></a>
                                            </li>
                                            <li>
                                                 <a className="nav-link" data-bs-toggle="tab" href="shop.html#tab2" role="tab" aria-controls="tab2" aria-selected="false"><img src="../assets/img/product/product2.jpg" alt=""/></a>
                                            </li>
                                            <li>
                                               <a className="nav-link button_three" data-bs-toggle="tab" href="shop.html#tab3" role="tab" aria-controls="tab3" aria-selected="false"><img src="../assets/img/product/product3.jpg" alt=""/></a>
                                            </li>
                                            <li>
                                               <a className="nav-link" data-bs-toggle="tab" href="shop.html#tab4" role="tab" aria-controls="tab4" aria-selected="false"><img src="../assets/img/product/product5.jpg" alt=""/></a>
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
                                        <form action="shop.html#">
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
                                            <li><a href="shop.html#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="shop.html#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="shop.html#"><i className="fa fa-pinterest"></i></a></li>
                                            <li><a href="shop.html#"><i className="fa fa-google-plus"></i></a></li>
                                            <li><a href="shop.html#"><i className="fa fa-linkedin"></i></a></li>
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
        </>
    );
};

export default Shop;