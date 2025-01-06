import { useEffect, useState } from "react";
import apiUrl from "../APIURL";
import fetchData from "../fetchData";
import { NavLink } from "react-router-dom";

const Footer = () => {
    const defaultFooter = {
        address: "Tejgaon, Dhaka, Bangladesh",
        number: ["01631596698"],
        email: ["supports@nolokayon.shop"]
    }
    
    const [footer, setFooter] = useState<any>(defaultFooter);
    const [products, setProduct] = useState<any[]>([]);
    const [latestProducts, setLatestProduct] = useState<any[]>([]);
    const [popularProducts, setPopularProduct] = useState<any[]>([]);

    const url = apiUrl + "footer";
    useEffect(() => {
        const fetchDataAsync = async () => {
            let result = await fetchData(url);
            
            if (result.status === 200) {
                if (result.footer) setFooter(result.footer);
                if (result.products) setProduct(result.products);
            }
        };
    
        // Call the async function
        fetchDataAsync();
    },[]);

    // sort products
    useEffect(() => {
        let sortLatest = [...products];
        let sortPopular = [...products];

        sortLatest.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        sortPopular.sort((a,b) => b.hits - a.hits);

        setLatestProduct(sortLatest);
        setPopularProduct(sortPopular);
    },[products]);


    return (
        <>
            <footer className="footer_widgets">
                <hr />
                <div className="container">  
                    <div className="footer_top">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-6">
                                <div className="widgets_container contact_us">
                                    <h3>About Nolokayon</h3>
                                    <div className="footer_contact">
                                        <p>Address: {footer.address}</p>
                                        {footer.number.map((num:any) => (
                                            <p>Phone: <a href={`tel:${num}`}>{num}</a></p>
                                        ))}
                                        {footer.email.map((mail:any) => (
                                            <p>Email: {mail}</p>
                                        ))}
                                        <ul>
                                            {footer.facebook ? <li><a target="_blank" href={footer.facebook}><i className="fa fa-facebook"></i></a></li>:null}
                                            {footer.instagram ? <li><a target="_blank" href={footer.instagram}><i className="fa fa-instagram"></i></a></li>:null}
                                            
                                        </ul>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-6">
                                <div className="widgets_container widget_menu">
                                    <h3>Pages</h3>
                                    <div className="footer_menu">
                                        <ul>
                                            <li><NavLink to="/">Home</NavLink></li>
                                            <li><NavLink to="/shop">Shop</NavLink></li>
                                            <li><NavLink to="/about">About Us</NavLink></li>
                                            <li><NavLink to="/contact">Contact</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-6">
                                <div className="widgets_container product_widget">
                                    <h3>Latest Products</h3>
                                    <div className="simple_product">
                                        {latestProducts.slice(0,2).map((product) => 
                                            <div className="simple_product_items">
                                                <div className="simple_product_thumb">
                                                    <NavLink to={`/product-details/${product.id}?${product.name} ${product.category.name} ${product.slug}`}><img src={product.image} alt=""/></NavLink>
                                                </div>
                                                <div className="simple_product_content">
                                                    <div className="tag_cate">
                                                        <NavLink to={`/product-details/${product.id}?${product.name} ${product.category.name} ${product.slug}`}>{product.category.name}</NavLink>
                                                    </div>
                                                    <div className="product_name">
                                                        <h3><NavLink to={`/product-details/${product.id}?${product.name} ${product.category.name} ${product.slug}`}>{product.name}</NavLink></h3>
                                                    </div>
                                                    <div className="product_price">
                                                        {product.discount_price ? <span className="current_price">{product.discount_price}</span>:null}
                                                        <span className={product.discount_price ? "old_price":"current_price"}>{product.price}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3 col-6">
                                <div className="widgets_container product_widget">
                                    <h3>Top Rated Products</h3>
                                    <div className="simple_product">
                                    {popularProducts.slice(0,2).map((product) => 
                                            <div className="simple_product_items">
                                                <div className="simple_product_thumb">
                                                    <NavLink to={`/product-details/${product.id}?${product.name} ${product.category.name} ${product.slug}`}><img src={product.image} alt=""/></NavLink>
                                                </div>
                                                <div className="simple_product_content">
                                                    <div className="tag_cate">
                                                        <NavLink to={`/product-details/${product.id}?${product.name} ${product.category.name} ${product.slug}`}>{product.category.name}</NavLink>
                                                    </div>
                                                    <div className="product_name">
                                                        <h3><NavLink to={`/product-details/${product.id}?${product.name} ${product.category.name} ${product.slug}`}>{product.name}</NavLink></h3>
                                                    </div>
                                                    <div className="product_price">
                                                        {product.discount_price ? <span className="current_price">{product.discount_price}</span>:null}
                                                        <span className={product.discount_price ? "old_price":"current_price"}>{product.price}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_bottom">
                    <div className="row">
                            <div className="col-12">
                                <div className="copyright_area">
                                    <p>&copy; 2024 <a href="index.html" className="text-uppercase">Nolokayon</a>. Developed by <a target="_blank" href="https://tanjim-abubokor.github.io">Tanjim Abubokor</a></p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>     
            </footer>
        </>
    );
};

export default Footer;