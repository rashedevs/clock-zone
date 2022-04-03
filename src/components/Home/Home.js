import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <div className="home-title">
                <h1>CLOCK ZONE</h1>
                <h2>FIND YOUR DESIRED WATCHES HERE</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta porro voluptatum repudiandae. Iusto provident illum facere, ab neque quae, quam qui molestiae quod corporis, maiores debitis magni voluptatem rem libero mollitia.</p>
                <button className='demo-btn'>LIVE DEMO</button>
            </div>
            <div className="home-img">
                <img src="https://img.freepik.com/free-psd/realistic-smart-watch-mockup_165789-534.jpg?t=st=1649020791~exp=1649021391~hmac=8e01076066b6b06eb16ba1cae9053e3dffe732bcc811b9945a606f32eb88af75&w=740" alt="" />
            </div>
        </div>
    );
};

export default Home;