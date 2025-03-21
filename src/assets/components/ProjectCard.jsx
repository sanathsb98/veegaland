import React from 'react';
import "../components/ProjectCard.css";
import elevation from '../Images/elevation.png'
import location from '../Images/location.svg'
import rupee from '../Images/rupee.svg'

const ProjectCard = ({id,projectImage,projectTitle,projectLocation,projectPrice,amenities}) => {
    return (
        <div className='project-card-container'>
            <div className='project-display-section'>
                <img src={projectImage} width="100%" height="auto" />
            </div>
            <div className='project-carddetails-section'>
                <div className='project-carddet-title'>{projectTitle}</div>
                <div className='project-carddet-location'>
                    <div className='proj-carddet-locicon'><img src={location} width="20px"/></div>
                    <div className='proj-carddet-loc'>{projectLocation}</div>
                </div>
                <div className='proj-carddet-price'>
                    <div className='proj-carddet-pricelogo'><img src={rupee} width="20px"/></div>
                   
                    {projectPrice==="" ? ( <div className='price-carddet-price'><span className='price-bold'>Will be revealed soon</span></div>):( <div className='price-carddet-price'><span className='price-bold'>{projectPrice}</span> onwards</div>)}
                    <div className='price-carddet-specoff'>Special Offers</div>
                </div>
            </div>
            <div className='card-line'></div>
        
            
            <div className='price-carddet-ammenities'>
            {amenities.slice(0,2).map((amenity,index)=>(
                   <div className='price-carddet-amenity'>
                   <div className='price-carddet-icon'>
                    <img src={amenity.specImg}/>
                   </div>
                   <div className='price-carddet-spec'>{amenity.spec}</div>
               </div>
            ))}
            </div>

            <div className='price-carddet-ammenities amenity-margin'>
                {amenities.slice(2,4).map((amenity,index)=>(
                   <div className='price-carddet-amenity'>
                   <div className='price-carddet-icon'><img src={amenity.specImg}/></div>
                   <div className='price-carddet-spec'>{amenity.spec}</div>
               </div>
            ))}
            </div>

           <div className='card-btn-space'>
           <div className='card-proj-btn'>View Project</div>
           <div className='card-enquire-btn'>Enquire Now</div>
           </div>

        </div>
    )
}

export default ProjectCard
