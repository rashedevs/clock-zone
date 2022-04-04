import React from 'react';
import './Review.css'
const Review = (props) => {
    const { name, img, rating, review } = props.review
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p><small>"{review}"</small></p>
                <p><small>Ratings: {rating} stars</small></p>
            </div>
        </div>
    );
};

export default Review;