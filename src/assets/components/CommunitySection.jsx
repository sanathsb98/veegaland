import React, { useEffect, useState } from 'react';
import '../components/CommunitySection.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import slide1 from '../Images/slide1.png';
import slide2 from '../Images/slide2.png';
import slide3 from '../Images/slide3.png';
import slide4 from '../Images/slide4.png';
import slide5 from '../Images/slide4.png';

const CommunitySection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Fixes hydration issues in React 18

  const slides = [slide1, slide2, slide3, slide4, slide1, slide2, slide3, slide4]; // Duplicated for seamless effect

  return (
    <div className='community-section'>
      <div className='community-header'>A Community That Feels Like Family</div>
      <div className='community-description'>
        Hear from those who have experienced the comfort and joy of living at Veegaland Biophilic Urban Homes
      </div>

      <div className='community-videos-section'>
      <Swiper
  modules={[Autoplay]}

  autoplay={{
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
    reverseDirection: false,
  }}
  speed={5000} // Smooth scrolling speed
  loop={true} 
  freeMode={true} 
  allowTouchMove={false} 
  grabCursor={false} 
  breakpoints={{
    100: { slidesPerView: 3, spaceBetween: 200 }, // Below 1000px → Show 3 slides
    300: { slidesPerView: 1, spaceBetween: 200 }, // 300px - 480px → Show 1 slide
    480: { slidesPerView: 2, spaceBetween: 500 }, // 480px - 750px → Show 2 slides
    750: { slidesPerView: 2, spaceBetween: 200 }, // 750px - 950px → Show 3 slides
    950: { slidesPerView: 3, spaceBetween: 200 }, // Over 950px → Show 4 slides
    1750: { slidesPerView: 4, spaceBetween: 340 }, // Over 950px → Show 4 slides
 
  }}
>
  {slides.map((img, index) => (
    <SwiperSlide key={index}>
      <img src={img} alt={`Slide ${index}`} className="w-full h-auto rounded-lg" />
    </SwiperSlide>
  ))}
</Swiper>


      </div>

      <div className='community-btns'>
        <div className='community-watch-btn'>Watch Videos</div>
        <div className='community-learn-btn'>Learn More</div>
      </div>
    </div>
  );
};

export default CommunitySection;


