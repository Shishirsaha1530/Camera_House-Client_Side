import React from 'react';
import './ContactUs.css'
import contactImg from '../../../images/contact.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faMapMarkerAlt} />
const elementOne = <FontAwesomeIcon icon={faMobileAlt} />
const elementTwo = <FontAwesomeIcon icon={faEnvelope} />
const ContactUs = () => {
    return (
            <div className="container mt-5">
             <div className="main">
                    <h4 className="title">Contact Us</h4>
                </div>
            <div className="row mt-3 d-flex align-items-center">
                <div className="col-md-6 mr-auto">
                <p className="mb-3 contactText lead">We are glad to know about your interest to write for us as a tech Guest writer. We are sharing some information that might help you to get on the same page as us. Please read the below information that will assist you to do guest blogging for us.</p>

                <ul className="list-unstyled pl-md-5 mb-3">
                    <li className="text-black mb-2"> {element} Road:10B, Uttara,Dhaka <br /> Bangladesh
                    </li>
                    <li className="text-black mb-2">{elementOne} +880-1911223344</li>
                    <li className="text-black">{elementTwo} camerahouse@gmail.com </li>
                </ul>
                 <img src={contactImg} alt="" className='img-fluid' style={{height:"170px"}} />
                </div>

                <div className="col-md-6 border border-success shadow-lg p-4">
                    <div className="mb-3">
                        <label className="form-label">Your Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Type Your Name"/>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Your Email</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Type Your Email"/>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Your Phone Number</label>
                        <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Type Your Phone Number"/>
                    </div>
                    <div className="form-group my-3">
                     <label>Please specify your need *</label> 
                    <select id="form_need" name="need" className="form-control" required="required" data-error="Please specify your need.">
                                <option value="">--Select Your Issue--</option>
                                <option>Make A Custom Order</option>
                                <option>Cancel Order </option>
                                <option>Haven't received confirmation yet</option>
                                <option>Other</option>
                    </select> 
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Your Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button className='btn btn-success w-50'>Send</button>
                </div>
            </div>
            </div>

    );
};

export default ContactUs;