import React from 'react';
import "../components/Banner.css";
import banner from "../Images/banner.jpg";

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
                    <div className='banner-sub-text'>3 & 4 BHK Luxury Biophilic Homes at Thrippunithura, Kochi</div>
                    <div className='enquire-btn'>Enquire Now</div>
            </div>
        </div>
    )
}

export default Banner
