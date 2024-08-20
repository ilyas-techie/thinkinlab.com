import React from 'react';
import _3Dprinting from '../../assets/WebSiteIlyasImages/01 College 3d Printing wobg.png'; // Replace with your image path
import './D3printing.css'

const HeroSection = () => {
  return (
    
    <section className="hero-bg flex flex-col md:flex-row items-center justify-between p-8 md:p-16">
     {/* Image Section */}
     <div className="md:w-1/2 hero-pic">
        <img src={_3Dprinting} alt="STEM Education" className="w-full h-auto rounded-lg " />
      </div>
      {/* Quote Section */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="quote-text text-2xl lg:text-4xl md:text-3xl sm:text-2xl text-justify font-bold mb-4">
        "Unleash the future—3D modeling and printing turn visions into reality, one layer at a time."
        </h1>
        <p className="text-lg para-text text-justify">
        Step into the future with 3D modeling and printing, where your wildest ideas are transformed into tangible creations. Harness cutting-edge technology to bring your imagination to life, layer by layer.
        </p>

        <button class="bg-black text-white font-semibold py-2 px-4 rounded hover:bg-gray-800">
  Learn now
</button>

      </div>

      
    </section>
  );
};

export default HeroSection;