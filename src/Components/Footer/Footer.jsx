import React from 'react';
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-desktop">
        <div className="footer-left">
        <p>This website powered by</p>
        <p><a href="https://sammiehomeless.com" target="_blank" rel="noopener noreferrer">Sammie Homeless</a></p>
        </div>

        <div className="footer-center">
          <p>&copy; 2025 Alon Malts Music</p>
        </div>

        <div className="footer-right">
          <p>Follow me on social media:</p>
          <div className="social-links">
            <a href="#instagram">Instagram</a> | <a href="#youtube">Youtube</a> | <a href="#tiktok">Tick Tock</a>
          </div>
          <div className="support-links">
            <a href="https://patreon.com/alonmalts" target="_blank" rel="noopener noreferrer">Support on Patreon</a>
          </div>
        </div>
      </div>

      <div className="footer-mobile">
        <div className="footer-top-row">
          <div className="footer-left">
            <p>This website powered by <a href="https://sammiehomeless.com" target="_blank" rel="noopener noreferrer">Sammie Homeless</a></p>
          </div>
          <div className="footer-right">
            <div className="support-links">
              <a href="https://patreon.com/alonmalts" target="_blank" rel="noopener noreferrer">Support on Patreon</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom-row">
          <div className="footer-center">
            <p>&copy; 2025 Alon Malts Music</p>
          </div>
          <div className="footer-right">
            <p>Follow me on social media:</p>
            <div className="social-links">
              <a href="#instagram">Instagram</a> | <a href="#youtube">Youtube</a> | <a href="#tiktok">Tick Tock</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;