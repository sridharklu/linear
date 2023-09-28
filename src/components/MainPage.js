import React, { useEffect, useState, useRef } from "react";
import emailjs from '@emailjs/browser';


import logo from "../assets/img/logo.png"

import heroImg from '../assets/img/home.gif';
import whatsapp from '../assets/img/Vector (2).png';
import cardImg from "../assets/img/Client first commitment.png";
import shoppingImg from "../assets/img/Shaping tomorrow world.png";
import elevatingImg from "../assets/img/Elevating business performance.png";

import serviceImg1 from "../assets/img/servicegif1.png";
import serviceImg2 from "../assets/img/servicegif2.png";
import serviceImg3 from "../assets/img/servicegif3.png";
import serviceImg4 from "../assets/img/servicegif4.png";
import serviceImg5 from "../assets/img/servicegif5.png";
import serviceImg6 from "../assets/img/servicegif6.png";

import insightImg from "../assets/img/Property (1).png";
import insight2 from "../assets/img/Insight 3.png";
import insight3 from "../assets/img/Insight 4.png";

import employee from "../assets/img/emp.jpg";

import contactImg from "../assets/img/contactImg.png";
import instaImg from "../assets/img/ri_instagram-fill.png";
import fcImg from "../assets/img/ic_outline-facebook.png";

