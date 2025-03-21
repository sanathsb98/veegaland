import React from 'react';
import '../pages/Home.css';
import Banner from '../components/Banner';
import OurApartments from '../components/OurApartments';
import CommunitySection from '../components/CommunitySection';

const Home = () => {
  return (
    <div className='home-page'>
      <Banner/>
      <OurApartments/>
      <CommunitySection/>
    </div>
  )
}

export default Home
