import React from 'react';
import './Review.css'
const Review = (props) => {
    const { name, img, rating, review } = props.review
    return (
        <div className='review'>
            <img src={img} alt="reviewer img" />
            <div className='details'>
                <p className='reviewer-name'>{name}</p>
                <p><small>"{review}"</small></p>
                <p className='rating'><small>Rating: {rating} stars</small></p>
            </div>
        </div>
    );
};

export default Review;