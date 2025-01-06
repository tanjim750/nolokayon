import { NavLink } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Loading from '../Loading';
import ErrorPage from '../ErrorPage';
import { useEffect, useState } from 'react';
import apiUrl from '../APIURL';
import fetchData from '../fetchData';

const Contact = () => {
    const [contact, setContact] = useState<any>(null);
    // const [footer, setFooter] = useState<any>(null);

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const url = apiUrl+"contact";
    useEffect(() => {
        const fetchDataAsync = async () => {
            let result = await fetchData(url);
            
            if (result.status === 200) {
                if (result.contact) setContact(result.contact);
            } else {
                setError(result.error);
            }
            setLoading(false);
        };
    
        // Call the async function
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
                            <h3>{contact.heading}</h3>
                            <ul>
                                <li>
                                    <NavLink to="/" > Home </NavLink>
                                </li>
                                <li>{">"}</li>
                                <li>Contact us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>         
        </div>

        <div className="contact_map">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                    <div className="map-area">
                        <div id="googleMap">
                        <iframe
                            width="100%"
                            height="100%"
                            loading="lazy"
                            allowFullScreen
                            src={contact.map}
                            style={{ border: 0, position: 'relative', zIndex: 2 }}
                            title="Nolokayon official location"
                        ></iframe>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="contact_area">
            <div className="container">   
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                    <div className="contact_message content">
                            <h3>{contact.title}</h3>    
                            <p>{contact.description}</p>
                            <ul>
                                <li><i className="fa fa-fax"></i>  Address : {contact.address}</li>
                                {contact.number.map((num:any) => (
                                    <li><i className="fa fa-phone"></i> <a href={`tel:${num}`}>{num}</a></li>
                                ))}
                                {contact.email.map((mail:any) => (
                                    <li><i className="fa fa-envelope-o"></i> <a href={`mail:${mail}`}>{mail}</a></li>
                                ))}
                            </ul>             
                        </div> 
                    </div>
                </div>
            </div>    
        </div>
        <Footer/>
        </>
    );
};

export default Contact;