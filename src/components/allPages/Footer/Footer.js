import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='mt-5 pt-5'>
            <footer className="footer-20192">
            <div className="site-section">
                <div className="container titlePart bg-dark text-white">
                <div className="cta d-block d-md-flex align-items-center px-5">
                    <div>
                    <h2 className="mb-0"> Buy Your Camera From Us</h2>
                    <h3 className="text-dark">We Also Bring Camera From Abroad. So Contact Us If You Need Any Gears! </h3>
                    </div>
                    <div className="ms-auto">
                    <Link to="/contact" className="btn btn-dark rounded-0 py-3 px-5">Contact us</Link>
                    </div>
                </div>
                <div className="input-group mb-5 w-50 mx-auto">
                    <input type="text" className="form-control" placeholder="Subscribe Us For Newsletter" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                    <span className="input-group-text btn btn-success" id="basic-addon2">Subscribe Us</span>
                </div>
                <div className="row ms-2">
                    <div className="col-sm">
                    <h3 className='text-white fw-bold'> Top Brands</h3>
                    <ul className="list-unstyled brands">
                        <li><a href="/">Canon</a></li>
                        <li><a href="/">Nikon</a></li>
                        <li><a href="/">Sony</a></li>
                        <li><a href="/">Panasonic</a></li>
                    </ul>
                    </div>
                    <div className="col-sm">
                    <h3 className='text-white fw-bold'>Company</h3>
                    <ul className="list-unstyled brands">
                        <li><Link to="/about">About us</Link></li>
                        <li><Link to="/explore"> Cameras</Link></li>
                        <li><Link to="/review">Review</Link></li>
                        <li><Link to="/contact">Contact us</Link></li>
                    </ul>
                    </div>
                    <div className="col-sm">
                    <h3 className='text-white fw-bold'>Further Information</h3>
                    <ul className="list-unstyled brands">
                        <li><a href="/">Terms &amp; Conditions</a></li>
                        <li><a href="/">Privacy Policy</a></li>
                    </ul>
                    </div>               
                </div>
                </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;