const MainPage = () => {
    const form = useRef();
    
    const [themeMode, setThemeMode] = useState();
    const [isDarkMode, setIsDarkMode] = useState();
    const [theme, setTheme] = useState();
    const [email, setEmail] = useState();

    useEffect(() => {
        if (localStorage.getItem('theme') === 'true') {
           setTheme('nav-dark')
        } else {
            setTheme('')
        }
    }, [theme]);

    const handleColorTheme = () => {
        themeMode ? setThemeMode(false) : setThemeMode(true);
        localStorage.setItem('theme', themeMode);
        
        setIsDarkMode(localStorage.getItem('theme') === 'true');

        if (localStorage.getItem('theme') === 'true') {
            setTheme('nav-dark')
        } else {
            setTheme('')
        }
    };

     const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_52pw084', 'template_9ikwx5l', form.current, 'bOPgm-Hu2zy-mSnYz')
        .then((result) => {
            console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
     };

    return (
        <div className={ `linear-project-dark ${theme}`}>
            
            {/* NavBar section  */}
         <div className=''>     
            <nav className={`navbar navbar-expand-lg ${theme}`}>
                    <div className="container-fluid" style={{ margin: '20px' }}>
                    <div><a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo" /></a></div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse justify-content-center navbar-collapse ${theme}`} id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item  active" >
                                 <a  className={`nav-link ${theme} text-center`} href="#home">Home</a>
                            </li>
                            <li className="">
                                <a  className={`nav-link ${theme} text-center`} href="#whoweare">Who we are</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a  className={`nav-link text-center dropdown-toggle ${theme}`} href="#"  role="button" aria-expanded="false">
                                    What we do
                                </a>
                                <ul className={`sub-menu ${theme}`}>
                                    <div>
                                        <li  className={`${theme}`}><a  className="service-header" href="#whatwedo">Registrations</a></li>
                                        <li className={ `nav-list ${theme}`}><a className={` ${theme}`} href="">Company Incorporation</a></li>
                                        <li className={`nav-list ${theme}`}><a className={` ${theme}`} href="">GST Registration</a></li>
                                        <li className={`nav-list ${theme}`}><a className={` ${theme}`} href="">Trademark Registration</a></li>
                                        <li className={`nav-list ${theme}`}><a className={` ${theme}`} href="">Other Registration</a></li>
                                        <li className={`nav-list ${theme}`}><a className={` ${theme}`} href="">Service 5</a></li>
                                    </div>
                                    <div>
                                        <li  className={ `nav-list ${theme}`}><a className='service-header' href="#whatwedo">Audit & Assurance</a></li>
                                        <li className={ `nav-list ${theme}`}><a  className={` ${theme}`} href="">Statutory Audits</a></li>
                                        <li   className={ `nav-list ${theme}`}><a  className={` ${theme}`} href="">Internal Audits</a></li>
                                        <li  className={ `nav-list ${theme}`}><a  className={` ${theme}`} href="">Process/ Cost Audits</a></li>
                                        <li  className={ `nav-list ${theme}`}><a  className={` ${theme}`} href="">MIS Reporting & Audits</a></li>
                                        <li  className={ `nav-list ${theme}`}><a  className={` ${theme}`} href="">Compliance Audits</a></li>
                                    </div>
                                    <div>
                                        <li  className={ `nav-list ${theme}`}><a className='service-header' href="#whatwedo">Taxation</a></li>
                                        <li  className={ `nav-list ${theme}`}><a className={` ${theme}`} href="">Income Tax</a></li>
                                        <li  className={ `nav-list ${theme}`}><a className={` ${theme}`} href="">Captial Gains</a></li>
                                        <li  className={ `nav-list ${theme}`}><a className={` ${theme}`} href="">Translate Pricing</a></li>
                                        <li  className={ `nav-list ${theme}`}><a className={` ${theme}`} href="">Morges & Acquisition</a></li>
                                        <li  className={ `nav-list ${theme}`}><a className={` ${theme}`} href="">GST Advisory & Filings</a></li>
                                    </div>
                                    <div>
                                        <li  className={ `nav-list ${theme}`}><a className='service-header' href="#whatwedo">Compliance</a></li>
                                        <li  className={ `nav-list ${theme}`}><a  className={` ${theme}`} href="">GST / TDS Returns</a></li>
                                        <li  className={ `nav-list ${theme}`}><a  className={` ${theme}`} href="">Income Tax Returns</a></li>
                                        <li  className={ `nav-list ${theme}`}><a  className={` ${theme}`} href="">ROC / FEMA / RBI</a></li>
                                        <li  className={ `nav-list ${theme}`}><a  className={` ${theme}`} href="">Annual Filings</a></li>
                                        <li  className={ `nav-list ${theme}`}><a  className={` ${theme}`} href="">PF / ESI / Payroll</a></li>
                                    </div>  
                                    <div>
                                        <li  className={ `nav-list ${theme}`}><a className='service-header' href="#whatwedo">Business Advisory</a></li>
                                        <li  className={ `nav-list ${theme}`}><a  className={` ${theme}`} href="">Corporate Law Advisory</a></li>
                                        <li  className={ `nav-list ${theme}`}><a className={` ${theme}`} href="">Process Formation & Automation</a></li>
                                        <li  className={ `nav-list ${theme}`}><a className={` ${theme}`} href="">ERP Implementation & Migration Support</a></li>
                                        <li  className={ `nav-list ${theme}`}><a className={` ${theme}`} href="">India Entry Startegy</a></li>
                                        <li  className={ `nav-list ${theme}`}><a className={` ${theme}`} href="">Financial data handling & Migration</a></li>
                                    </div>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className={`nav-link text-center dropdown-toggle ${theme}`} href="#" id="navbarDropdown2" role="button" aria-expanded="false">
                                    Linear SBM
                                </a>
                                <ul>
                                    <li className={ `nav-list ${theme}`}><a className={` ${theme}`} href="">Small Business Management</a></li>
                                    <li className={ `nav-list ${theme}`}><a className={` ${theme}`} href="">Linear CFO</a></li>
                                    <li className={ `nav-list ${theme}`}><a className={` ${theme}`} href="">Remote Book Keeping</a></li>
                                    <li className={ `nav-list ${theme}`}><a className={` ${theme}`} href="">Linear Startup Consulting</a></li>
                                    <li className={ `nav-list ${theme}`}><a className={` ${theme}`} href="">Books Cleaning</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className={`nav-link text-center dropdown-toggle ${theme}`} href="#insight" id="navbarDropdown3" role="button" aria-expanded="false">
                                    Insights
                                </a>
                                <ul>
                                    <li className={ `nav-list ${theme}`}><a className={` ${theme}`} href="#insight">Articles</a></li>
                                    <li className={ `nav-list ${theme}`}><a className={` ${theme}`} href="#insight">Compliance Calender</a></li>
                                    <li className={ `nav-list ${theme}`}><a className={` ${theme}`} href="#insight">News</a></li> 
                                </ul>
                            </li>
                            <li className="nav-item">
                                 <a className={`nav-link text-center ${theme}`} href="#contact">Contact</a>
                            </li>
                            <li className={`nav-item d-flex justify-content-center align-items-center ${theme}`}>
                                <button className="btn btn-dark" onClick={handleColorTheme}>
                                    {theme === 'nav-dark' ? 'Light Mode' : 'Dark Mode'}
                                </button>
                            </li>    
                        </ul>
                    </div>    
                </div>
            </nav>
        </div>

            {/* Header section */}
        <div className="row container-fluid" id="home"  style={{  padding: '40px' }}>
            <div className="hero-content col-md-5 col-sm-12 col-xs-12">
                <h2>Seeking Professional Support for <span className="hero-seperate">Texation</span></h2>
                <p className="hero-description" >At Linear Audit, we take great pride in our ability to deliver prompt solutions. Our services are designed to be exceptionally fast, setting us apart from our competitors and guaranteeing our clients an outstanding experience.</p>
                <a href="#"  className={ `hero-button ${theme}`}><img  className={ `fa fa-whatsapp ${theme}`} src={whatsapp} /> Let Connect</a>
            </div>
            <div className="hero-gif col-md-7 col-sm-12 col-xs-12">
                <img className="img-fluid"  src={heroImg} alt="GIF"/>
            </div>
        </div>
            
            {/* why you choose us */}
        <div className="choose-us-content col-xs-12 col-sm-12 col-md-12" id="whoweare">
            <div className="choose-us-title">
                <h2>Why Choose Us</h2>
            </div>
            <div className="card-section" id="cardSection">
                <div className="card">
                    <img src={cardImg} alt=""/>
                    <div className="card-content">
                    <p className="card-title">Client-First Commitment</p>
                    <p className="card-paragraph">We define success by assisting clients in developing lasting capabilities to overcome challenges and achieve steady growth, rather than pursuing immediate wins for our teams.</p>
                    </div>
                </div>
                <div className="card">
                    <img src={shoppingImg} alt=""/>
                    <div className="card-content">
                        <p className="card-title">Shaping Tomorrow's World</p>
                        <p className="card-paragraph">Our heritage molds your identity, as we remain forward-looking, progressive, and adaptable. Rooted in unwavering values, we construct and evolve for the future.</p>
                    </div>
                </div>
                <div className="card">
                    <img src={elevatingImg} alt=""/>
                    <div className="card-content">
                        <p className="card-title">Elevating Business Performance</p>
                        <p className="card-paragraph">We have a deep understanding of business dynamics and prioritize delivering real-time value with measurable outcomes that truly matter.</p>
                    </div>
                </div>
            </div>
        </div>
            
            {/* what we do */}
        <div className="service-content col-xs-12 col-md-12 col-sm-12 col-lg-12" id="whatwedo" >
            <div className="service-title" style={{padding: '25px' }}>
                <h1>What we do</h1>
            </div>
            <div className='service-section'>
                <div className="service-card" >
                    <img src={serviceImg1}  />
                    <div className="service-card-content" >
                        <h2 className="service-card-title">Internal Audits</h2>
                        <p className={` ${isDarkMode ? 'navbar-dark' : ''}`}>Uncover operational inefficiencies, mitigate risks, and drive performance improvement with our thorough and insightful internal audit services.</p>
                    </div>
                </div>
                <div className="service-card" >
                    <img src={serviceImg2}  />
                    <div className="service-card-content">
                        <h2 className="service-card-title">GST</h2>
                        <p className={` ${isDarkMode ? 'navbar-dark' : ''}`}>Simplify your tax obligations with our expert GST services, handling registration, returns, and compliance to ensure seamless GST operations for your business.</p>
                    </div>
                </div>
                <div className="service-card" >
                    <img src={serviceImg3}  />
                    <div className="service-card-content">
                        <h2 className="service-card-title">Outsourcing</h2>
                        <p   className={` ${isDarkMode ? 'navbar-dark' : ''}`}>Transform your business by leveraging our comprehensive outsourcing services, enabling you to tap into global talent, reduce costs, and increase operational agility.</p>
                    </div>
                </div>
                <div className="service-card" >
                    <img src={serviceImg4}  />
                    <div className="service-card-content">
                        <h2 className="service-card-title">Company Incorporation</h2>
                        <p  className={` ${isDarkMode ? 'navbar-dark' : ''}`}>At Linear Audit, we take care of the intricate details of company incorporation, providing expert guidance and handling all necessary paperwork, so you can focus on building your business.</p>
                    </div>
                </div>
                <div className="service-card" >
                    <img src={serviceImg5}  />
                    <div className="service-card-content">
                        <h2 className="service-card-title">Linear startup consulting</h2>
                        <p  className={` ${isDarkMode ? 'navbar-dark' : ''}`}>Launch your business with confidence and clarity, as our startup advisory services provide the roadmap to success, from ideation to execution.</p>
                    </div>
                </div>
                <div className="service-card" >
                    <img src={serviceImg6}  />
                    <div className="service-card-content">
                        <h2 className="service-card-title">Return Filing</h2>
                        <p  className={` ${isDarkMode ? 'navbar-dark' : ''}`}>Trust our experienced professionals to handle your ITR filing, leveraging their in-depth knowledge to optimize deductions, minimize errors, and maximize your tax benefit</p>
                    </div>
                </div>
            </div>
        </div>
            
            {/* Inghts */}
        <div className="bg-3" id="insight">
            <p>Don't miss out on the latest and greatest. Be the first to know about updates.</p>
            <h4>SUBSCRIBE NOW!</h4>
            <div className="subscription-section">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="email" className="subscription-input" name="user_email" placeholder="Enter your email"/>
                    <input className="subscription-button" type="submit" value="Subcribe"/>
                </form>
            </div>
            <div className='insight-page'>
                <div className='insight-card'>
                    <div className="insight-img-header">
                        <img className="insight-img" src={insightImg} alt=""/>
                    </div>
                    <div className="insight-card-content">
                        <h2 className="insight-card-title">Insight 1</h2>
                        <p className="insight-card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className='insight-card'>
                    <div className="insight-img-header">
                        <img className="insight-img" src={insight2} alt=""/>
                    </div>
                    <div className="insight-card-content">
                        <h2 className="insight-card-title">Insight 1</h2>
                        <p className="insight-card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className='insight-card'>
                    <div className="insight-img-header">
                        <img className="insight-img" src={insight3} alt=""/>
                    </div>
                    <div className="insight-card-content">
                        <h2 className="insight-card-title">Insight 1</h2>
                        <p className="insight-card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
        </div>

            {/* coursol content should be here */}
        <div className="col-xs-12 col-sm-12 col-md-12" id="whoweare">
            <div className="service-title" style={{  marginTop: '20px' }}>
                <h2>Testimonial</h2>
            </div>          
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="card-section" id="cardSection">
                                <div className="card carousel-card">
                                    <div className="card-content">
                                        <p className="card-paragraph"> The Team is doing a brilliant job in tax filling. He guided me weill and help me to get my amount. He is very friendly to ask any doubts in IT filling. Keep up your good work Linear Audit</p>
                                    </div>
                                    <div className="card-content">
                                        <img src={employee} alt="" className="rounded-img"/>
                                    </div>
                                    <div className="card-content">
                                        <h4>John Peter</h4>
                                        <p className="card-paragraph">Marketing Manager, Company</p>
                                    </div>
                                </div>
                                <div className="card carousel-card">
                                    <div className="card-content">
                                        <p className="card-paragraph">The Team is doing a brilliant job in tax filling. He guided me weill and help me to get my amount. He is very friendly to ask any doubts in IT filling. Keep up your good work Linear Audit.</p>
                                    </div>
                                    <div className="card-content">
                                        <img src={employee} alt="" className="rounded-img"/>
                                    </div>
                                    <div className="card-content">
                                        <h4>John Peter</h4>
                                        <p className="card-paragraph">Marketing Manager, Company</p>
                                    </div>
                                </div>
                                <div className="card carousel-card">
                                    <div className="card-content">
                                        <p className="card-paragraph">The Team is doing a brilliant job in tax filling. He guided me weill and help me to get my amount. He is very friendly to ask any doubts in IT filling. Keep up your good work Linear Audit.</p>
                                    </div>
                                    <div className="card-content">
                                        <img src={employee} alt="" className="rounded-img"/>
                                    </div>
                                    <div className="card-content">
                                        <h4>John Peter</h4>
                                        <p className="card-paragraph">Marketing Manager, Company</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                          <div className="card-section" id="cardSection">
                                <div className="card carousel-card">
                                    <div className="card-content">
                                        <p className="card-paragraph">  The Team is doing a brilliant job in tax filling. He guided me weill and help me to get my amount. He is very friendly to ask any doubts in IT filling. Keep up your good work Linear Audit.</p>
                                    </div>
                                    <div className="card-content">
                                        <img src={employee} alt="" className="rounded-img"/>
                                    </div>
                                    <div className="card-content">
                                        <h4>John Peter</h4>
                                        <p className="card-paragraph">Marketing Manager, Company</p>
                                    </div>
                                </div>
                                <div className="card carousel-card">
                                    <div className="card-content">
                                        <p className="card-paragraph">The Team is doing a brilliant job in tax filling. He guided me weill and help me to get my amount. He is very friendly to ask any doubts in IT filling. Keep up your good work Linear Audit.</p>
                                    </div>
                                    <div className="card-content">
                                        <img src={employee} alt="" className="rounded-img"/>
                                    </div>
                                    <div className="card-content">
                                        <h4>John Peter</h4>
                                        <p className="card-paragraph">Marketing Manager, Company</p>
                                    </div>
                                </div>
                                <div className="card carousel-card">
                                    <div className="card-content">
                                        <p className="card-paragraph">The Team is doing a brilliant job in tax filling. He guided me weill and help me to get my amount. He is very friendly to ask any doubts in IT filling. Keep up your good work Linear Audit.</p>
                                    </div>
                                    <div className="card-content">
                                        <img src={employee} alt="" className="rounded-img"/>
                                    </div>
                                    <div className="card-content">
                                        <h4>John Peter</h4>
                                        <p className="card-paragraph">Marketing Manager, Company</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <i className="fa fa-angle-left prev" aria-hidden="true"/>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <i className="fa fa-angle-right next" aria-hidden="true"/>
                    </button>
                    </div>
        </div>

            {/* contact section */}
        <div className="contact-section" id="contact" style={{  marginTop: '15px' }}>
            <div className="contact-title">
                <h3>Contact</h3>
            </div>
                <div className="contact-content row" style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    marginLeft: '30px',
            
                }}>
                <div className="contact-img col-xs-12 col-md-6 col-sm-12" style={{ width: '30%' }}>
                    <img className="img-fluid" src={contactImg} alt="" />
                </div>
                <div className="contact-description col-xs-12 col-md-6 col-sm-12">
                    <p className="about-company">About Company</p>
                    <p className="company-content">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es</p>
                    <div className="contact-footer">
                        <p className="contact-icon"><img className="icon-img" src={fcImg}/>Linear Audit</p>
                        <p className="contact-icon"><img className="icon-img" src={instaImg}/>Linear_audit</p>
                        <p className="contact-icon"><i className="fa fa-envelope"></i>linearaudit@gmail.com</p>
                    </div>
                </div>
                <div className='follow-up'>
                    <a href='#home' > 
                        <div className='arrow-router'>
                            <i className="fa fa-arrow-up"></i>
                        </div>
                    </a>
                </div>
            </div> 
        </div>
            
            {/* Footer  */}
        <div className={`footer-section ${theme}`}>
          <div className="footer-content">
              <p>© 2023 Your Website. All Rights Reserved.</p> 
          </div>
        </div>
        </div>
    )
}

export default MainPage;