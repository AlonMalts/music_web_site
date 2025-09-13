import React from "react";
import "./Home.css";

const Home = ({ onCategoryChange }) => {
  const handleCategoryClick = (category) => {
    if (onCategoryChange) {
      onCategoryChange(category);
    }
  };

  return (
    <div className="home">
      <div className="welcome-section">
        <h1>Welcome to Alon Malts Music</h1>
        <p className="intro-text">
          Discover the world of music through my comprehensive platform. 
          Explore my musical journey, listen to original compositions, 
          watch music videos, and learn from professional music lessons.
        </p>
      </div>
      
      <div className="features-grid">
        <div className="feature-card" onClick={() => handleCategoryClick("Music library")}>
          <h3>🎵 Music Library</h3>
          <p>Browse and listen to my original music compositions and releases.</p>
        </div>
        
        <div className="feature-card" onClick={() => handleCategoryClick("Music videos")}>
          <h3>🎬 Music Videos</h3>
          <p>Watch music videos and live performances.</p>
        </div>
        
        <div className="feature-card" onClick={() => handleCategoryClick("Music Lessons")}>
          <h3>🎸 Music Lessons</h3>
          <p>Learn guitar, music theory, and composition with personalized lessons.</p>
        </div>
        
        <div className="feature-card" onClick={() => handleCategoryClick("About")}>
          <h3>👨‍🎤 About me</h3>
          <p>Learn about my musical journey and background.</p>
        </div>
      </div>
      
      <div className="cta-section">
        <h2>Ready to Explore?</h2>
        <p>Click on any category above to get started, or use the navigation menu at the top.</p>
      </div>
    </div>
  );
};

export default Home;
