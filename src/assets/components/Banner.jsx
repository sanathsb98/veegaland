import React from 'react';
import "../components/Banner.css";
import banner from "../Images/banner.jpg";
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
    return (
        <div className='banner-component'>
           <div className="banner-image-container">
        <img
          className="banner-image"
          src={banner}
          alt="Banner"
        />
      </div>
            <div className='banner-content'>
                <div className='banner-title'>The Tallest Luxury Biophilic<br />
                    Home in the heart of Kochi</div>
                    <div className='banner-sub-text'>
                    <Typewriter
                        words={['3 & 4 BHK Luxury Biophilic Homes at Thrippunithura, Kochi']}
                        loop={1}  // Adjust the loop as needed (1 means it will stop after typing once)
                        cursor
                        cursorStyle="|"
                        typeSpeed={100}  // Speed of typing
                        deleteSpeed={50}  // Speed of deleting (if you plan to add a delete effect)
                        delaySpeed={1500}  // Delay before typing starts
                    />
                    </div>
                    <div className='enquire-btn'>Enquire Now</div>
            </div>
        </div>
    )
}

export default Banner
