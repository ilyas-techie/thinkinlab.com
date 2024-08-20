import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BlackThemeCard.css'; // Import the CSS file

const Card = ({ title, description, imageUrl, buttonText, navigateTo }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(navigateTo);
  };

  return (
    <div className="flex flex-col black-theme-card">
      <img src={imageUrl} alt={title} />
      <div className="content">
        <div className="title">{title}</div>
        <p className="description">{description}</p>
        <button 
          onClick={handleButtonClick}
          className="button"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
