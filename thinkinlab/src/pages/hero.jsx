import React from 'react';
import heroImage from '../assets/STEM.jpg'; // Replace with your image path
import './hero.css'

const HeroSection = () => {
  return (
    
    <section className="hero-bg flex flex-col md:flex-row items-center justify-between p-8 md:p-16">
     {/* Image Section */}
     <div className="md:w-1/2 hero-pic">
        <img src={heroImage} alt="STEM Education" className="w-full h-auto rounded-lg " />
      </div>
      {/* Quote Section */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="quote-text text-2xl lg:text-4xl md:text-3xl sm:text-2xl text-justify font-bold mb-4">
          "STEM education is the key to the future, providing the tools and skills needed to solve the world's challenges."
        </h1>
        <p className="text-lg para-text text-justify">
          Embrace the world of Science, Technology, Engineering, and Mathematics to unlock endless possibilities.
        </p>
      </div>

      
    </section>
  );
};

export default HeroSection;