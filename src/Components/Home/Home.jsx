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
          and watch music videos.
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
        
        
        <div className="feature-card" onClick={() => handleCategoryClick("About me")}>
          <h3>👨‍🎤 About me</h3>
          <p>Learn about my musical journey and background.</p>
        </div>
      </div>
      
      <div className="support-section">
        <h2>Support My Music</h2>
        <p>Help me continue creating music by supporting me on Patreon</p>
        <a 
          href="https://patreon.com/alonmalts" 
          target="_blank" 
          rel="noopener noreferrer"
          className="patreon-button"
        >
          🎵 Support on Patreon
        </a>
      </div>
      
    </div>
  );
};

export default Home;
