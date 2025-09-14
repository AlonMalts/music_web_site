import React from 'react';
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>This website powered by Sammie Homeless</p>
        <p>Contact us: sammiehomeless@gmail.com</p>
      </div>

      <div className="footer-center">
        <p>&copy; 2025 Alon Malts Music</p>
      </div>

      <div className="footer-right">
        <p>Follow me on social media:</p>
        <div className="social-links">
          <a href="#instagram">Instagram</a> | <a href="#youtube">Youtube</a> | <a href="#tiktok">Tick Tock</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;