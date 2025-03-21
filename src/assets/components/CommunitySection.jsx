import React, { useEffect, useState } from 'react';
import '../components/CommunitySection.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import slide1 from '../Images/slide1.png';
import slide2 from '../Images/slide2.png';
import slide3 from '../Images/slide3.png';
import slide4 from '../Images/slide4.png';

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
          spaceBetween={360}
          slidesPerView={4}
          autoplay={{
            delay: 0, // No delay between slides
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            reverseDirection: false, // Set to `true` for reverse scroll
          }}
          speed={4000} // Adjusts scroll speed (lower = faster)
          loop={true} // Enables infinite looping
          freeMode={true} // Allows smooth sliding instead of snapping
          allowTouchMove={false} // Disables user dragging
          grabCursor={false} // Removes grab cursor effect
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


