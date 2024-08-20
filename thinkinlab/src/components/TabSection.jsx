import React, { useState } from 'react';
import './TabSection.css'; // Import the CSS file for Tabs

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0); // State to track the active tab

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active-tab' : ''}`}
            onClick={() => setActiveTab(tab.id)} // Handle tab change
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs[activeTab].sections.map((section, index) => (
          <div key={index} className="section">
            <img src={section.image} alt={section.title} className="section-image" />
            <div className="section-text">
              <h3 className="section-title">{section.title}</h3>
              <p className="section-description">{section.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
