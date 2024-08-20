import React from 'react';
import CustomCard from '../../components/unused/Card';
const Lab = () => {
  return (
    <>
         <div className="flex flex-wrap justify-center gap-6 p-4">
      <CustomCard
        imageSrc="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
        title="Robotics Club"
        description="Join our robotics club to explore the world of AI and automation."
        buttonText="Learn More"
        pageto=""  // This route should lead to the Lab page
      />
      </div>
    </>  );
};

export default Lab;
