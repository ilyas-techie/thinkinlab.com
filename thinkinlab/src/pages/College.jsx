import React from 'react';
import Tabs from '../components/TabSection'; // Import the Tabs component
import './College.css'; // Import the CSS file for Schools

const College = () => {
  const tabs = [
    {
      id: 0,
      label: 'Certification Courses',
      sections: [
        {
          title: 'IoT',
          image: 'https://via.placeholder.com/150',
          description: 'Description for Section 1 in Tab 1',
        },

        {
            title: 'Section 1',
            image: 'https://via.placeholder.com/150',
            description: 'Description for Section 1 in Tab 1',
          },

          {
            title: 'Section 1',
            image: 'https://via.placeholder.com/150',
            description: 'Description for Section 1 in Tab 1',
          },


        // Additional sections
      ],
    },
    {
      id: 1,
      label: 'Internships',
      sections: [
        {
          title: 'Section 1',
          image: 'https://via.placeholder.com/150',
          description: 'Description for Section 1 in Tab 2',
        },
        {
            title: 'Section 1',
            image: 'https://via.placeholder.com/150',
            description: 'Description for Section 1 in Tab 2',
          },
          {
            title: 'Section 1',
            image: 'https://via.placeholder.com/150',
            description: 'Description for Section 1 in Tab 2',
          },
        // Additional sections
      ],
    },
    {
      id: 2,
      label: 'Tab 3',
      sections: [
        {
          title: 'Section 1',
          image: 'https://via.placeholder.com/150',
          description: 'Description for Section 1 in Tab 3',
        },

        {
            title: 'Section 1',
            image: 'https://via.placeholder.com/150',
            description: 'Description for Section 1 in Tab 3',
          },

          {
            title: 'Section 1',
            image: 'https://via.placeholder.com/150',
            description: 'Description for Section 1 in Tab 3',
          },
        // Additional sections
      ],
    },
  ];

  return (
    <div className="school-page">
    <div className='content'>
      <Tabs tabs={tabs} /> {/* Pass the tabs data to the Tabs component */}
      </div>
    </div>
  );
};

export default College;
