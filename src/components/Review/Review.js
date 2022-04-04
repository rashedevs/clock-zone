import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import './Review.css'
const Review = (props) => {
    const { name, img, rating, review } = props.review
    return (
        <div className='review'>
            <img src={img} alt="reviewer img" />
            <div className='details'>
                <p className='reviewer-name'>{name}</p>
                <p>{review}</p>
                <p className='rating'>Rating: {rating} <FontAwesomeIcon className='font-icon' icon={faStar} /></p>
            </div>
        </div>
    );
};

export default Review;