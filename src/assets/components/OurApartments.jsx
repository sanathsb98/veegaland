import React, { useState } from 'react';
import "../components/OurApartments.css";
import ProjectCard from './ProjectCard';
import getAllProjects from '../api/Projects';
import { Typewriter } from 'react-simple-typewriter';

const OurApartments = () => {
  // State for holding the active filter
  const [filter, setFilter] = useState('all');  // 'all', 'new', 'ongoing', 'nearing'

  const projects = getAllProjects();

  // Function to filter projects based on the selected filter
  const getFilteredProjects = () => {
    switch (filter) {
      case 'new':
        return projects.filter(project => project.newLaunch === true);
      case 'ongoing':
        return projects.filter(project => project.onGoing === true);
      case 'nearing':
        return projects.filter(project => project.nearingCompletion === true);
      default:
        return projects;
    }
  };

  // Function to handle the filter button click
  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  return (
    <div className='our-apartments-section'>
      <div className='our-apartments-content'>
        <div className='our-apartments-header'>
          <div className='our-apartments-title'>
            Our Biophilic Apartment Projects in Kochi
          </div>
          <div className='our-apartments-des'>
                 <Typewriter
                                    words={['Get to know Kerala’s Most Trusted Builder - Veegaland Homes’ Biophilic Luxury Apartments in Kochi']}
                                    loop={1}  // Adjust the loop as needed (1 means it will stop after typing once)
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={100}  // Speed of typing
                                    deleteSpeed={50}  // Speed of deleting (if you plan to add a delete effect)
                                    delaySpeed={1500}  // Delay before typing starts
                                />
          </div>
          <div className='projects-toggle-sec'>
            <div
              className={`proj-toggle-btn ${filter === 'all' ? 'proj-btn-active' : ''}`}
              onClick={() => handleFilterChange('all')}
            >
              All Projects
            </div>
            <div
              className={`proj-toggle-btn ${filter === 'new' ? 'proj-btn-active' : ''}`}
              onClick={() => handleFilterChange('new')}
            >
              New Launch
            </div>
            <div
              className={`proj-toggle-btn ${filter === 'ongoing' ? 'proj-btn-active' : ''}`}
              onClick={() => handleFilterChange('ongoing')}
            >
              On-Going
            </div>
            <div
              className={`proj-toggle-btn ${filter === 'nearing' ? 'proj-btn-active' : ''}`}
              onClick={() => handleFilterChange('nearing')}
            >
              Nearing Completion
            </div>
          </div>
        </div>
        <div className='our-apartments-cards'>
          {getFilteredProjects().map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              projectImage={project.projectImage}
              projectTitle={project.projectTitle}
              projectLocation={project.projectLocation}
              projectPrice={project.projectPrice}
              projectTag={project.projectTag}
              newLaunch={project.newLaunch}
              nearingCompletion={project.nearingCompletion}
              onGoing={project.onGoing}
              marqueeText={project.marqueeText}
              amenities={project.amenities}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurApartments;

