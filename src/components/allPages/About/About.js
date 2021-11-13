import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'
import OurMission from './OurMission/OurMission';


const About = () => {
    return (
        <div className='mt-5 container'>
         <div className="main">
                 <h4 className="title">About Us</h4>
            </div>
             <div className='container mt-4'>
                <div className='row d-flex align-items-center'>
                  <div className='col-md-6' data-aos="fade-right">
                        <img src="https://www.pinclipart.com/picdir/middle/131-1314907_710-cartoon-illustration-of-hand-with-camera-camera.png" alt="" className='img-fluid'/>
                    </div>
                    <div className='col-md-6 border border-success p-4 shadow-lg' data-aos="fade-left">
                        <h3 className='fw-bold font-monospace'>Welcome to the Camera House </h3>
                        <p className='my-4 aboutText lh-base'>Camera House has been founded on 1 March 2007. From then to now, Camera House has won the heart of many people and now is a country-wide renowned brand. <br /> That has been possible due to the hard work Camera House has done to satisfy its customers. Having the aim to satisfy customers, providing customers with their required products, and being true to their motto, “Customers Come First,” has brought Camera House to the top of the E-Commerce Site and also is one of the largest Computer and Technology product retailers. Camera House has over 300 employees and is growing more and more, working diligently to fulfill the Main Criteria of Camera House’s Motto or Vision. 
                         </p>
                        <Link to='/review' className='mt-3 mt-md-0'> <button className='btn btn-success'>Customer Review</button>  </Link>
                    </div>
                </div>
            </div>
            <OurMission> </OurMission>
        </div>
    );
};

export default About;