import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import './Review.css'
const Review = (props) => {
    const { name, img, rating, review } = props.review
    const fullstar = <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
    const halfstar = <FontAwesomeIcon icon={faStarHalf}></FontAwesomeIcon>
    return (
        <div className='review'>
            <img src={img} alt="reviewer img" />
            <div className='details'>
                <p className='reviewer-name'>{name}</p>
                <p className='message'>{review}</p>
                <p className='rating'>Rating: {rating}
                    {rating === 4 && <span className='star-icon'>{fullstar}{fullstar}{fullstar}{fullstar}</span>}
                    {rating === 4.5 && <span className='star-icon'>{fullstar}{fullstar}{fullstar}{fullstar}{halfstar}</span>}
                    {rating === 5 && <span className='star-icon'>{fullstar}{fullstar}{fullstar}{fullstar}{fullstar}</span>}
                </p>
            </div>
        </div>
    );
};

export default Review;