// src/components/Testimonials.jsx
import React from 'react';
import './Testimonials.css'; // Import the CSS file for styling

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="reviews">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">What people say about us!</h2>
        </div>

        <div className="testimonials-cards">
          <div className="testimonial-card">
            <div className="testimonial-header">
              <img className="testimonial-avatar" src="https://randomuser.me/api/portraits/women/12.jpg" alt="user avatar" />
              <div>
                <h6 className="testimonial-name">Daniella Doe</h6>
                <p className="testimonial-role">Mobile dev</p>
              </div>
            </div>
            <p className="testimonial-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, a suscipit, ratione ea totam ullam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.
            </p>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-header">
              <img className="testimonial-avatar" src="https://randomuser.me/api/portraits/women/14.jpg" alt="user avatar" />
              <div>
                <h6 className="testimonial-name">Jane Doe</h6>
                <p className="testimonial-role">Marketing</p>
              </div>
            </div>
            <p className="testimonial-text">
              Lorem ipsum dolor laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.
            </p>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-header">
              <img className="testimonial-avatar" src="https://randomuser.me/api/portraits/women/18.jpg" alt="user avatar" />
              <div>
                <h6 className="testimonial-name">Yanick Doe</h6>
                <p className="testimonial-role">Developer</p>
              </div>
            </div>
            <p className="testimonial-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.
            </p>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-header">
              <img className="testimonial-avatar" src="https://randomuser.me/api/portraits/women/2.jpg" alt="user avatar" />
              <div>
                <h6 className="testimonial-name">Jane Doe</h6>
                <p className="testimonial-role">Mobile dev</p>
              </div>
            </div>
            <p className="testimonial-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.
            </p>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-header">
              <img className="testimonial-avatar" src="https://randomuser.me/api/portraits/women/62.jpg" alt="user avatar" />
              <div>
                <h6 className="testimonial-name">Andy Doe</h6>
                <p className="testimonial-role">Manager</p>
              </div>
            </div>
            <p className="testimonial-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.
            </p>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-header">
              <img className="testimonial-avatar" src="https://randomuser.me/api/portraits/women/19.jpg" alt="user avatar" />
              <div>
                <h6 className="testimonial-name">Yanndy Doe</h6>
                <p className="testimonial-role">Mobile dev</p>
              </div>
            </div>
            <p className="testimonial-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
