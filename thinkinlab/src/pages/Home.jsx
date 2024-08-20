import React, { useEffect, useState } from 'react';
import './Home.css'
import HeroSection from './hero';
import AboutUs from './About';
import Testimonials from './Testimonials';
import CarouselSection from './CarouselSection'

function Home() {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      setIsVisible(true);
    }, []);

    return (
      <div>
      <div className='emptyblock'></div>
        <section>
        <CarouselSection />
        <HeroSection />
        <HeroSection />
        <AboutUs />
        <Testimonials />


        </section>
        </div>
);
}
export default Home;
