import React from 'react';
import '../pages/Home.css';
import Banner from '../components/Banner';
import OurApartments from '../components/OurApartments';

const Home = () => {
  return (
    <div className='home-page'>
      <Banner/>
      <OurApartments/>
    </div>
  )
}

export default Home
