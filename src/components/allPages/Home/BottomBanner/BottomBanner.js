import React from 'react';
import { Link } from 'react-router-dom';
import cameraImg from '../../../../images/bottomBanner.svg'
import './BottomBanner.css'

const BottomBanner = () => {
    return (
        <div className='homePage mt-5'>
            <div className='container '>
                <div className='row d-flex align-items-center'>
                    <div className='col-md-6 border border-success p-4 shadow-lg' data-aos="zoom-out-right">
                        <h3 className='fw-bold font-monospace'>Capture Your Best Moments </h3>
                        <p className='my-3 bannerText lh-base'>Cameras have the ability to see everything. They can see down into the depths of the ocean, and also up, millions of miles into space. Furthermore, they capture moments of time and freeze them for later enjoyment. These devices revolutionized the way people perceived the world.
                        Photos make up who people are and what they have done in their lives and the way the photographer captures their perfect scene reveals how they perceive the world and the people around them.
                         </p>
                         
                        <Link to='/explore' className='mt-3 mt-md-0'> <button className='btn btn-success'>Explore Cameras</button>  </Link>
                    </div>
                    <div className='col-md-6 mt-md-0 mt-5' data-aos="zoom-out-left">
                        <img src={cameraImg} alt="" className='img-fluid'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomBanner;