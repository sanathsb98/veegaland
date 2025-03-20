import React from 'react';
import "../components/OurApartments.css";
import ProjectCard from './ProjectCard';

const OurApartments = () => {
    return (
        <div className='our-apartments-section'>
            <div className='our-apartments-content'>
                <div className='our-apartments-header'>
                    <div className='our-apartments-title'>Our Biophilic Apartment Projects in Kochi</div>
                    <div className='our-apartments-des'>Get to know Kerala’s Most Trusted Builder - Veegaland Homes’ Biophilic Luxury Apartments in Kochi</div>
                    <div className='projects-toggle-sec'>
                        <div className='proj-toggle-btn proj-btn-active'>All Projects</div>
                        <div className='proj-toggle-btn'>New Launch</div>
                        <div className='proj-toggle-btn'>On-Going</div>
                        <div className='proj-toggle-btn'>Nearing Completion</div>
                    </div>
                </div>
                <div className='our-apartments-cards'>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                </div>
            </div>
        </div>
    )
}

export default OurApartments
