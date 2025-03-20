import React from 'react';
import "../components/ProjectCard.css";
import elevation from '../Images/elevation.png'
import location from '../Images/location.svg'
import rupee from '../Images/rupee.svg'

const ProjectCard = () => {
    return (
        <div className='project-card-container'>
            <div className='project-display-section'>
                <img src={elevation} width="100%" height="auto" />
            </div>
            <div className='project-carddetails-section'>
                <div className='project-carddet-title'>Green Fort</div>
                <div className='project-carddet-location'>
                    <div className='proj-carddet-locicon'><img src={location} width="20px"/></div>
                    <div className='proj-carddet-loc'>Thrippunithura, Kochi</div>
                </div>
                <div className='proj-carddet-price'>
                    <div className='proj-carddet-pricelogo'><img src={rupee} width="20px"/></div>
                    <div className='price-carddet-price'><span className='price-bold'>66 lakh*</span> onwards</div>
                    <div className='price-carddet-specoff'>Special Offers</div>
                </div>
            </div>
            <div className='card-line'></div>
            <div className='price-carddet-ammenities'>
                <div className='price-carddet-amenity'>
                    <div className='price-carddet-icon'>*</div>
                    <div className='price-carddet-spec'>2 & 3 BHK</div>
                </div>
                <div className='price-carddet-amenity'>
                    <div className='price-carddet-icon'>*</div>
                    <div className='price-carddet-spec'>High Saftey Standards</div>
                </div>
            </div>
            <div className='price-carddet-ammenities amenity-margin'>
                <div className='price-carddet-amenity'>
                    <div className='price-carddet-icon'>*</div>
                    <div className='price-carddet-spec'>Porotherm Bricks</div>
                </div>
                <div className='price-carddet-amenity'>
                    <div className='price-carddet-icon'>*</div>
                    <div className='price-carddet-spec'>15+ Amenities</div>
                </div>
            </div>
           <div className='card-btn-space'>
           <div className='card-proj-btn'>View Project</div>
           <div className='card-enquire-btn'>Enquire Now</div>
           </div>

        </div>
    )
}

export default ProjectCard
