import { useEffect, useState } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Loading from '../Loading';
import ErrorPage from '../ErrorPage';
import { NavLink } from 'react-router-dom';
import SingleProduct from '../SingleProduct';
import fetchData from '../fetchData';
import apiUrl from '../APIURL';


const Home = () => {
    const [hero, setHero] = useState<any>(null);
    const [banners, setBanner] = useState<any[]>([]);
    const [products, setProduct] = useState<any[]>([]);
    const [categories, setCategory] = useState<any>(null);
    const [currentCategory, setCurrentCategory] = useState<string | null>(null);

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const url = apiUrl + "home";
    useEffect(() => {
        const fetchDataAsync = async () => {
            let result = await fetchData(url);
            console.log("result: ", result);
            if (result.status === 200) {
                if (result.hero) setHero(result.hero);
                if (result.banners) setBanner(result.banners);
                if (result.products) setProduct(result.products);
                if (result.categories) setCategory(result.categories)
                
            } else {
                console.log(" error: ", result.error);
                setError(result.error);
            }

            setLoading(false);
        };
    
        // Call the async function
        fetchDataAsync();
    }, []);

    useEffect(() => {
        const sortProducts = () => {
            const sortedProducts = [...products]
            sortedProducts.sort((a, b) => {
                if (a.category.name === currentCategory && b.category.name !== currentCategory) {
                  return -1; // `a` comes before `b`
                }
                if (a.category.name !== currentCategory && b.category.name === currentCategory) {
                  return 1; // `b` comes before `a`
                }
                return 0; // No change in order
              });
            setProduct(sortedProducts)
        }
        sortProducts();
    },[currentCategory]);

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
                                        <NavLink className="button" to={hero.btn_link}>{hero.btn_text}</NavLink>
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
                                        <ul className="nav product_category" role="tablist">
                                            {categories.slice(0,5).map((category:any) => 
                                                <li>
                                                    <a className={category.name == currentCategory ? 'active':''} onClick={(e:any) => setCurrentCategory(e.target.id)} id={category.name}>{category.name}</a>
                                                </li>
                                            )}
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
                <Footer/>
            </>
        );
    }
};

export default Home;


