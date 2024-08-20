// src/components/AboutUs.jsx
import React, { useEffect, useRef, useState } from 'react';
import './About.css';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current); // Stop observing once visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`about-us-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="container mx-auto px-4 about-us-container">
        <h2 className="about-us-title">
          Know Who We Are!!!
        </h2>
        <p className="about-us-text">
          Welcome to <span className="highlight">Thinkin Lab</span>, 
          an innovative edtech company incubated by Anna University. We are dedicated to 
          empowering the next generation with cutting-edge STEM education. Our programs 
          immerse students in the exciting realms of <span className="bold">Robotics</span>, 
          <span className="bold">Coding</span>, <span className="bold">3D Printing</span>, 
          <span className="bold">IoT</span>, and <span className="bold">Artificial Intelligence</span>.
        </p>
        <p className="about-us-text">
          At Thinkin Lab, we champion a <span className="highlight">"For Apple"</span> 
          strategy, aiming to nurture creativity and innovation at every level. 
          Join us in shaping the future of technology and education.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
