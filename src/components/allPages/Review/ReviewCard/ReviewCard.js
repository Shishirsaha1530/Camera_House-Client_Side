import React from 'react';
import { RatingView } from 'react-simple-star-rating'

const ReviewCard = (props) => {
    let {name, review, rating} = props.allReviews
    return (
        <div>
            <div className="card border border-success shadow-lg">
                <div className="card-body">
                    <p className="card-text fw-bold font-monospace lead"> "{review}" </p>
                    <RatingView ratingValue={rating} />
                    <p className='text-center'> -{name} </p>
                 </div>
            </div>
        </div>
    );
};

export default ReviewCard;