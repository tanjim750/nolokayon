import { NavLink } from 'react-router-dom';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import { useEffect, useState } from 'react';
import Loading from '../Loading';
import ErrorPage from '../ErrorPage';
import fetchData from '../fetchData';
import apiUrl from '../APIURL';


const About = () => {
    const [about, setAbout] = useState<any>(null);

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const url = apiUrl+"about";
    const fetchDataAsync = async () => {
        let result = await fetchData(url);
        
        if (result.status === 200) {
            if (result.about) setAbout(result.about);
        } else {
            setError(result.error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchDataAsync();
    }, []);

    
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
                                <h3>{about.heading}</h3>
                                <ul>
                                    <li>
                                        <NavLink to="/" > Home </NavLink>
                                    </li>
                                    <li>{">"}</li>
                                    <li>about us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>         
            </div>
            <div className="about_section">
                <div className="container">   
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="about_thumb">
                                <img src={about.image} alt=""/>
                            </div>

                            <div className="about_content">
                                <h1>{about.title}</h1>
                                <p>{about.description}</p>
                                <span>“{about.message}”</span>
                            </div>
                        </div>    
                    </div>
                </div>    
            </div>
            <Footer/>
        </>
    );
};

export default About;