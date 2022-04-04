import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Home.css'

const Home = () => {
    const [reviews, setReviews] = useReviews()
    const navigate = useNavigate()
    const handleReviews = () => {
        const path = '/reviews'
        navigate(path)
    }
    return (
        <div className='container'>
            <div className='home-container'>
                <div className="home-title">
                    <h1>CLOCK ZONE</h1>
                    <h2>FIND YOUR DESIRED WATCH</h2>
                    <p>Clock Zone is unveiling its latest collections, Watches that shine the light of optimism and innovation on the watchmaking world. In its perpetual quest for excellence, the brand constantly enhances the aesthetics and technologies of its emblematic timepieces. They are an invitation to push boundaries,
                        to reach ever higher.</p>
                    <button className='demo-btn'>LIVE DEMO</button>
                </div>
                <div className="home-img">
                    <img src="https://img.freepik.com/free-psd/realistic-smart-watch-mockup_165789-534.jpg?t=st=1649020791~exp=1649021391~hmac=8e01076066b6b06eb16ba1cae9053e3dffe732bcc811b9945a606f32eb88af75&w=740" alt="watch-img" />
                </div>
            </div>
            <div>
                <h2 className='review-title'>Customer Reviews (3)</h2>
                <div className="review-container">
                    {
                        reviews.slice(2, 5).map(review => <Review key={review.id} review={review}></Review>)
                    }
                </div>
                <button onClick={handleReviews} className='see-all-btn'>SEE ALL REVIEWS</button>
            </div>
        </div>
    );
};

export default Home;