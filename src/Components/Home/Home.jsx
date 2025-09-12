import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="welcome-section">
        <h1>Welcome to Music Web Site</h1>
        <p className="intro-text">
          Discover the world of music through our comprehensive platform. 
          Explore my musical journey, listen to original compositions, 
          watch music videos, and learn from professional music lessons.
        </p>
      </div>
      
      <div className="features-grid">
        <div className="feature-card">
          <h3>🎵 Music Library</h3>
          <p>Browse and listen to my original music compositions and releases.</p>
        </div>
        
        <div className="feature-card">
          <h3>🎬 Music Videos</h3>
          <p>Watch music videos and live performances.</p>
        </div>
        
        <div className="feature-card">
          <h3>🎸 Music Lessons</h3>
          <p>Learn guitar, music theory, and composition with personalized lessons.</p>
        </div>
        
        <div className="feature-card">
          <h3>👨‍🎤 About</h3>
          <p>Learn about my musical journey and background.</p>
        </div>
      </div>
      
      <div className="cta-section">
        <h2>Ready to Explore?</h2>
        <p>Choose a category above to get started, or click on the logo anytime to return here.</p>
      </div>
    </div>
  );
};

export default Home;
