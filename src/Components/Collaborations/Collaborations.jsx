import React from "react";
import "./Collaborations.css";

const Collaborations = () => {
  return (
    <div className="collaborations">
      <div className="collaborations-header">
        <h1>Collaborations & Services</h1>
        <p className="collaborations-intro">
          Ready to work together? I offer various music services including custom performances, 
          soundtracks, and collaborative projects. Let's create something amazing together!
        </p>
      </div>

      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">🎭</div>
          <h3>Live Performances</h3>
          <p>Book me for live performances, concerts, events, and special occasions. From intimate acoustic sets to full band performances.</p>
          <ul>
            <li>Wedding ceremonies & receptions</li>
            <li>Corporate events</li>
            <li>Private parties</li>
            <li>Concert venues</li>
            <li>Festivals & outdoor events</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="service-icon">🎬</div>
          <h3>Film & Game Soundtracks</h3>
          <p>Custom music composition for films, documentaries, video games, and multimedia projects.</p>
          <ul>
            <li>Original film scores</li>
            <li>Video game soundtracks</li>
            <li>Documentary music</li>
            <li>Commercial jingles</li>
            <li>Podcast intros & outros</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="service-icon">🎵</div>
          <h3>Music Production</h3>
          <p>Professional music production services for artists, bands, and content creators.</p>
          <ul>
            <li>Recording & mixing</li>
            <li>Song arrangement</li>
            <li>Instrumental tracks</li>
            <li>Vocal production</li>
            <li>Mastering services</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="service-icon">🤝</div>
          <h3>Collaborative Projects</h3>
          <p>Join forces for creative music collaborations and joint projects.</p>
          <ul>
            <li>Artist collaborations</li>
            <li>Band partnerships</li>
            <li>Cross-genre experiments</li>
            <li>Remix projects</li>
            <li>Musical workshops</li>
          </ul>
        </div>
      </div>

      <div className="contact-section">
        <h2>Ready to Collaborate?</h2>
        <p>Let's discuss your project and create something extraordinary together.</p>
        <div className="contact-info">
          <div className="contact-item">
            <strong>Email:</strong> alon@alonmaltsmusic.com
          </div>
          <div className="contact-item">
            <strong>Phone:</strong> +1 (555) 123-4567
          </div>
          <div className="contact-item">
            <strong>Response Time:</strong> Within 24 hours
          </div>
        </div>
        <button className="contact-button">Get In Touch</button>
      </div>
    </div>
  );
};

export default Collaborations;
