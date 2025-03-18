import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import './Landing.css'; // Import CSS

const Landing = () => {
  return (
    <div className="page-container">
      <Navbar />
      <div className="content">
        <div className="about-image">
          <img src="/bgnew.png" alt="YBM BRILiaN" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
