import React from 'react';
import CustomCard from '../../components/unused/Card2';
import STEMKit from '../../assets/STEM.jpg'
const ATL = () => {
  return (
    <>
         <div className="flex flex-wrap justify-center gap-6 p-4">
      <CustomCard
        imageSrc={STEMKit}
        title="Robotics Club"
        description="Join our robotics club to explore the world of AI and automation."
        buttonText="Learn More"
        pageto=""  // This route should lead to the Lab page
      />
      </div>
    </>  );
};

export default ATL;
