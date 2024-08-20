import React from 'react';
import STEMkit from '../../assets/STEM.jpg'
import BlackThemeCard from '../../components/BlackThemeCard';
import "./Schools.css"

const School = () => {
  return (
 
    <section className="pt-16 schoolpage">
     <div className="flex flex-wrap sm:flex-col md:flex-row lg:flex-row gap-3 p-8 justify-around">
      <BlackThemeCard 
        title="Robotics Club" 
        description="Join the robotics club and explore the world of robotics." 
        imageUrl={STEMkit} // Replace with your image path
        buttonText="Learn More"
        navigateTo="/robotics" // The route you want to navigate to
      />
      <BlackThemeCard 
        title="Science Lab" 
        description="Experiment with science projects in our state-of-the-art lab." 
        imageUrl={STEMkit} // Replace with your image path
        buttonText="Learn More"
        navigateTo="/science-lab" // The route you want to navigate to
      />
      {/* Add more cards as needed */}
    </div>
    </section>
 
  );
};

export default School;
