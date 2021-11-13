import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faShoppingCart} />

const ProductCard = (props) => {
    const {model, brand, description, price, rating, img, _id} = props.productItem;
    return (
         <div>
        {/* showing single package  data on card  */}
             <div className="card shadow-lg  bg-body rounded" >
                <img src={img} className="card-img-top img-fluid mx-auto" style={{height:"auto", width:"200px"}}  alt="..."/>
                <div className="card-body">
                    <h5 className="card-title fw-bold">Model: {model} </h5>
                    <p className='card-text fw-bold '> Brand: {brand} </p>
                    <p className="card-text cardText">{description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Product Rating: {rating} </li>
                    <li className="list-group-item">Price: {price} taka</li>
                </ul>
                <Link to={`/booking/${_id}`} className='my-3 mx-auto'>
                <button className='btn btn-success'> {element} Buy Now </button></Link>
                </div>
        </div>
    );
};

export default ProductCard;